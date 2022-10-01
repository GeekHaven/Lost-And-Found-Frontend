import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showLayout = router.pathname === "/login" ? false : true;
  return (
    <NextUIProvider>
      {showLayout && <Layout children={<Component {...pageProps} />} />}
      {!showLayout && <Component {...pageProps} />}
    </NextUIProvider>
  );
}

export default MyApp;
