import "../styles/globals.css";
import "../styles/Category_Card.css";
import "../styles/Category.css";

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
