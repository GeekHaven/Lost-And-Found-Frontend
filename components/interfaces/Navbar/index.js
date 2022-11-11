import Image from "next/image";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import logo from "../../../assets/logo/nav_logo.svg";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { removeLS } from "../../utils/LocalStorage";
import { useContext } from "react";

import UserContext from "../../utils/Contexts/userContext";
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
];

export default function Navbar() {
    let { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn);
    const router = useRouter();
    function handleLogout() {
        removeLS("jwt_token");
        setIsLoggedIn(false);
    }
    console.log(router);
    return (
        <div
            className="w-full h-14 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-12"
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            <Link href="/">
                <div className=" ml-16 text-[#304AC1] flex flex-row items-center justify-center w-96 cursor-pointer">
                    <Image src={logo} />
                    <div className="ml-4 font-semibold text-2xl w-64">
                        Lost&Found IIITA
                    </div>
                </div>
            </Link>
            <div className="ml-[20vw] lg:ml-0 flex flex-row items-center justify-evenly w-[50vw] sm:hidden">
                {!(router.route === "/" || router.route === "") &&
                    navLinks.map((navLink, i) => (
                        <div className={styles.hoverUnderline} key={i}>
                            <Link href={navLink.href}>
                                <span className="cursor-pointer">
                                    {navLink.title}
                                </span>
                            </Link>
                        </div>
                    ))}
                <div>
                    {isLoggedIn && (
                        <button
                            onClick={handleLogout}
                            className={styles.logout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
