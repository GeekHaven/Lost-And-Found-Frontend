import Image from "next/image";
import Link from "next/link";
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

export default function Navbar2() {
    let { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const router = useRouter();
    function handleLogout() {
        removeLS("jwt_token");
        setIsLoggedIn(false);
    }
    return (
			<div
				className="w-full z-[999] h-8 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-10"
				style={{
					backgroundColor: "#ffffff",
				}}
			>
				<Link href="/">
					<div className=" ml-20 text-[#304AC1] flex flex-row items-center justify-center w-96 cursor-pointer">
						<Image src={logo} />
						<div className="ml-4 font-[600] text-xl w-64 tracking-tight		">
							Lost&Found IIITA
						</div>
					</div>
				</Link>
				<div className="ml-[20vw] lg:ml-0 flex flex-row items-center justify-evenly w-[50vw] sm:hidden">
					{!(router.route === "/" || router.route === "") &&
						navLinks.map((navLink, i) => (
							<div className={styles.hoverUnderline} key={i}>
								<Link href={navLink.href}>
									<span className="cursor-pointer text-base">{navLink.title}</span>
								</Link>
							</div>
						))}
					<div>
						{isLoggedIn && (
							<button onClick={handleLogout} className={styles.logout}>
								Logout
							</button>
						)}
					</div>
				</div>
			</div>
		);
}
