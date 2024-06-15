'use client'
import { useDispatch, useSelector } from "react-redux"; 
import { DataTable } from "@/components/table/data-table";
import { memo, useEffect } from "react";
import { fetchLabProviders, fetchLabReportFromat } from "@/redux/slices/lab";
import { fetchAllTests, onUpdateReport } from "@/redux/slices/tests";
import moment from "moment";
import { useRouter } from "next/navigation";


const Home = () => {

    const navigate = useRouter()
    const dispatch = useDispatch();
    const { providers, reportsFormat } = useSelector((state) => state.Lab);
    const { tests } = useSelector((state) => state.Test);
    const { user } = useSelector((state) => state.User);

    useEffect(() => {
        dispatch(fetchLabProviders())
        const data = {
            id: user.id
        }
        dispatch(fetchLabReportFromat(data))
        const payload = {
            status: ['LAB_PROCESSING']
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
                    <div className="lg:space-x-2">
                        <button
                            onClick={() => handleView(row.original)}
                            className="green-gradient-2 text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            View
                        </button>
                        {/* <button
                            onClick={() => handleApprove(row.original)}
                            className="green-gradient-2 text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Verify
                        </button>
                        <button
                            onClick={() => handleReject(row.original)}
                            className="red-gradient text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Denied
                        </button> */}


                    </div> 
            ),
        },
    ];

    const handleApprove = async (row) => {
        console.log("Approving row:", row);
        
        dispatch(onUpdateReport({ id: row.id, status: "COMPLETED" }))
    };

    const handleView = async (row) => {
        console.log("Approving row:", row);
        navigate.push(`/dashboard/lab/tests/${row.id}`)        
        // dispatch(onUpdateReport({ id: row.id, status: "COMPLETED" }))
    };

    const handleReject = async (user) => {
        console.log("Rejecting user:", user);
        dispatch(onUpdateProviderData({ id: user.id, accountStatus: "DENIED" }))
    };


    const FilterComponent = <div className="space-x-2 flex">
        <div className="min-w-[150px] p-1.5 border rounded mb-4 text-sm px-3">
            <select
                className="w-full text-sm outline-none">
                <option>Select lab</option>
                {
                    providers?.map((item, index) =>
                        <option key={index} value={item.id}>{item?.username}</option>)
                }
            </select>
        </div>

        <div className="min-w-[150px] p-1.5 border rounded mb-4 text-sm px-3">
            <select className="w-full text-sm outline-none">
                <option>Select Test</option>
                {
                    reportsFormat?.map((item, index) =>
                        <option key={index} value={item.id}>{item?.name}</option>)
                }
            </select>
        </div>

    </div>
    console.log(tests)
    return (
        <main className="w-full">
            <DataTable columns={columns} data={tests} component={FilterComponent} />
        </main>
    );
}

export default memo(Home)