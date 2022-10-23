import Image from "next/image";
export default function ListItem() {
    return (
			<div
				className="flex flex-row gap-x-5 items-center pb-6 pt-6 border-b-2 border-y-[rgba(0,0,0,0.25)] justify-between"
				style={{
					marginLeft: "2vh",
					maxWidth: "75em",
				}}
			>
				<div className="flex flex-row gap-x-11 items-center">
					<div className="bg-slate-400 w-24 h-24"></div>
					<div className="flex flex-col gap-y-4">
						<p className="text-2xl font-medium">Milton Water Bottle</p>
						<p className="text-lg font-normal" style={{ width: "40vw" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.qwduhb2
							Lorem ipsum dolor sit amet, consectetur adipiscing elit...
							<span className="text-lg font-semibold">Read More</span>
						</p>
					</div>
				</div>
				<div style={{}}>
					<p className="text-lg font-normal">Lost on:</p>
					<p className="text-2xl font-medium">12/10/2022</p>
				</div>
			</div>
		);
}
