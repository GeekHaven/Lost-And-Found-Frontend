import img1 from "../../../assets/Upload.svg";
import { useState, useEffect } from "react";
import Image from "next/image";
// import fs from "fs";
import Footer from "../../../components/interfaces/Footer/index";
import { FileUploader } from "react-drag-drop-files";
import img2 from "../../../assets/illustrations/homepage2.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import Dropdown from "./../../../components/interfaces/Dropdown/Dropdown";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function lost_form() {
	const [file, setFile] = useState(null);
	const [fileDataURL, setFileDataURL] = useState(null);
	const handleChange = (file) => {
		setFile(file);
	};
	function remove() {
		setFile(null);
	}

	async function submit() {
		let data = new FormData();
		data["image"] = file;
		let res = await post("/uploadimage", data);
		if (res) {
			let url = res.data?.url;
			if (url) {
				let body = {};
			}
		}
	}

	useEffect(() => {
		let fileReader,
			isCancel = false;
		if (file) {
			fileReader = new FileReader();
			fileReader.onload = (e) => {
				const { result } = e.target;
				if (result && !isCancel) {
					setFileDataURL(result);
				}
			};
			fileReader.readAsDataURL(file);
		}
		return () => {
			isCancel = true;
			if (fileReader && fileReader.readyState === 1) {
				fileReader.abort();
			}
		};
	}, [file]);
	return (
		<>
			<div className="h-screen flex">
				<div className="flex flex-col w-screen justify-center items-center self-center my-auto">
					<h1 className="font-semibold text-5xl mb-10 text-[#304AC1]">
						Add Lost Item
					</h1>
					<div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pl-3">
						<input type="text" placeholder="Title" className="bg-transparent" />
					</div>
					<div className="text-sm box-border py-2 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA] pr-3">
						<Dropdown />
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
					{file === null ? (
						<div
							className="text-sm box-border flex items-center justify-center flex-wrap flex-col w-96 border-2 border-solid border-slate-400 rounded-md mb-5 bg-[#EBEFFA] pl-3 pr-3"
							style={{ position: "relative" }}
						>
							<div>
								<div className="text-center w-full text-base opacity-40">
									Add Image
								</div>
								<div className=" text-center w-full scale-75 opacity-40">
									<Image src={img1} className="" />
								</div>

								<div className="text-center w-full text-xs opacity-40 ">
									Drag or drop or browse a file
								</div>
							</div>
							<div
								style={{
									opacity: 0,
									position: "absolute",
								}}
							>
								<FileUploader
									handleChange={handleChange}
									name="file"
									types={fileTypes}
								/>
							</div>
						</div>
					) : (
						<div
							className="text-sm box-border flex py-4 pt-6 items-center justify-center flex-wrap flex-col w-96 border-2 border-solid border-slate-400 rounded-md mb-5 bg-[#EBEFFA] pl-3 pr-3"
							style={{ position: "relative" }}
						>
							<div className="" style={{ width: "50%", position: "relative" }}>
								<img src={fileDataURL} alt="preview" />
								<div
									style={{ position: "absolute", top: "-15px", right: "-15px" }}
									onClick={remove}
								>
									<IoCloseCircleOutline />
								</div>
							</div>
						</div>
					)}
					<button
						className="bg-[#304AC1] text-[#EBEFFA] h-11 w-96 rounded-md select-none"
						type="button"
						onClick={submit}
					>
						Add Lost Item
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
}
