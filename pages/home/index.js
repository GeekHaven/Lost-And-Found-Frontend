import Navbar from "../../components/interfaces/Navbar";
import Aim from "../../components/Sections/Aim";
import End from "../../components/Sections/End";
import Hero from "../../components/Sections/Hero";
import HIW from "../../components/Sections/HIW";
import Testimonials from "../../components/Sections/Testimonials";
import Footer from "./../../components/interfaces/Footer/index";
import SEO from "../../components/utils/SEO";
export default function Home() {
    return (
        <>
            <SEO title="Home / LostNFound" />
            <Navbar />
            <div className="p-24">
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
