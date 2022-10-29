import Image from "next/image";
import img1 from "../../../assets/Home/aim.svg";

export default function Aim() {
    return (
        <div className="flex flex-col items-center justify-center gap-y-10 mt-32 mb-32">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="text-4xl font-semibold">
                    Why Lost&Found? 
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-[50%] ml-24 mt-4">
                    <ul className="px-4" style={{ listStyleType: "disc" }}>
                        <li className="text-lg font-normal">
                            Lost something? Found something? you can post the details of the lost/found items with ease
                        </li>
                        <li className="text-lg font-normal mt-8">
                            No need to spam emails that nobody reads everafter!
                        </li>
                        <li className="text-lg font-normal mt-8">
                            Normalised because Lost and Found is made for the sole purpose of finding the lost items.
                        </li>
                        <li className="text-lg font-normal mt-8">
                            If bulk quantity of items are lost, Lost&Found helps you find your lost items faster than you can imagine!
                        </li>
                        <li className="text-lg font-normal mt-8">
                            Easy to connect with users that have Found/Lost something.
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
