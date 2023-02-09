import Image from "next/image";
import CategoryCardPlaceholder from "../../../assets/logo/CategoryCardPlaceholder.svg";
export default function CategoryCard({ data, setSelectedCategory }) {
  //set the selected category card
  function handleClick() {
    setSelectedCategory(data.id);
  }

  return (
    <div
      className="h-[252px] w-[200px] sm:h-[80px] sm:w-[80px] flex flex-col items-center bg-[#e69d96] cursor-pointer "
      style={{
        position: "relative",
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
          className="text-center py-3 text-xl font-medium text-[#2f3551] "
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
