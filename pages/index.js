import Navbar from "../components/interfaces/Navbar";
import Aim from "../components/Sections/Aim";
import End from "../components/Sections/End";
import Hero from "../components/Sections/Hero";
import HIW from "../components/Sections/HIW";
import Testimonials from "../components/Sections/Testimonials";
import Footer from "../components/interfaces/Footer/index";
import SEO from "../components/utils/SEO";
import { useEffect, useContext } from "react";
import UserContext from "../components/utils/Contexts/userContext";
import { useRouter } from "next/router";
export default function Home() {
    let { isLoggedIn } = useContext(UserContext);
    const router = useRouter();

    // push to home if logged in
    useEffect(() => {
        if (isLoggedIn) {
            router.push("/home");
        }
    });
    return (
			<>
				<SEO title="Home / LostNFound" />
				<Navbar />
				<div className="p-24 sm:p-10 pt-0 bg-[#FAFAFA]">
					<Hero />
					<HIW />
					<Aim />
					<Testimonials />
					<End />
				</div>
				<Footer />
			</>
		);
}
