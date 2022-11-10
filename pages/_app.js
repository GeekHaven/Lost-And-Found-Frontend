import "../styles/globals.css";
import "antd/dist/antd.css";

import { getAccessToken } from "../components/utils/API";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { get } from "../components/utils/API";
import { removeLS } from "../components/utils/LocalStorage";

import UserContext from "../components/utils/Contexts/userContext";

function MyApp({ Component, pageProps }) {
    const publicPath = ["/", "/signin"];
    const [show, setShow] = useState(false);
    const router = useRouter(),
        [isLoggedIn, setIsLoggedIn] = useState(false),
        [user, setUser] = useState(null);

    async function checkUsr() {
        setShow(false);
        let jwt_token = await getAccessToken();
        if (jwt_token) {
            let res = await get("/self");
            if (!res.username) {
                removeLS("jwt_token");
                jwt_token = false;
                console.log("run");
            } else {
                setIsLoggedIn(true);
                setUser({ username: res.username, name: res.name });
            }
        }
        if (!jwt_token && !(router.route in publicPath)) {
            router.push("/");
        }
        setShow(true);
    }

    useEffect(() => {
        checkUsr();
    }, [isLoggedIn]);
    return (
        <NextUIProvider>
            <UserContext.Provider
                value={{ isLoggedIn, setIsLoggedIn, user, setUser }}
            >
                {show && <Component {...pageProps} />}
            </UserContext.Provider>
        </NextUIProvider>
    );
}

export default MyApp;
