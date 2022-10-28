import test1 from "../../../assets/Home/test1.svg";
import test2 from "../../../assets/Home/test2.svg";
import test3 from "../../../assets/Home/test3.svg";
import Image from "next/image";
export default function Testimonials() {
    return (
        <div className="flex flex-col items-center gap-y-20">
            <div className="font-semibold text-4xl text-center -mb-8">
                See who we helped!
            </div>
            <div className="flex flex-row gap-x-14">
                <Image src={test1} />
                <Image src={test2} />
                <Image src={test3} />
            </div>
        </div>
    );
}
