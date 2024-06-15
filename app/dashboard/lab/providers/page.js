'use client'
import { DataTable } from "@/components/table/data-table";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { fetchLabProviders, onUpdateProviderData } from "@/redux/slices/lab";

const Home = () => {
    const dispatch = useDispatch();
    const { providers, isLoading } = useSelector((state) => state.Lab);

    useEffect(() => {
        dispatch(fetchLabProviders())
    }, [])

    const columns = [
        {
            accessorKey: "username",
            header: "Username",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "phoneNumber",
            header: "Phone Number",
            cell: ({ value }) => value ? value : "N/A",
        },
        {
            accessorKey: "username",
            header: "Name"
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (
                row.original.accountStatus === "APPROVAL_REQUIRED" ?
                    <div className="space-x-2">


                        <button
                            onClick={() => handleApprove(row.original)}
                            className="green-gradient-2 text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Approve
                        </button>
                        <button
                            onClick={() => handleReject(row.original)}
                            className="red-gradient text-white p-1.5 px-4 text-xs rounded min-w-28"
                        >
                            Reject
                        </button>


                    </div> :
                    <div className={`${row.original.accountStatus === "REJECTED" ? 'red-gradient' :'green-gradient-2'} text-white text-center p-1.5 px-4 text-xs rounded min-w-28 max-w-28`}>{row.original.accountStatus}</div>
            ),
        },
    ];

    const handleApprove = async (user) => {
        console.log("Approving user:", user);
        dispatch(onUpdateProviderData({ id: user.id, accountStatus: "APPROVED" }))
    };

    const handleReject = async (user) => {
        console.log("Rejecting user:", user);
        dispatch(onUpdateProviderData({ id: user.id, accountStatus: "DENIED" }))
    };

    return (
        <main className="flex  w-full">
            <DataTable columns={columns} data={providers} />
        </main>
    );
}

export default memo(Home)