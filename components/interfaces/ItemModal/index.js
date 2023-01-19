import { Modal } from "antd";
import { Divider, Tag, Button } from "antd";
import { BiTimeFive } from "react-icons/bi";
import img1 from "../../../assets/item_placeholder.png"
import location from "../../../assets/Location.svg"
import {SlLocationPin} from "react-icons/sl"
import Image from "next/image";


export default function ItemModal({ visible, setVisible }) {
    const hideModal = () => {
        setVisible(false);
    };
    return (
			<>
				<Modal
					visible={visible}
					footer={null}
					closable={false}
					keyboard={true}
					onCancel={hideModal}
					title={null}
					centered={true}
					className="w-[700px]"
					bodyStyle={{ borderRadius: "10px" }}
				>
					<div className="box flex flex-col justify-evenly px-5 py-1">
						<div className="head  flex flex-row justify-between">
							<div className="h_left flex flex-row items-center">
								<div className="item_name text-3xl text-[#304AC1] font-bold">
									Milton Water bottle
								</div>
								<div className="tag ml-4 bg-[#767778] px-3 py-[2px] rounded text-[#ffffff] scale-90">
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
							<div className="time flex flex-wrap items-center mb-2 text-[#9A9A9A]">
								<BiTimeFive className="mr-1" />4 weeks ago
							</div>
							<div className="content flex flex-row justify-between">
								<div className="left w-[100%]">
									<Image src={img1} alt="" />
								</div>
								<div className="right flex flex-col justify-evenly w-[70%] ml-4">
									<div className="item_lost_location flex flex-wrap items-center text-[#304AC1] font-medium text-xl">
										<Image src={location}></Image>
										&nbsp; CC3
									</div>
									<div className="item_desc mt-3 mb-8 text-[#575C75] tracking-wide text-[14px]">
										A steel water bottle was lost in CC3. I saw it last 2 days
										ago. I saw it last 2 days ago.
									</div>
									<div className="contact">
										<div className="label">Contact Details</div>
										<div className="ph">9324238121</div>
										<div className="email">atharvagadekar@gmail.com</div>
									</div>
									<div className="action">
										<button className="found">Mark as Found</button>
										<Button danger className="text-[#ff7875] ">
											Danger Default
										</Button>
									</div>
								</div>
							</div>
							<div className="tags">
								<Tag className="border-none text-[#9A9A9A] text-lg bg-white -mr-1">
									#bottle
								</Tag>
								<Tag className="border-none text-[#9A9A9A] text-lg bg-white -mr-1">
									#steel
								</Tag>
								<Tag className="border-none text-[#9A9A9A] text-lg bg-white -mr-1">
									#milton
								</Tag>
							</div>
						</div>
					</div>
				</Modal>
			</>
		);
}
