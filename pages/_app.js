import "../styles/globals.css";
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
        let jwt_token = getAccessToken();
        if (jwt_token) {
            let res = await get("/self");
            if (res.error) {
                removeLS("jwt_token");
                jwt_token = false;
            } else {
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
