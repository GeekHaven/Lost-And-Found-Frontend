import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
const navLinks = [
    {
        title: "Home",
        href: "/home",
    },
    {
        title: "Lost",
        href: "/lost",
    },
    {
        title: "Found",
        href: "/found",
    },
    {
        title: "Submit",
        href: "/submit",
    },
];
export default function Navbar() {
    return (
        <div
            className="w-full h-14 flex flex-row items-center justify-end gap-x-14 pr-6"
            style={{ backgroundColor: "#D9D9D9" }}
        >
            {navLinks.map((navLink, i) => (
                <Link href={navLink.href} key={i}>
                    <a className="text-dark-300 text-xl font-normal">
                        {navLink.title}
                    </a>
                </Link>
            ))}
            <div></div>
        </div>
    );
}
