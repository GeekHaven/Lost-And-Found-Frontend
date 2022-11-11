import Image from "next/image";
import CategoryCardPlaceholder from "../../../assets/logo/CategoryCardPlaceholder.svg";
import { BsCheckCircleFill } from "react-icons/bs";

export default function CategoryCardSelected({ data, setSelectedCategory }) {
    function handleClick() {
        setSelectedCategory("");
    }
    return (
        <div
            className="flex flex-col items-center bg-[#e69d96] cursor-pointer border-4 border-[#304AC1] relative"
            style={{
                boxShadow: "0px 2px 8px #babfd8",
                width: "200px",
                height: "200px",
            }}
            onClick={handleClick}
        >
            <div>
                <BsCheckCircleFill
                    color="#304AC1"
                    size={30}
                    style={{
                        position: "absolute",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        top: 0,
                        right: 0,
                        transform: "translate(50%, -50%)",
                    }}
                />
            </div>
            <div>
                <img
                    src={data.img}
                    style={{
                        width: "200px",
                        height: "148px",
                    }}
                />
            </div>
            <div className="bg-[#f2f2f2]">
                <div
                    className="text-center border-4 border-[#304AC1] border-t-0 py-3 text-xl font-medium text-[#2f3551] "
                    style={{
                        width: "200px",
                        height: "52px",
                    }}
                >
                    {data.name}
                </div>
            </div>
        </div>
    );
}
