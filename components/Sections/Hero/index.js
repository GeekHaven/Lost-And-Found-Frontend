import img1 from "../../../assets/Home/hero_img.svg";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Hero() {
    const router = useRouter();
    function handleLogin() {
        router.push("/signin");
    }
    return (
			<div className="h-[80vh] flex justify-center items-center">
				<div className="flex flex-row justify-center items-center">
					<div className="flex flex-col justify-between items-center mr-10 w-[39%] lg:w-[70%] md:w-full md:mr-0">
						<div className="text-5xl lg:text-4xl mb-4 text-[#091553] font-semibold md:text-center">
							Nothing is ever lost that cannot be found
						</div>
						<div className="text-xl lg:text-lg font-normal text-[#575C75] mb-12 md:text-center">
							No more waiting for your emails to be answered and an end to the
							mails spam-o-war. Unite with your lost items in just a few clicks!
						</div>
						<div className="w-full md:hidden">
							<button
								className="px-24  lg:scale-75 lg:-mt-8 py-3.5 bg-[#304ac1] text-[#ffffff] font-semibold text-2xl hover:bg-[#435cd0] rounded-lg"
								onClick={handleLogin}
							>
								Get Started
							</button>
						</div>
						
						<div className="2xl:hidden md:flex">
						<Image src={img1} alt="" />
						</div>

						<div className="w-full md:flex 2xl:hidden lg:hidden sm:scale-75 mt-20 md:justify-center">
							<button	
								className="px-20 lg:-mt-8 py-3.5 bg-[#304ac1] text-[#ffffff] font-semibold text-2xl hover:bg-[#435cd0] rounded-lg"
								onClick={handleLogin}
							>
								Get Started
							</button>
						</div>

					</div>
					<div className="ml-24 lg:ml-4 md:hidden">
						<Image src={img1} alt="" />
					</div>
					

					
				</div>
			</div>
		);
}
