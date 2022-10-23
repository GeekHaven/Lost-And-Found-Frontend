import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import FoundHeader from "../../components/interfaces/FoundHeader";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";

export default function Found() {
    return (
        <>
            <Navbar />
            <div className="p-16">
                <FoundHeader />
                <Category />
                <List />
            </div>
            <Footer />
        </>
    );
}
