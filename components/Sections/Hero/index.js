import img1 from "../../../assets/Home/hero_img.svg";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-between items-center mr-10 w-[40%]">
                <div className="text-5xl mb-6">
                    Nothing is ever lost that cannot be found
                </div>
                <div className="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                    tincidunt pharetra tristique egestas pellentesque.
                </div>
                <div className="w-full mt-12">
                    <button className="p-3 rounded-md	 pl-8 pr-8 bg-[#5B5B5B] text-black">
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
