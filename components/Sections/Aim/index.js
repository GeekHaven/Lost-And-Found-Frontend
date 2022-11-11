import Image from "next/image";
import img1 from "../../../assets/Home/why.svg";

export default function Aim() {
	return (
		<div className="flex flex-col  justify-center gap-y-10 mt-32 mb-32">
			<div className="flex flex-col items-center justify-center gap-y-2">
				<div className="text-5xl font-semibold text-[#575c75]">
					Why Lost&Found?
				</div>
			</div>
			<div className="flex justify-between">
				<div className="w-[45%] ml-24 mt-4">
					<ul className="px-4" style={{ listStyleType: "disc" }}>
						<li className="text-lg font-normal text-[#6d7392]">
							Lost something? Found something? you can post the details of the
							lost/found items with ease
						</li>
						<li className="text-lg font-normal mt-8 text-[#6d7392]">
							No need to spam emails that nobody reads everafter!
						</li>
						<li className="text-lg font-normal mt-8 text-[#6d7392]">
							Normalised because Lost and Found is made for the sole purpose of
							finding the lost items.
						</li>
						<li className="text-lg font-normal mt-8 text-[#6d7392]">
							If bulk quantity of items are lost, Lost&Found helps you find your
							lost items faster than you can imagine!
						</li>
						<li className="text-lg font-normal mt-8 text-[#6d7392]">
							Easy to connect with users that have Found/Lost something.
						</li>
					</ul>
				</div>
				<div className="flex items-center mr-16 ">
					<Image src={img1} />
				</div>
			</div>
		</div>
	);
}
