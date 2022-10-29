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
            {/* <div className="flex flex-col bg-[#9e9e9e] items-center justify-center pt-20 pl-36 pr-36 gap-y-14">
					<h1 className="text-7xl font-normal text-center">
						What have you Lost/Found <br /> today ?
					</h1>
					<div className="flex flex-row gap-x-14 items-center justify-center">
						<button className="bg-[#d3d3d3] rounded-lg outline-0 text-center font-normal text-xl ">
							Lost Item
						</button>
						<button className="bg-[#d3d3d3] rounded-lg outline-0 text-center">
							Found Item
						</button>
					</div>
				</div> */}
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
