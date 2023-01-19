import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/nav_logo.svg";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { removeLS } from "../../utils/LocalStorage";
import { useContext, useState } from "react";
import { Button, Modal } from "antd";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   function handleLogout() {
  //     removeLS("jwt_token");
  //     setIsLoggedIn(false);
  //   }
  const handleOk = () => {
    removeLS("jwt_token");
    setIsLoggedIn(false);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        destroyOnClose={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
		<h3 className="font-['Poppins'] text-2xl font-semibold -mt-2">Logout</h3>	
        <p className=" font-normal text-xl font-['Poppins'] mt-4 mb-4">
          Are you really sure you want to log out?
        </p>
        <div className="flex justify-center mt-8">
          <Button
            onClick={e=>handleCancel()}
            className="bg-[#304AC1] hover:bg-[#435cd0] mx-2 rounded-md text-[#FFFFFF] font-['Poppins']"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => handleOk()}
            className="border-2 border-solid border-[#E2494F] hover:bg-[#E2494F] hover:text-[#FFFFFF]  mx-2 rounded-md text-[#E2494F] font-['Poppins']"
          >
            Logout
          </Button>
        </div>
      </Modal>
      <div
        className="w-full z-[999] h-8 flex flex-row items-center justify-between sm:justify-center gap-x-14 p-10"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Link href="/">
          <div className=" ml-20 text-[#304AC1] flex flex-row items-center justify-center w-96 cursor-pointer w-64">
            <Image src={logo} className="w-64" />
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
                  <span className="cursor-pointer text-base">
                    {navLink.title}
                  </span>
                </Link>
              </div>
            ))}
          <div>
            {isLoggedIn && (
              <button
                onClick={(e) => setIsModalOpen(true)}
                className={styles.logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
