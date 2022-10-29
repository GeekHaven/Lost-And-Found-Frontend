import ListItem from "../../interfaces/ListItem";
import SortPlaceholder from "../../../assets/logo/sort.svg";
import Image from "next/image";
export default function List() {
    return (
        <div className="mt-20 px-36  mb-12">
            <div className="flex flex-row justify-between items-center">
                <div className="text-4xl font-semibold text-[#575c75] ">
                    Complete List
                </div>
                <div className=" text-xl font-normal text-[#575c75]">
                    Sort By{" "}
                    <span>
                        <Image src={SortPlaceholder} />
                    </span>
                </div>
            </div>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
}
