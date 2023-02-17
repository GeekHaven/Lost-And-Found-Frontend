import SEO from "../components/utils/SEO";
import Navbar from "../components/interfaces/Navbar";
import Footer from "../components/interfaces/Footer";
import Image from "next/image";
import NoInternet from "../assets/illustrations/nointernet.png";

export default function OfflinePage() {
    return (
        <>
            <SEO title="Offline / Lost&Found" />
            <Navbar />
            <div className="h-screen w-screen flex items-center justify-center p-4">
                <div className="max-w-full max-h-full">
                    <Image src={NoInternet} alt="No Internet" />
                </div>
            </div>
            <Footer />
        </>
    );
}
