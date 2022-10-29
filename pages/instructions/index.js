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
      <SEO title="Instructions/LostNFound" />
      <Navbar />
      <AppHeader />
      <div className="flex flex-row m-28 gap-x-32">
        <div
          className="flex flex-col gap-y-10"
          style={{
            maxWidth: "45vw",
          }}
        >
          {/* <div className="md:flex flex-col gap-y-3">
						<p className="font-semibold text-4xl">Instructions for Lost:</p>
						<p className="font-normal text-2xl mt-2.5">Hope is still there!</p>
					</div> */}
          <div className="flex flex-col gap-y-3">
            <p className="font-semibold text-4xl">Lost something?</p>
            <p className="font-normal text-2xl -mt-0.5">
              Don’t panic! Hope is still there.
            </p>
          </div>
          <ul className="px-4" style={{ listStyleType: "disc" }}>
            <li className="text-lg font-normal">
              Login to the Lost&Found App and click on Found Item.
            </li>
            <li className="text-lg font-normal">
              Use the search bar to search the Found Items list for the item
              that you have lost. If it has been found, you can contact the
              finder and get back your item!
            </li>
            <li className="text-lg font-normal">
              If not, go back to the home page and click on Lost Item.
            </li>
            <li className="text-lg font-normal">
              Add a detailed description of the item that you have lost - for
              example, the color, shape, size and manufacturer. The more details
              you can provide, the better!
            </li>
            <li className="text-lg font-normal">
              Add active contact details so that the person who has found your
              item can contact you!
            </li>
          </ul>
        </div>
        <Image src={LostVector} />
      </div>
      <div className="flex flex-row m-28 gap-x-32">
        <div
          className="flex flex-col gap-y-10 "
          style={{
            maxWidth: "45vw",
          }}
        >
          <div className="flex flex-col gap-y-3">
            <p className="font-semibold text-4xl">Found something?</p>
            <p className="font-normal text-2xl -mt-0.5">
              You guys are the real heroes!
            </p>
          </div>
          <ul className="px-4" style={{ listStyleType: "disc" }}>
            <li className="text-lg font-normal">
              Login to the Lost&Found App and click on Lost Item.
            </li>
            <li className="text-lg font-normal">
              Use the search bar to search the Lost Items list for the item that
              you have found. If someone has already posted a lost ad for it,
              you can contact the owner and give back the item!
            </li>
            <li className="text-lg font-normal">
              If not, go back to the home page and click on Found Item.
            </li>
            <li className="text-lg font-normal">
              Add a detailed description of the item you have found along with
              the time and place where you have found it.
            </li>
            <li className="text-lg font-normal">
              Add active contact details so that the person who has lost the
              item can contact you!
            </li>
            <li className="text-lg font-normal">
              Keep a note of the distinct details of the item that only the
              owner should know and can be used to identify it. For example,
              someone’s initials written on it or the password that unlocks a
              device.
            </li>
          </ul>
        </div>
        <div className="flex items-center flex-wrap">
          <Image src={FoundVector} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
