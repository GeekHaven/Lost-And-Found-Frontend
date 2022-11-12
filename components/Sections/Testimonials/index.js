import test1 from "../../../assets/Home/test1.svg";
import test2 from "../../../assets/Home/test2.svg";
import test3 from "../../../assets/Home/test3.svg";
import quote from "../../../assets/Home/quote.svg";
import Image from "next/image";
export default function Testimonials() {
    return (
			<div className="flex flex-col items-center gap-y-20">
				<div className="font-semibold text-5xl text-center text-[#575c75] -mb-8">
					See who we helped!
				</div>
				<div className="flex flex-row gap-x-14">
					<div className="w-[30rem]  scale-75 px-10 py-10 bg-[#EBEFFA] rounded-3xl flex flex-col justify-center items-center">
						<div className="text-center mb-5 mt-2">
							<Image src={quote} />
						</div>
						<div className="text-center text-[#6D7392] text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
						</div>
						<div className="text-center text-[#6D7392] text-lg font-semibold mt-5">
							~Lorem Ipsum
						</div>
					</div>

					<div className="w-[30rem] px-10 py-10 bg-[#EBEFFA] rounded-3xl flex flex-col justify-center items-center">
						<div className="text-center mb-5 mt-2">
							<Image src={quote} />
						</div>
						<div className="text-center text-[#6D7392] text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
						</div>
						<div className="text-center text-[#6D7392] text-lg font-semibold mt-5">
							~Lorem Ipsum
						</div>
					</div>

					<div className="w-[30rem] scale-75 px-10 py-10 bg-[#EBEFFA] rounded-3xl flex flex-col justify-center items-center">
						<div className="text-center mb-5 mt-2">
							<Image src={quote} />
						</div>
						<div className="text-center text-[#6D7392] text-base">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
						</div>
						<div className="text-center text-[#6D7392] text-lg font-semibold mt-5">
							~Lorem Ipsum
						</div>
					</div>
				</div>
			</div>
		);
}
