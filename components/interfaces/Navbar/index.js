import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import logo from "../../../assets/logo/nav_logo.svg";

const navLinks = [
	{
		title: "Home",
		href: "/home",
	},
	{
		title: "Instructions",
		href: "/instructions",
	},
	{
		title: "Lost",
		href: "/lost",
	},
	{
		title: "Found",
		href: "/found",
	},
];

export default function Navbar() {
	return (
		<div
			className="w-full h-14 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-12"
			style={{ backgroundColor: "#ffffff" }}
		>
			<div className=" ml-16 text-[#304AC1] flex flex-row items-center justify-center w-96">
				<Image src={logo} />
				<div className="ml-4 font-semibold text-2xl w-64">Lost&Found IIITA</div>
			</div>
			<div className="ml-[20vw] lg:ml-0 flex flex-row items-center justify-evenly w-[50vw] sm:hidden">
				{navLinks.map((navLink, i) => (
					<div className="text-dark-300 text-lg font-normal hover:text-[#304AC1] hover:border-b-2 px-2 hover:border-[#304AC1] ml-2 mr-2">
						<Link href={navLink.href} key={i}>
							{navLink.title}
						</Link>
					</div>
				))}
			</div>

			<div></div>
		</div>
	);
}
