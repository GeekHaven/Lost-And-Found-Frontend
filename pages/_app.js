import "../styles/globals.css";
import "antd/dist/antd.css";

import { getAccessToken } from "../components/utils/API";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import UserContext from "../components/utils/Contexts/userContext";
function MyApp({ Component, pageProps }) {
    const publicPath = ["/", "/signin"];
    const router = useRouter(),
        [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const jwt_token = getAccessToken();
        if (jwt_token) setIsLoggedIn(true);
        if (!jwt_token && !(router.route in publicPath)) {
            router.push("/");
        }
    }, [isLoggedIn]);
    return (
        <NextUIProvider>
            <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </NextUIProvider>
    );
}

export default MyApp;
