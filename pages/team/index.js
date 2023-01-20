import TeamCard from "../../components/interfaces/TeamCard";
import SEO from "../../components/utils/SEO";
import Navbar2 from "../../components/interfaces/Navbar2";
import Footer from "../../components/interfaces/Footer";
import anurag from "../../assets/team/anurag.png";
import nitya from "../../assets/team/nitya.png";
export default function Team() {
  return (
    <>
      <SEO title="Team / Lost&Found" />
      <Navbar2 />
      <div className="flex flex-col w-screen justify-center items-center my-8 gap-2">
        <p className="font-semibold text-3xl font-['Poppins'] ">Creators</p>
        <div className="flex flex-row flex-wrap gap-2 items-center justify-evenly">
          <TeamCard
            img={anurag.src}
            name={"BuddyLongLegs"}
            role={"Full Stack Developer"}
            link="https://buddylonglegs.live/"
          />
          <TeamCard img={nitya.src} name={"Nitya Gupta"} role={"Designer"} />
        </div>
      </div>
      <Footer />
    </>
  );
}
