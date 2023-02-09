import Image from "next/image";
import Link from "next/link";
import search from "../../../assets/logo/search.svg";
import { useRef } from "react";

export default function LostHeader({ setQuery }) {
    let qinput = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(qinput.current.value);
    }

    return (
        <>
            <div
                className="flex flex-col gap-y-16 pt-16 pb-32 sm:pb-8 sm:pt-8 items-center justify-center bg-[#FFFFFF]"
                style={{ boxShadow: "0 8px 12px -5px rgba(0, 0, 0, 0.15)" }}
            >
                <h1 className="font-semibold text-[6rem] text-[#575C75] sm:text-[4rem] sm:mb-2">
                    Lost Items
                </h1>
                <div className="flex flex-row gap-14 flex-wrap -mt-24 scale-75 sm:scale-50  sm:justify-center">
                    <Link href="/add/lost">
                        <button className="py-4 px-24 rounded-xl sm:scale-125  bg-[#304AC1] text-[#ffffff] font-normal text-2xl  sm:text-lg">
                            <span className="font-[600]">Add lost item</span>
                        </button>
                    </Link>
                    <form
                        className="flex flex-row  sm:w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="rounded-l-xl  border-solid border-4 border-r-0 border-[#304ac1] w-[40vw] sm:w-full ">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                ref={qinput}
                                placeholder="Search lost items list..."
                                autoComplete="off"
                                className=" rounded-l-xl h-full w-full  text-xl text-[#abadba] placeholder:text-[#abadba] placeholder:font-normal placeholder:text-xl p-6"
                            />
                        </div>
                        <button
                            className=" px-3 py-2 rounded-r-xl -ml-1 border-solid border-t-4 border-r-4 border-b-4 border-[#304ac1] flex items-center "
                            type="submit"
                        >
                            <Image
                                src={search}
                                width={40}
                                height={40}
                                className="scale-50"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
