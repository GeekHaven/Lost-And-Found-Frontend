import { useRef, useContext } from "react";
import { useRouter } from "next/router";
import SEO from "../../components/utils/SEO";
import { post } from "../../components/utils/API";
import { storeLS } from "../../components/utils/LocalStorage";
import UserContext from "../../components/utils/Contexts/userContext";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { ImSpinner } from "react-icons/im";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { notification } from "antd";

import styles from "./Signin.module.css";

export default function SignIn() {
    const router = useRouter();
    const username = useRef(null);
    const password = useRef(null);
    const usernameDiv = useRef(null);
    const passwordDiv = useRef(null);
    const { setIsLoggedIn } = useContext(UserContext);

    const [hide, setHide] = useState(true);
    const [loading, setLoading] = useState(false);

    let wrongAnimate = [
        { transform: "translateX(20px)" },
        { transform: "translateX(-40px)" },
        { transform: "translateX(20px)" },
    ];

    async function handleLogin(event) {
        event.preventDefault();
        setLoading(true);
        let res = await post("/auth", {
            username: username.current.value,
            password: password.current.value,
        });
        console.log(res);
        if (res.data) {
            storeLS("jwt_token", res.data.secret);
            setIsLoggedIn(true);
            setLoading(false);
            router.push("/home");
        } else {
            notification.error({
                message: "Wrong Credentials",
                description:
                    "You have provided wrong username or password. Please try again.",
            });
            setLoading(false);

            username.current.value = "";
            password.current.value = "";
            usernameDiv.current.animate(wrongAnimate, { duration: 150 });
            passwordDiv.current.animate(wrongAnimate, { duration: 150 });
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
            <form
                className="flex flex-col w-screen justify-center items-center self-center my-auto"
                onSubmit={handleLogin}
            >
                <h1 className="font-semibold text-5xl mb-10 text-[#304AC1]">
                    Sign In
                </h1>
                <div
                    className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-5 flex align-middle bg-[#EBEFFA]"
                    ref={usernameDiv}
                >
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
                <div
                    className="text-sm box-border h-11 w-96 border-2 border-solid border-slate-400 rounded-md mb-14 flex align-middle bg-[#EBEFFA]"
                    ref={passwordDiv}
                >
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
                        <BiHide
                            className="h-6 w-6 self-start my-auto ml-auto mr-3 cursor-pointer"
                            color="#262626"
                            onClick={toggleShow}
                        />
                    ) : (
                        <BiShow
                            className="h-6 w-6 self-start my-auto ml-auto mr-3 cursor-pointer"
                            color="#262626"
                            onClick={toggleShow}
                        />
                    )}
                </div>
                <button
                    className="bg-[#304AC1] text-[#EBEFFA] h-11 w-96 rounded-md select-none disabled:cursor-not-allowed disabled:opacity-90"
                    type="submit"
                    disabled={loading}
                >
                    <span className="py-2.5 text-center inline-flex items-center">
                        {loading && (
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline mr-3 w-4 h-4 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="#E5E7EB"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                        Sign In
                    </span>
                </button>
            </form>
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
