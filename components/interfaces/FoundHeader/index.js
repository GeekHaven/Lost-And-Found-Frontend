import Image from "next/image";
import search from "../../../assets/logo/search.svg";
export default function FoundHeader() {
    return (
        <>
            <div className="flex flex-col gap-y-14 pl-24">
                <h1 className="font-bold text-4xl p-6">Found Items</h1>
                <div className="flex flex-row gap-4 flex-wrap pb-20">
                    <div className="flex flex-row">
                        <div className="rounded-l-md w-96 h-14 bg-[#555555] border-solid border-2 border-black">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Search found items list..."
                                className=" rounded-l-md h-full w-full bg-[#555555]  text-md text-[#ffffff] placeholder:text-[#ffffff] placeholder:font-normal placeholder:text-md placeholder:p-6"
                            />
                        </div>
                        <div className="bg-[#000000] px-3 py-2 rounded-r-md flex items-center h-14">
                            <Image src={search} width={20} height={20} />
                        </div>
                    </div>
                    <button className="h-14 py-3 px-14 rounded-md  border-solid border-2  border-[#121212] bg-white text-[#121212] font-normal text-xl">
                        Add found item
                    </button>
                </div>
            </div>
        </>
    );
}
