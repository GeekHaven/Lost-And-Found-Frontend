import Image from "next/image";
import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
export default function ListItem({ index }) {
    return (
        <>
            <div className="bg-[#ebeffa] rounded-xl  flex flex-row justify-between items-center p-6 ">
                <div>
                    <Image src={ListItemPlaceholder} />
                </div>
                <div className="font-normal text-lg text-[#0f1e57]">Name</div>
                <div className="font-normal text-lg text-[#0f1e57]">
                    Milton Water Bottle
                </div>
                <div className="font-semibold text-lg text-[#0f1e57]">
                    12/10/2022
                </div>
                <div className="font-semibold text-lg text-[#0f1e57]">CC3</div>
            </div>
        </>
    );
}
