import { Modal } from "antd";
import { Divider, Tag, Button } from "antd";
import { BiTimeFive } from "react-icons/bi";
import img1 from "../../../assets/item_placeholder.png"
import location from "../../../assets/Location.svg"
import {SlLocationPin} from "react-icons/sl"
import Image from "next/image";
import { useEffect, useState } from "react";
import { get } from "../../utils/API";


export default function ItemModal({id, ...props }) {
	let [visible, setVisible] = useState(true);
    const hideModal = () => {
        setVisible(false);
    };
	let [data, setData] = useState(null);
	async function getData(){
		let res = await get("/lost/"+id);
		
	}
	useEffect(()=>{
	}, [id])
    return (
				<Modal
					open={visible}
					footer={null}
					closable={true}
					keyboard={true}
					onCancel={hideModal}
					title={null}
					centered={true}
					className="w-[700px]"
					bodyStyle={{ borderRadius: "10px" }}
					{...props}
				>
					<div className="box flex flex-col justify-evenly px-5 py-1">
						<div className="head  flex flex-row justify-between">
							<div className="h_left flex flex-row items-center">
								<div className="item_name text-2xl text-[#304AC1] font-bold">
									Milton Water bottle
								</div>
								<div className="tag ml-4 sm:mr-4 bg-[#767778] px-3 py-[2px] rounded text-[#ffffff] scale-90">
									Lost
								</div>
							</div>

							<div className="h_right">
								<div className="label text-[#9A9A9A]">Posted By</div>
								<div className="username text-md text-[#304AC1] font-bold -mt-1">
									Username
								</div>
							</div>
						</div>
						<Divider
							className="mt-[4px] mb-4"
							style={{ background: "#0000" }}
						/>
						<div className="body flex flex-row flex-wrap items-center justify-between">
							<div className="time flex flex-wrap items-center mb-2 text-xs sm:text-sm text-[#9A9A9A]">
								<BiTimeFive className="mr-1 sm:text-lg sm:mb-[0.1rem]" />4 weeks
								ago
							</div>
							<div className="content flex flex-row sm:flex-col justify-between">
								<div className="left w-[100%] text-center">
									<Image src={img1} className="w-full" />
								</div>
								<div className="right flex flex-col justify-evenly w-[70%] sm:w-[100%] sm: ml-4">
									<div className="item_lost_location flex flex-wrap items-center text-[#304AC1] font-medium text-lg">
										<div className="mt-2 mr-1">
											<Image src={location}></Image>
										</div>
										<div> CC3</div>
									</div>
									<div className="item_desc mt-0 mb-8 text-[#575C75] tracking-wide text-[14px]">
										A steel water bottle was lost in CC3. I saw it last 2 days
										ago. I saw it last 2 days ago.
									</div>
									<div className="contact">
										<div className="label">Contact Details</div>
										<div className="ph font-semibold text-[#091553]">
											9324238121
										</div>
										<div className="email font-semibold text-[#091553] mt-1">
											iit2021049@iiita.ac.in
										</div>
									</div>
									<div className="action mt-5 flex justify-between sm:justify-start">
										<Button className="found text-[#ffffff] w-28 sm:w-40 sm:mr-5 tracking-wide rounded-md bg-[#304AC1] p-2 px-4 text-[0.65rem]">
											Mark as Found
										</Button>
										<Button
											danger
											className="text-[#E2494F] w-28 border-solid sm:w-40 font-semibold tracking-wide border-2 rounded-md border-[#E2494F] p-2 px-4 text-[0.65rem]"
										>
											Delete
										</Button>
									</div>
								</div>
							</div>
							<div className="tags sm:mt-5">
								<Tag className="border-none text-[#9A9A9A] text-xs sm:text-sm bg-white -mr-1">
									#bottle
								</Tag>
								<Tag className="border-none text-[#9A9A9A] text-xs sm:text-sm bg-white -mr-1">
									#steel
								</Tag>
								<Tag className="border-none text-[#9A9A9A] text-xs sm:text-sm bg-white -mr-1">
									#milton
								</Tag>
							</div>
						</div>
					</div>
				</Modal>
		);
}
