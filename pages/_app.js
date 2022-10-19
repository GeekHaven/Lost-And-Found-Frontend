import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
