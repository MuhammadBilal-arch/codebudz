import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto relative overflow-hidden flex items-center justify-center min-h-screen bg-purple">
      <Link href="/dashboard/lab/analytics">
        <button className="bg-orange w-32 h-10 text-white">Dashboard</button>
      </Link>
    </div>
  );
}
