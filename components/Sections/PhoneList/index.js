import PhoneListItem from "../../interfaces/PhoneListItem";
import SortPlaceholder from "../../../assets/logo/sort.svg";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Phone_List({ data, fref, sortBy, setSortBy }) {
	const router = useRouter();
	return (
		<div className="mt-20 px-36 md:px-12 mb-12 flex flex-col gap-10">
			<div className="flex flex-row justify-between items-center">
				<div className="text-3xl font-semibold text-[#304AC1] ">
					Latest Posts
				</div>
				<button
					className=" text-xl font-normal text-[#575c75]"
					onClick={() => {
						setSortBy((sort) => {
							return !sort;
						});
					}}
				>
					Sort By{" "}
					<span>
						{sortBy ? (
							<BsTriangleFill color="currentcolor" className="inline" />
						) : (
							<BsTriangleFill
								color="currentcolor"
								className="inline rotate-180"
							/>
						)}
					</span>
				</button>
			</div>
			<div className="w-full">
				{data &&
					data.length > 0 &&
					data.map((item, i) => {
						console.log(item.id)
						if (data.length === i + 1) {
							return <PhoneListItem key={i} item={item} fref={fref} />;
						} else return <PhoneListItem key={i} item={item} />;
					})}
				{data?.length === 0 && (
					<h3 className="text-2xl  text-[#575c75] text-center py-5">
						No Items Found
					</h3>
				)}
			</div>
		</div>
	);
}
