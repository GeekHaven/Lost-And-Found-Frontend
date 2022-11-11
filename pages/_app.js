import "../styles/globals.css";
import "antd/dist/antd.css";

import { getAccessToken } from "../components/utils/API";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/Sections/Loader";

import UserContext from "../components/utils/Contexts/userContext";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const publicPath = ["/", "/signin"];
    const [show, setShow] = useState(false);
    const router = useRouter(),
        [isLoggedIn, setIsLoggedIn] = useState(false),
        [user, setUser] = useState(null);

    async function checkUsr() {
        if (publicPath.includes(router.asPath)) {
            setShow(true);
            return;
        }
        setShow(false);
        let jwt_token = await getAccessToken();
        if (jwt_token) {
            setIsLoggedIn(true);
        }
        if (!jwt_token) {
            router.push("/");
        }
        setShow(true);
    }

    useEffect(() => {
        if (!router.isReady) return;
        checkUsr();
    }, [isLoggedIn, router.isReady]);
    return (
        <NextUIProvider>
            <UserContext.Provider
                value={{ isLoggedIn, setIsLoggedIn, user, setUser }}
            >
                {show ? <Component {...pageProps} /> : <Loader />}
            </UserContext.Provider>
        </NextUIProvider>
    );
}

export default MyApp;
