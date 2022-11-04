import img1 from "../../assets/Upload.svg";
import Image from "next/image";
import Footer from "./../../components/interfaces/Footer/index";

export default function found_form() {
	return (
		<>
			<div className="h-screen flex">
				<div className="flex flex-col w-screen justify-center items-center self-center my-auto">
					<h1 className="font-semibold text-5xl mb-10 text-[#304AC1]">
						Add Found Item
					</h1>
					<div className="text-sm box-border h-24 flex items-center justify-center flex-wrap flex-col w-96 border-2 border-solid border-slate-400 rounded-md mb-5 bg-[#EBEFFA] pl-3 pr-3">
						<div className="text-center w-full text-base opacity-40">
							Add Image
						</div>
						<div className=" text-center w-full scale-75 opacity-40">
							<Image src={img1} className="" />
						</div>
						<div className="text-center w-full text-xs opacity-40">
							Drag or drop or browse a file
						</div>
					</div>
					<div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
						<input type="text" placeholder="Title" className="bg-transparent" />
					</div>
					<div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
						<input
							className="bg-transparent"
							type="text"
							placeholder="Category"
						/>
					</div>

					<textarea
						className="text-sm box-border pt-3 pr-3 h-36 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3 "
						placeholder="Description..."
					></textarea>
					<div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
						<input
							className="bg-transparent"
							type="text"
							placeholder="Location"
						/>
					</div>

					<button
						className="bg-[#304AC1] text-[#EBEFFA] h-11 w-96 rounded-md select-none"
						type="button"
					>
						Add Found Item
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
