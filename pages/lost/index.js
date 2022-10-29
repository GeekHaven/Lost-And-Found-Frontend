import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import FoundHeader from "../../components/interfaces/FoundHeader";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";
import LostHeader from "../../components/interfaces/LostHeader/index";
import SEO from "../../components/utils/SEO";
export default function Lost() {
    return (
        <>
            <SEO title="Lost / LostNFound" />
            <Navbar />
            <div className="">
                <LostHeader />
                <Category />
                <List />
            </div>
            <Footer />
        </>
    );
}
