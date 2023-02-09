import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import CategoryCardPlaceholder from "../../../assets/logo/CategoryCardPlaceholder.svg";

export default function CategoryCardSelected({ data, setSelectedCategory }) {
  //unset the selected category card
  function handleClick() {
    setSelectedCategory("");
  }

  return (
    <div
      className="h-[252px] w-[200px] sm:h-[80px] sm:w-[80px] flex flex-col items-center bg-[#e69d96] cursor-pointer border-4 border-[#304AC1] relative"
      style={{
        boxShadow: "0px 2px 8px #babfd8",
        // width: "200px",
        // height: "200px",
      }}
      onClick={handleClick}
    >
      <Image
        src={data.img || CategoryCardPlaceholder}
        width="200px"
        height="200px"
      />
      <div className="sm:hidden bg-[#f2f2f2]">
        <div
          className="text-center border-x-4 border-[#304AC1] border-t-0 py-3 text-xl font-medium text-[#2f3551] "
          style={{
            width: "200px",
            height: "52px",
          }}
        >
          {data.name}
        </div>
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
      </div>
    </div>
  );
}
