import Image from "next/image";
import Link from "next/link";
import search from "../../../assets/logo/search-white.svg";
export default function FoundHeader() {
	return (
		<>
			<div
				className="flex flex-col gap-y-16 pt-16 pb-32 items-center justify-center"
				style={{ boxShadow: "0 30px 40px -5px rgba(0, 0, 0, 0.15)" }}
			>
				<h1 className="font-semibold text-9xl text-[#575C75]">Found Items</h1>
				<div className="flex flex-row gap-14 flex-wrap ">
					<div className="flex flex-row  sm:w-full">
						<div className="rounded-l-m w-[40vw] sm:w-full">
							<input
								type="text"
								name="text"
								id="text"
								placeholder="Search found items list..."
								className=" rounded-l-md h-full w-full bg-[#5067D3] text-[#ffffff] text-xl placeholder:text-[#ffffff] placeholder:font-normal placeholder:text-xl p-6"
							/>
						</div>
						<div className=" px-3 py-2 rounded-r-md  bg-[#304AC1]  flex items-center ">
							<Image src={search} width={40} height={40} className="scale-75" />
						</div>
					</div>
					<button className="py-4 px-16 rounded-lg bg-[#ffffff] text-[#304AC1] border-solid border-4 border-[#304ac1] font-normal text-2xl  sm:text-lg">
						<Link href="/add/found">Add found item</Link>
					</button>
				</div>
			</div>
		</>
	);
}
