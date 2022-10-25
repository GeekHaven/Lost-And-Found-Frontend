import Image from "next/image";
import img1 from "../../assets/Home/hiw1.svg";
import img2 from "../../assets/Home/hiw2.svg";
import img3 from "../../assets/Home/hiw3.svg";

export default function HIW() {
	return (
		<div className="flex flex-col items-center justify-center gap-y-10 mt-32">
			<div className="flex flex-col items-center justify-center gap-y-2">
				<div className="text-4xl font-semibold">How it works!</div>
				<div className="font-normal text-xl">in 3 simple steps</div>
			</div>
			<div className="flex flex-row gap-x-28">
				<div className="flex flex-col gap-y-6 items-center">
					<Image src={img1} />

					<div className="font-normal text-base text-center ml-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
						tincidunt pharetra Lorem ipsum dolor sit amet, consectetu
					</div>
				</div>
				<div className="flex flex-col gap-y-6 items-center">
					<Image src={img2} />
					<div className="font-normal text-base text-center ml-10 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
						tincidunt pharetra Lorem ipsum dolor sit amet, consectetu
					</div>
				</div>
				<div className="flex flex-col gap-y-6 items-center">
					<Image src={img3} />
					<div className="font-normal text-base text-center ml-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
						tincidunt pharetra Lorem ipsum dolor sit amet, consectetu
					</div>
				</div>
			</div>
		</div>
	);
}
