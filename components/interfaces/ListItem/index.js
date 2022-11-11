import Image from "next/image";
import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
export default function ListItem({ index, item, fref }) {
    return (
        <>
            <div
                className="bg-[#ebeffa] rounded-xl  flex flex-row justify-between items-center p-6 m-3 ml-0 mr-0 cursor-pointer"
                style={{
                    boxShadow: "0px 8px 12px -10px rgba(84, 84, 84, 0.8)",
                }}
                ref={fref}
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
                <div className="font-normal text-lg text-[#0f1e57] w-[35vw] text-center">
                    {item.description}
                </div>
                <div className="font-semibold text-lg text-[#0f1e57] w-32 text-center">
                    12/10/2022
                </div>
                <div className="font-semibold text-lg text-[#0f1e57] w-32 text-center">
                    {item.location}
                </div>
            </div>
        </>
    );
}
