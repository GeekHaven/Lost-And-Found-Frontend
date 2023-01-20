import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

import UserContext from "../../utils/Contexts/userContext";
import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
import { LostItemModal } from "../LostItemModal";
import { FoundItemModal } from "../FoundItemModal";

export default function ListItem({ item, fref }) {
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
      <div
        className="bg-[#ebeffa] rounded-xl  flex flex-row justify-between items-center p-6 m-3 ml-0 mr-0 cursor-pointer"
        style={{
          boxShadow: "0px 8px 12px -10px rgba(84, 84, 84, 0.8)",
        }}
        ref={fref}
        onClick={() => {
          if (router.pathname === "/lost") {
            LostItemModal({ id: item.id, user: user, router: router });
          } else {
            FoundItemModal({ id: item.id, user: user, router: router });
          }
        }}
      >
        <div className="w-36 text-center">
          <Image
            src={item.image || ListItemPlaceholder}
            height={150}
            width={150}
          />
        </div>

        <div className="font-normal text-lg text-[#0f1e57] w-48 text-center">
          {item.title}
        </div>
        <div className="font-normal text-lg text-[#0f1e57] w-[35vw] text-center sm:hidden">
          {item.description}
        </div>
        <div className="font-semibold text-lg text-[#0f1e57] w-32 text-center">
          {date.toLocaleDateString()}
        </div>
        <div className="font-semibold text-lg text-[#0f1e57] w-32 text-center">
          {item.location}
        </div>
      </div>
    </>
  );
}
