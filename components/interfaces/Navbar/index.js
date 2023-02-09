import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/nav_logo.svg";

export default function Navbar() {
  return (
    <div
      className="w-full top-0 z-[999] h-8 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-10"
      style={{
        boxShadow: "0 10px 10px -5px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#ffffff",
      }}
    >
      <Link href="/">
        <div className=" ml-28 md:ml-0 text-[#304AC1] flex flex-row items-center justify-center  cursor-pointer w-64">
          <Image src={logo} />
        </div>
      </Link>
    </div>
  );
}
