import Image from "next/image";
import CategoryCardPlaceholder from "../../../assets/logo/CategoryCardPlaceholder.svg";
export default function CategoryCard() {
    return (
        <div
            className="flex flex-col items-center bg-[#e69d96] cursor-pointer"
            style={{ boxShadow: "0px 2px 8px #babfd8" }}
        >
            <div className="py-14">
                <Image src={CategoryCardPlaceholder} />
            </div>
            <div className="bg-[#f2f2f2]">
                <div className="text-lg font-medium text-[#2f3551] py-5 px-16">
                    Water Bottle
                </div>
            </div>
        </div>
    );
}
