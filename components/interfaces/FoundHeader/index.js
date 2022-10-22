import Image from "next/image";
import search from "../../../assets/logo/search.svg";
export default function FoundHeader() {
    return (
        <>
            <div className="flex flex-col gap-y-14 ml-4">
                <h1 className="font-bold text-4xl">Found Items</h1>
                <div className="flex flex-row gap-2 flex-wrap ">
                    <div className="flex flex-row ">
                        <div className="rounded-l-md bg-[#555555] border-solid border-2 border-black w-60">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Search found items list..."
                                className=" rounded-l-md h-full w-full bg-[#555555]  text-md text-[#ffffff] placeholder:text-[#ffffff] placeholder:font-normal placeholder:text-md "
                            />
                        </div>
                        <div className="bg-[#000000] px-3 py-2 rounded-r-md flex items-center">
                            <Image src={search} width={20} height={20} />
                        </div>
                    </div>
                    <button className=" py-4 px-14 rounded-md  border-solid border-2  border-[#121212] bg-white text-[#121212] font-normal text-xl">
                        Add found item
                    </button>
                </div>
            </div>
        </>
    );
}
