import Image from "next/image";
import Link from "next/link";
import search from "../../../assets/logo/search-white.svg";
import { useRef } from "react";
export default function FoundHeader({ setQuery }) {
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
                    Found Items
                </h1>
                <div className="flex flex-row gap-14 flex-wrap -mt-24 scale-75 sm:scale-50  sm:justify-center">
                    <form
                        className="flex flex-row  sm:w-full"
                        onSubmit={handleSubmit}
                    >
                        <div className="rounded-l-xl text-[#ffffff] w-[40vw] sm:w-full ">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                ref={qinput}
                                placeholder="Search found items list..."
                                autocomplete="off"
                                className=" rounded-l-md h-full w-full  bg-[#304AC1] text-xl text-[#ffffff] placeholder:text-[#ffffff] placeholder:font-normal placeholder:text-2xl p-6"
                            />
                        </div>
                        <button
                            className=" px-3 py-2 rounded-r-xl -ml-1 border-solid border-t-6 border-r-6 border-b-6 border-[#304ac1] bg-[#304AC1] flex items-center "
                            type="submit"
                        >
                            <Image
                                src={search}
                                width={60}
                                height={60}
                                className="scale-50"
                            />
                        </button>
                    </form>
                    <Link href="/add/found">
                        <button className="py-4 px-16 rounded-xl sm:scale-125 border-solid border-4 border-[#304ac1] font-normal text-2xl text-[#304AC1] sm:text-lg">
                            <span className="font-[600]">Add found item</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
