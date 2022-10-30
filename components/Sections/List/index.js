import ListItem from "../../interfaces/ListItem";
import SortPlaceholder from "../../../assets/logo/sort.svg";
import Image from "next/image";
export default function List() {
    return (
			<div className="mt-20 px-36  mb-12 flex flex-col gap-10">
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
				<div className="w-full">
					<div className="bg-[#304ac1] rounded-xl py-7 text-[#ffffff]  flex flex-row justify-between items-center px-6 ">
						<div className="font-medium text-xl w-36 text-center">Photo</div>
						<div className="font-medium text-xl w-48 text-center">Name</div>
						<div className="font-medium text-xl w-[35vw] text-center">Description</div>
						<div className="font-medium text-xl w-32 text-center">Date Lost</div>
						<div className="font-medium text-xl w-32 text-center">Location</div>
					</div>
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
			</div>
		);
}
