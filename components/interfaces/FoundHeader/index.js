import Image from "next/image";
import search from "../../../assets/logo/search.svg";
export default function FoundHeader() {
    return (
			<>
				<div className="flex flex-col gap-y-14 ml-4">
					<h1 className="font-bold text-3xl">Found Items</h1>
					<div className="flex flex-row gap-4 flex-wrap -mt-5">
						<div className="flex flex-row h-14" style={{ width: "40vw" }}>
							<div
								className="rounded-l-md bg-[#555555] border-solid border-2 border-black"
								style={{ width: "60vw" }}
							>
								<input
									type="text"
									name="text"
									id="text"
									placeholder="Search found items list..."
									className=" rounded-l-md h-full w-full bg-[#555555]  text-lg text-[#ffffff] placeholder:text-[#ffffff] placeholder:font-normal placeholder:text-md p-5"
								/>
							</div>
							<div className="bg-[#000000] px-3 py-2 rounded-r-md flex items-center ">
								<Image src={search} width={40} height={40} />
							</div>
						</div>
						<button className=" py-0 px-14  h-14 rounded-md  border-solid border-2  border-[#121212] bg-white text-[#121212] font-normal text-xl">
							Add found item
						</button>
					</div>
				</div>
			</>
		);
}