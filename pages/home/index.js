import Navbar from "../../components/interfaces/Navbar";
import AppHeader from "../../components/interfaces/AppHeader";
import LostVector from "../../assets/illustrations/homepage1.png";
import FoundVector from "../../assets/illustrations/homepage2.png";
import Footer from "../../components/interfaces/Footer";
import Image from "next/image";
import SEO from "../../components/utils/SEO";
export default function Instructions() {
    return (
        <>
            <SEO title="Home / Lost&Found" />
            <Navbar />
            <AppHeader />
            <div className="flex flex-row mx-36 my-20 sm:flex-col sm:m-12 sm:mt-24 gap-x-32 lg:gap-x-8 text-[#575C75] bg-[#FAFAFA]">
                <div className="flex flex-col gap-y-10 max-w-[45vw] sm:max-w-[90vw]">
                    <div className="flex flex-col gap-y-3 sm:text-center">
                        <p className="font-semibold text-2xl font-['Poppins'] ">
                            Instructions for Lost:
                        </p>
                        <p className="font-normal text-xl -mt-0.5">
                            Hope is still there.
                        </p>
                    </div>
                    <div className="hidden  sm:max-w-32 sm:flex sm:justify-center">
                        <Image src={LostVector} alt="" />
                    </div>
                    <ul
                        className="px-4 text-[#575C75]"
                        style={{ listStyleType: "disc" }}
                    >
                        <li className="text-lg font-normal">
                            Login to the Lost&Found App and click on Found Item.
                        </li>
                        <li className="text-lg font-normal">
                            Use the search bar to search the Found Items list
                            for the item that you have lost. If it has been
                            found, you can contact the finder and get back your
                            item!
                        </li>
                        <li className="text-lg font-normal">
                            If not, go back to the home page and click on Lost
                            Item.
                        </li>
                        <li className="text-lg font-normal">
                            Add a detailed description of the item that you have
                            lost - for example, the color, shape, size and
                            manufacturer. The more details you can provide, the
                            better!
                        </li>
                        <li className="text-lg font-normal">
                            Add active contact details so that the person who
                            has found your item can contact you!
                        </li>
                    </ul>
                </div>
                <div className="flex items-center flex-wrap lg:scale-110 md:scale-[175%] md:ml-5 sm:hidden">
                    <Image src={LostVector} />
                </div>
            </div>
            <div className="flex flex-row m-28 sm:flex-col sm:m-12 sm:mt-24 gap-x-32">
                <div className="flex flex-col gap-y-10 max-w-[45vw] sm:max-w-[90vw]">
                    <div className="flex flex-col gap-y-3 sm:text-center">
                        <p className="font-semibold text-4xl">
                            Found something?
                        </p>
                        <p className="font-normal text-2xl -mt-0.5">
                            You guys are the real heroes!
                        </p>
                    </div>
                    <div className="hidden sm:flex">
                        <Image src={FoundVector} alt="" />
                    </div>
                    <ul
                        className="px-4 text-[#575C75]"
                        style={{ listStyleType: "disc" }}
                    >
                        <li className="text-lg font-normal">
                            Login to the Lost&Found App and click on Lost Item.
                        </li>
                        <li className="text-lg font-normal">
                            Use the search bar to search the Lost Items list for
                            the item that you have found. If someone has already
                            posted a lost ad for it, you can contact the owner
                            and give back the item!
                        </li>
                        <li className="text-lg font-normal">
                            If not, go back to the home page and click on Found
                            Item.
                        </li>
                        <li className="text-lg font-normal">
                            Add a detailed description of the item you have
                            found along with the time and place where you have
                            found it.
                        </li>
                        <li className="text-lg font-normal">
                            Add active contact details so that the person who
                            has lost the item can contact you!
                        </li>
                        <li className="text-lg font-normal">
                            Keep a note of the distinct details of the item that
                            only the owner should know and can be used to
                            identify it. For example, someone’s initials written
                            on it or the password that unlocks a device.
                        </li>
                    </ul>
                </div>
                <div className="flex items-center flex-wrap sm:hidden">
                    <Image src={FoundVector} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}
