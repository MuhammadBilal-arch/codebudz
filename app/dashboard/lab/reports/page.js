'use client'
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "@/components/table/data-table";
import { memo, useEffect } from "react";
import { fetchAllTests, onUpdateReport } from "@/redux/slices/tests";
import moment from "moment";
import { useRouter } from "next/navigation";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useRouter()
    const { tests } = useSelector((state) => state.Test);
    const { user } = useSelector((state) => state.User);

    useEffect(() => {
        const payload = {
            // id: user.id,
            labId: user.labUserId,
            status: ["COMPLETED"]
        }
        dispatch(fetchAllTests(payload))
    }, [])

    const columns = [
        {
            accessorKey: "testType",
            header: "Test",
        },
        {
            accessorKey: "testDate",
            header: "test Date",
            cell: ({ row }) => row ? moment(row).format('MM-DD-YYYY') : "N/A",
        },
        {
            accessorKey: "provider.username", // This is the accessor for nested objects
            header: "Lab",
            cell: ({ row }) => row.original.provider ? row.original.provider.username : "N/A",
        },
        {
            accessorKey: "provider.phoneNumber", // This is the accessor for nested objects
            header: "Lab Contact",
            cell: ({ row }) => row?.original?.provider?.phoneNumber || "N/A"
        },
        {
            accessorKey: "patient.username", // This is the accessor for nested objects
            header: "Patient Name",
            cell: ({ row }) => row.original.patient ? row.original.patient.username : "N/A",
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                row.original.status === "IN_PROCESS" ?
                    <div className="lg:space-x-2">
                        <button
                            onClick={() => handleApprove(row.original)}
                            className="green-gradient-2 text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Move to Lab
                        </button>
                        {/* <button
                            onClick={() => handleReject(row.original)}
                            className="red-gradient text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Denied
                        </button> */}
                    </div> :
                    <div className={`${row.original.status === "LAB_PROCESSING" ? 'bg-yellow-500' : 'green-gradient-2'} text-white text-center p-1.5 px-4 text-xs rounded min-w-28 max-w-40`}>{row.original.status}</div>
            ),
        },
    ];

    const handleApprove = async (row) => {
        console.log("Approving row:", row);
        
        dispatch(onUpdateReport({ id: row.id, status: "LAB_PROCESSING" }))
    };

    // const handleReject = async (user) => {
    //     console.log("Rejecting user:", user);
    //     dispatch(onUpdateProviderData({ id: user.id, accountStatus: "DENIED" }))
    // };


    const FilterComponent = <>Completed Reports</>
        // <button
        //     onClick={() => navigate.push('/dashboard/provider/tests/add')}
        //     type="button"
        //     className="green-gradient min-w-32 text-white py-1.5 text-sm px-4 rounded-sm"
        // >
        //     Add Test
        // </button>

    console.log(tests)
    return (
        <main className="w-full">
            <DataTable columns={columns} data={tests} component={FilterComponent} />
        </main>
    );
}

export default memo(Home)