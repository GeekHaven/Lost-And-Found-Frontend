export default function AppHeader() {
    return (
			<>
				<div
					className="flex flex-col gap-y-16 pt-16 pb-32 items-center justify-center"
					style={{ boxShadow: "0 30px 40px -5px rgba(0, 0, 0, 0.15)" }}
				>
					<h1 className="font-semibold text-7xl text-[#575C75]">
						What have you Lost/Found today ?
					</h1>
					<div className="flex flex-row gap-14 flex-wrap ">
						<button
							className="py-3.5 px-24   rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg"
							style={{ boxShadow: "0px 8px 20px -10px #10237b" }}
						>
							Lost Item
						</button>
						<button
							className="py-3.5 px-24   rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg"
							style={{ boxShadow: "0px 8px 20px -10px #10237b" }}
						>
							Found Item
						</button>
					</div>
				</div>
			</>
		);
}
