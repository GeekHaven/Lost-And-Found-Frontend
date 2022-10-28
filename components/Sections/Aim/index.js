import Image from "next/image";
import img1 from "../../../assets/Home/aim.svg";

export default function Aim() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-10 mt-32 mb-32">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="text-4xl font-semibold">
                    What we do what we do
                </div>
                <div className="font-normal text-xl">motive smth smth</div>
            </div>
            <div className="flex justify-between">
                <div className="w-[50%] ml-24 mt-4">
                    <ul className="px-4" style={{ listStyleType: "disc" }}>
                        <li className="text-lg font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Erat massa nec, tellus, eget sit. Sodales
                            amet, neque, aenean aliquam amet at morbi praesent
                            metus
                        </li>
                        <li className="text-lg font-normal mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Erat massa nec, tellus, eget sit. Sodales
                            amet, neque, aenean aliquam amet at morbi praesent
                            metus
                        </li>
                        <li className="text-lg font-normal mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Erat massa nec, tellus, eget sit. Sodales
                            amet, neque, aenean aliquam amet at morbi praesent
                            metus
                        </li>
                        <li className="text-lg font-normal mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Erat massa nec, tellus, eget sit. Sodales
                            amet, neque, aenean aliquam amet at morbi praesent
                            metus
                        </li>
                    </ul>
                </div>
                <div
                    className="absolute scale-[150%] -mt-28"
                    style={{ right: "-35vh" }}
                >
                    <Image
                        src={img1}
                        className="absolute scale-[65%] rotate-[-25.37deg] w-[75vw]"
                    />
                </div>
            </div>
        </div>
    );
}
