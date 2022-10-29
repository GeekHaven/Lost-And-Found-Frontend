import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
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
            className="w-full h-14 flex flex-row items-center justify-end gap-x-14 p-8 pr-6"
            style={{ backgroundColor: "#ffffff" }}
        >
            {navLinks.map((navLink, i) => (
                <Link href={navLink.href} key={i}>
                    <a className="text-dark-300 text-lg font-normal">
                        {navLink.title}
                    </a>
                </Link>
            ))}
            <div></div>
        </div>
    );
}
