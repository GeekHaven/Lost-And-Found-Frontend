import { useRef, useContext } from "react";
import { useRouter } from "next/router";
import SignInForm from "../../components/interfaces/SignInForm";
import SEO from "../../components/utils/SEO";
import { post } from "../../components/utils/API";
import { storeLS } from "../../components/utils/LocalStorage";
import UserContext from "../../components/utils/Contexts/userContext";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { notification } from "antd";
const openNotification = (placement) => {
    notification.error({
        description: "Wrong password",
        placement,
    });
};
export default function SignIn() {
    const router = useRouter();
    const username = useRef(null);
    const password = useRef(null);
    const { setIsLoggedIn } = useContext(UserContext);
    const [hide, setHide] = useState(true);

    async function handleLogin() {
        let res = await post("/auth", {
            username: username.current.value,
            password: password.current.value,
        });
        console.log(res);
        if (res.data) {
            storeLS("jwt_token", res.data.secret);
            setIsLoggedIn(true);
            router.push("/home");
        } else {
            router.push("/");
        }
    }

    function toggleShow() {
        setHide(!hide);
    }

    return (
        <div className="h-screen flex">
            <SEO
                title="SignIn / LostNFound"
                desc="SignIn to Lost And Found IIITA "
            />
            <div className="flex flex-col w-screen justify-center items-center self-center my-auto">
                <h1 className="font-semibold text-5xl mb-10 text-[#304AC1]">
                    Sign In
                </h1>
                <div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA]">
                    <FaUserAlt
                        className="h-5 w-5 self-start my-auto mx-3"
                        color="#262626"
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        ref={username}
                        className="bg-transparent"
                    />
                </div>
                <div className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-14 flex align-middle bg-[#EBEFFA]">
                    <IoMdLock
                        className="h-6 w-6 self-start my-auto mx-2"
                        color="#262626"
                    />
                    <input
                        className="bg-transparent"
                        type={hide ? "password" : "text"}
                        placeholder="Password"
                        ref={password}
                    />
                    {hide ? (
                        <BiShow
                            className="h-6 w-6 self-start my-auto ml-auto mr-3 cursor-pointer"
                            color="#262626"
                            onClick={toggleShow}
                        />
                    ) : (
                        <BiHide
                            className="h-6 w-6 self-start my-auto ml-auto mr-3 cursor-pointer"
                            color="#262626"
                            onClick={toggleShow}
                        />
                    )}
                </div>
                <button
                    className="bg-[#304AC1] text-[#EBEFFA] h-11 w-96 rounded-md select-none"
                    type="button"
                    onClick={handleLogin}
                >
                    Sign In
                </button>
            </div>
            <div
                className="w-full flex bg-transparemt text-[#262626] justify-center font-light tracking-normal pb-5 absolute bottom-0 select-none"
                style={{
                    fontFamily: ["Open Sans Condensed Light", "sans-serif"],
                }}
            >
                &#169; Copyright&thinsp;&thinsp;
                <strong
                    className="font-bold  tracking-normal"
                    style={{
                        fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
                    }}
                >
                    &#183; Team Geekhaven
                </strong>
            </div>
        </div>
    );
}
