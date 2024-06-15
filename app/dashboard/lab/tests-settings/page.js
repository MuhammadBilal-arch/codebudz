'use client'
import { useDispatch, useSelector } from "react-redux";
import { DataTable } from "@/components/table/data-table";
import { memo, useEffect } from "react";
import { fetchLabReportFromat, onDeleteReportFormat } from "@/redux/slices/lab";
import moment from "moment";
import { useRouter } from "next/navigation";


const Home = () => {
    const dispatch = useDispatch();
    const navigate = useRouter()
    const { reportsFormat } = useSelector((state) => state.Lab);
    const { user } = useSelector((state) => state.User);

    useEffect(() => {
        const data = {
            id: user.id
        }
        dispatch(fetchLabReportFromat(data))
    }, [])

    console.log(reportsFormat)
    const columns = [
        {
            accessorKey: "id",
            header: "Sr No.",
        },
        {
            accessorKey: "name",
            header: "Test",
        },
        {
            accessorKey: "createdAt",
            header: "test Date",
            cell: ({ row }) => row ? moment(row).format('MM-DD-YYYY') : "N/A",
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => (

                <div className="space-x-2">
                    <button
                        onClick={() => navigate.push(`/dashboard/lab/tests-settings/edit/${row.original.id}`)}
                        className="green-gradient-2 text-white p-1.5 px-4 text-xs rounded min-w-28"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleReject(row.original)}
                        className="red-gradient text-white p-1.5 px-4 text-xs rounded min-w-28"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const handleReject = async (user) => {

        dispatch(onDeleteReportFormat({ id: user.id }))
    };


    const FilterComponent =
        <button
            onClick={() => navigate.push('/dashboard/lab/tests-settings/add')}
            type="button"
            className="green-gradient min-w-32 text-white py-1.5 text-sm px-4 rounded-sm"
        >
            Add New Test
        </button>
    console.log(reportsFormat)
    return (
        <main className="w-full">
            <DataTable columns={columns} data={reportsFormat} component={FilterComponent} />
        </main>
    );
}

export default memo(Home)