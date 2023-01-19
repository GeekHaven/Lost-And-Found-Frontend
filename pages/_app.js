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
    const router = useRouter();
    const [show, setShow] = useState(false),
        [isLoggedIn, setIsLoggedIn] = useState(false),
        [user, setUser] = useState(null);

    // check if user is logged in
    async function checkUsr() {
        let jwt_token = getAccessToken();
        if (jwt_token) {
            setIsLoggedIn(true);
        }
        if (publicPath.includes(router.asPath)) {
            setShow(true);
            return;
        }
        setShow(false);
        if (!jwt_token) {
            router.push("/");
        }
        setShow(true);
    }

    useEffect(() => {
        if (!router.isReady) return; //if router is not availble till then return
        checkUsr();
    }, [isLoggedIn, router]);

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
