import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className="h-[100vh] bg-red-200">
    <div className=" h-[100vh] flex flex-col items-center justify-start pt-[200px] bg-blue-200 gap-10  ">
      <h1 className="text-3xl text-green-500">Welcome to Stock app</h1>
      <Link href="\login"><button className=" py-2 px-6 bg-black text-white rounded-xl">Get Started</button></Link>
    </div>
   </main>
  );
}
