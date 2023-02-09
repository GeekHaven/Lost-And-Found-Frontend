import TeamCard from "../../components/interfaces/TeamCard";
import SEO from "../../components/utils/SEO";
import Navbar2 from "../../components/interfaces/Navbar2";
import Footer from "../../components/interfaces/Footer";
import anurag from "../../assets/team/anurag.png";
import manas from "../../assets/team/manas.png";
import gadekar from "../../assets/team/gadekar.png";
import yash from "../../assets/team/yash.png";
import sibashish from "../../assets/team/sibashish.png";
import aman from "../../assets/team/aman.png";
import saishree from "../../assets/team/saishree.png";
import nitya from "../../assets/team/nitya.png";

export default function Team() {
    return (
        <>
            <SEO title="Team / Lost&Found" />
            <Navbar2 />
            <div className="flex flex-col w-screen justify-center items-center my-8 gap-2">
                <p className="font-semibold text-3xl font-['Poppins'] ">
                    Creators
                </p>
                <div className="flex flex-row flex-wrap gap-2 items-center justify-evenly">
                    <TeamCard
                        img={anurag.src}
                        name={"BuddyLongLegs"}
                        role={"Full Stack Developer"}
                        link="https://buddylonglegs.live/"
                        styles="right-[50px]"
                    />
                    <TeamCard
                        img={manas.src}
                        name={"Manas Gupta"}
                        role={"Front End Developer"}
                    />
                    <TeamCard
                        img={gadekar.src}
                        name={"Atharva Gadekar"}
                        role={"Front End Developer"}
                    />
                    <TeamCard
                        img={yash.src}
                        name={"Yash Gupta"}
                        role={"Front End Developer"}
                    />
                    <TeamCard
                        img={sibashish.src}
                        name={"Sibasish Behera"}
                        role={"Backend Developer"}
                    />
                    <TeamCard
                        img={aman.src}
                        name={"Aman Karnawat"}
                        role={"Designer"}
                    />
                    <TeamCard
                        img={saishree.src}
                        name={"Saishree Kouda"}
                        role={"Designer"}
                    />
                    <TeamCard
                        img={nitya.src}
                        name={"Nitya Gupta"}
                        role={"Designer"}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
