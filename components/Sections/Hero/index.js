import img1 from "../../../assets/Home/hero_img.svg";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Hero() {
    const router = useRouter();
    function handleLogin() {
        router.push("/signin");
    }
    return (
			<div className="flex flex-row justify-center items-center">
				<div className="flex flex-col justify-between items-center mr-10 w-[39%]">
					<div className="text-5xl mb-10 text-[#575c75] font-semibold">
						Nothing is ever lost that cannot be found
					</div>
					<div className="text-xl font-normal text-[#6d7392] mb-20">
						No more waiting for your emails to be answered and an end to the
						mails spam-o-war. Unite with your lost items in just a few clicks!
					</div>
					<div className="w-full ">
						<button
							className="px-24  py-3.5 bg-[#304ac1] text-[#ffffff] font-semibold text-2xl hover:bg-[#435cd0] rounded-lg"
							onClick={handleLogin}
						>
							Get Started
						</button>
					</div>
				</div>
				<div className="w-[25%] h-[25%] ml-12">
					<Image src={img1} alt="" />
				</div>
			</div>
		);
}
