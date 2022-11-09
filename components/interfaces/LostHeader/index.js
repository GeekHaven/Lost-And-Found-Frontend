import Image from "next/image";
import Link from "next/link";
import search from "../../../assets/logo/search.svg";
export default function LostHeader() {
	return (
		<>
			<div
				className="flex flex-col gap-y-16 pt-16 pb-32 items-center justify-center"
				style={{ boxShadow: "0 30px 40px -5px rgba(0, 0, 0, 0.15)" }}
			>
				<h1 className="font-semibold text-9xl text-[#575C75]">Lost Items</h1>
				<div className="flex flex-row gap-14 flex-wrap ">
					<button className="py-4 px-16   rounded-lg   bg-[#304AC1] text-[#ffffff] font-normal text-2xl  sm:text-lg">
						<Link href="/add/lost">Add lost item</Link>
					</button>
					<div className="flex flex-row  sm:w-full">
						<div className="rounded-l-md  border-solid border-4 border-[#304ac1] w-[40vw] sm:w-full">
							<input
								type="text"
								name="text"
								id="text"
								placeholder="Search lost items list..."
								className=" rounded-l-md h-full w-full  text-xl text-[#abadba] placeholder:text-[#abadba] placeholder:font-normal placeholder:text-xl p-6"
							/>
						</div>
						<div className=" px-3 py-2 rounded-r-md border-solid border-t-4 border-r-4 border-b-4 border-[#304ac1] flex items-center ">
							<Image src={search} width={40} height={40} className="scale-50" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
