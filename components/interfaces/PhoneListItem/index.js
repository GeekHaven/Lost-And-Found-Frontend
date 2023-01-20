import React, { useEffect } from 'react'
import Image from "next/image";
import img1 from "../../../assets/illustrations/ListItemPlaceholder.png"
import location from "../../../assets/Location.svg";
import side from "../../../assets/side.svg";
import { Divider } from "antd";
import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
import { useRouter } from "next/router";
import { Tooltip } from "antd";
import ItemModal from "../LostItemModal";
import { useState } from "react";
import moment from "moment";
moment().format();
export default function Phone_ListItem({ item, fref }) {
    
	const router = useRouter();
	let date;
	if (router.pathname === "/lost") {
		date = new Date(item.lostDate);
	} else {
		date = new Date(item.foundDate);
	}
	const [visible, setVisible] = useState(false);

	return (
		<>
			<div className="box flex justify-between" ref={fref}>
				<div className="w-32 text-center">
					<Image
						src={item.image || ListItemPlaceholder}
						height={150}
						width={150}
					/>
				</div>

				<div className="font-normal flex flex-col justify-between text-lg text-[#0f1e57] w-[55%] py-1">
					<div className="title text-2xl text-[#304AC1] font-bold">
						{item.title}
					</div>
					<div className="item_lost_location flex -mt-1 flex-wrap items-center text-[#304AC1] font-medium text-lg">
						<div className="mt-0 mr-1 w-5 h-5">
							<Image src={location}></Image>
						</div>
						<div className="mt-1"> {item.location}</div>
					</div>
					<div className="date mt-5 text-[#4A4646] pb-1">
						{moment(date).fromNow()}
					</div>
				</div>
				<div className="flex items-center">
					<div className="mt-0 w-5 h-5" onClick={() => setVisible(true)}>
						<Image src={side}></Image>
					</div>
				</div>
			</div>
			<Divider style={{ marginTop: "0.5rem", marginBottom: "1rem" }} />
		</>
	);
}
