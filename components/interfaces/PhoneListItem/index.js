import React, { useContext } from "react";
import Image from "next/image";
import { Divider } from "antd";
import { useRouter } from "next/router";
import moment from "moment";

import UserContext from "../../utils/Contexts/userContext";
import location from "../../../assets/Location.svg";
import side from "../../../assets/side.svg";
import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
import { LostItemModal } from "../LostItemModal";
import { FoundItemModal } from "../FoundItemModal";

moment().format();
export default function Phone_ListItem({ item, fref }) {
  let { user } = useContext(UserContext);
  const router = useRouter();
  let date;
  if (router.pathname === "/lost") {
    date = new Date(item.lostDate);
  } else {
    date = new Date(item.foundDate);
  }

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
          <div
            className="mt-0 w-5 h-5"
            onClick={() => {
              if (router.pathname === "/lost") {
                LostItemModal({ id: item.id, user: user, router: router });
              } else {
                FoundItemModal({ id: item.id, user: user, router: router });
              }
            }}
          >
            <Image src={side}></Image>
          </div>
        </div>
      </div>
      <Divider style={{ marginTop: "0.5rem", marginBottom: "1rem" }} />
    </>
  );
}
