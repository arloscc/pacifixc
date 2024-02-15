import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="h-[75svh] items-center justify-center flex shadow-slate-950 ">
        <div className="">
          <h1 className="flex m-auto text-white font-medium text-8xl  ">
            Pacifixc
          </h1>
          <h1 className="text-white text-xl flex items-center justify-between ">
            visit discord server 
            <Link className="mx-2" href="https://discord.gg/Sr7T73wd7Y">
              <button
                className="px-4 py-2 bg-slate-900 rounded-xl hover:scale-100 scale-75  duration-300 hover:bg-slate-800 hover:text-slate-950"
                title="button"
              >
               join
              </button>
            </Link>
          </h1>


        </div>
      </div>
        <div className="flex justify-evenly text-white">
            <h1 className="p-4">mabar valo</h1>
            <h1 className="p-4">mabar valo lagi</h1>
            <h1 className="p-4">mabar valo juga</h1>
            <h1 className="p-4">mabar valo :v</h1>
            
            
            
            </div>
  
    </>
  );
}
