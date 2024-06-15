
import { columns } from "./columns";
import { DataTable } from "@/components/table/data-table";

const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    return data.json();
};

export default async function Home() {

    const data = await getUsers();

    return (
        <main className="flex  w-full">
            <DataTable columns={columns} data={data} />
        </main>
    );
}