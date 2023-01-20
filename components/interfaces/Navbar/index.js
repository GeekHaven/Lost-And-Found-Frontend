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

export default function Navbar() {
    let { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const router = useRouter();
    function handleLogout() {
        removeLS("jwt_token");
        setIsLoggedIn(false);
    }
    return (
      <div
        className="w-full top-0 z-[999] h-8 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-10"
        style={{
          boxShadow: "0 10px 10px -5px rgba(0, 0, 0, 0.15)",
          backgroundColor: "#ffffff",
        }}
      >
        <Link href="/">
          <div className=" ml-28 text-[#304AC1] flex flex-row items-center justify-center  cursor-pointer w-64">
            <Image src={logo} />
            {/* <div className="ml-4 font-[600] text-xl w-64 tracking-tight		">
							Lost&Found IIITA
						</div> */}
          </div>
        </Link>
        <div className="ml-[20vw] lg:ml-0 flex flex-row items-center justify-evenly w-[50vw] sm:hidden">
          {!(router.route === "/" || router.route === "") &&
            navLinks.map((navLink, i) => (
              <div className={styles.hoverUnderline} key={i}>
                <Link href={navLink.href}>
                  <span className="cursor-pointer">{navLink.title}</span>
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
