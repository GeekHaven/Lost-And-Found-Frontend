import Image from "next/image";
export default function ListItem() {
    return (
			<div
				className="flex flex-row gap-x-5 items-center pb-6 pt-6 border-b-2 ml-[2vh] sm:m-0 border-y-[rgba(0,0,0,0.25)] justify-between sm:justify-center"
				style={{
					maxWidth: "90vw",
				}}
			>
				<div className="flex flex-row gap-x-11 items-center">
					<div className="flex flex-col gap-y-4">
						<div className="bg-slate-400 w-24 h-24 sm:w-28 sm:h-28"></div>
						<div className="hidden sm:block sm:text-center sm:-mt-2">
							<p className="text-lg font-normal sm:text-s">Lost on:</p>
							<p className="text-2xl font-medium sm:text-xs">12/10/2022</p>
						</div>
					</div>

					<div className="flex flex-col gap-y-4">
						<p className="text-2xl font-medium">Milton Water Bottle</p>
						<p className="text-lg font-normal w-[40vw] sm:w-[50vw]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.qwduhb2
							Lorem ipsum dolor sit amet, consectetur adipiscing elit...
							<span className="text-lg font-semibold">Read More</span>
						</p>
					</div>
				</div>
				<div className="sm:hidden">
					<p className="text-lg font-normal">Lost on:</p>
					<p className="text-2xl font-medium">12/10/2022</p>
				</div>
			</div>
		);
}
