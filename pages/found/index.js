import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import FoundHeader from "../../components/interfaces/FoundHeader";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";
import SEO from "../../components/utils/SEO";
export default function Found() {
    return (
        <>
            <SEO title="Found / LostNFound" />
            <Navbar />
            <div>
                <FoundHeader />
                <Category />
                <List />
            </div>
            <Footer />
        </>
    );
}
