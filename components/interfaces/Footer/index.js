import Icon from "./icon";
import google from "../../../assets/logo/google.svg";
import insta from "../../../assets/logo/insta.svg";
import facebook from "../../../assets/logo/facebook.svg";
import twitter from "../../../assets/logo/twitter.svg";
import logo from "../../../assets/logo/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div
        className="w-full flex sm:flex-col flex-row bg-[#262626] text-[#ebeffa] pt-10 pb-6 justify-around "
        style={{ fontFamily: ["Open Sans Condensed", "sans-serif"] }}
      >
        <div className="flex gap-4 sm:justify-center">
          {/* <div className="w-9 h-9">
							<Image src={logo} />
						</div> */}
          <div>
            {/* <h3
								className="text-2xl font-bold tracking-normal text-[#ebeffa]"
								style={{
									fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
								}}
							>
								Lost&Found IIITA
							</h3> */}
            <div className="w-44 relative left-[50%] translate-x-[-50%]">
              <Image src={logo} />
            </div>
            <p
              className="text-lg font-light tracking-normal leading-6 mt-2 sm:w-full"
              style={{
                fontFamily: ["Open Sans Condensed Light", "sans-serif"],
              }}
            >
              World's Greatest Collection of Lost Items
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h5
            className="text-2xl mb-4 font-bold tracking-normal sm:text-center sm:mt-2 sm:mb-4 text-[#ebeffa]"
            style={{
              fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
            }}
          >
            Follow Us On
          </h5>
          <div className="flex justify-between gap-10 sm:gap-16 sm:justify-center">
            <Icon src={google} link="mailto:geekhaven@iiita.ac.in"></Icon>
            <Icon
              src={twitter}
              link="https://twitter.com/geekhaveniiita"
            ></Icon>
            <Icon
              src={facebook}
              link="https://www.facebook.com/geekhaveniiita"
            ></Icon>
            <Icon
              src={insta}
              link="https://www.instagram.com/geekhaven_iiita/"
            ></Icon>
          </div>
        </div>
        <div
          className="w-full  bg-[#262626] text-[#ebeffa] justify-center font-light tracking-normal sm:-pb-2 border-inherit hidden sm:flex sm:mt-7 sm:text-center"
          style={{
            fontFamily: ["Open Sans Condensed Light", "sans-serif"],
          }}
        >
          &#169; Copyright&thinsp;&thinsp;
          <strong
            className="font-bold  tracking-normal"
            style={{
              fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
            }}
            onClick={() => {
              router.push("/team");
            }}
          >
            &#183; Team Geekhaven
          </strong>
        </div>
      </div>
      <div
        className="w-full flex bg-[#262626] text-[#ebeffa] justify-center font-light tracking-normal sm:pb-5 pb-3 border-inherit sm:hidden"
        style={{
          fontFamily: ["Open Sans Condensed Light", "sans-serif"],
        }}
      >
        Lost&Found IIITA &#169; Copyright&thinsp;&thinsp;
        <strong
          className="font-bold  tracking-normal cursor-pointer"
          style={{
            fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
          }}
          onClick={() => {
            router.push("/team");
          }}
        >
          &#183; Team Geekhaven
        </strong>
      </div>
    </>
  );
}
