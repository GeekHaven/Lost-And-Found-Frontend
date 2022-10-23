import Icon from "./icon";
import google from '../../../assets/logo/google.svg';
import insta from '../../../assets/logo/insta.svg';
import facebook from '../../../assets/logo/facebook.svg';
import twitter from '../../../assets/logo/twitter.svg';
import logo from "../../../assets/logo/logo.svg";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<div
				className="w-full flex sm:flex-col flex-row bg-[#000000] text-[#ffffff] pt-10 pb-6 justify-around "
				style={{ fontFamily: ["Open Sans Condensed", "sans-serif"] }}
			>
				<div className="flex gap-4 sm:justify-center">
					<div className="w-9 h-9">
						<Image src={logo} />
					</div>
					<div>
						<h3
							className="text-2xl font-bold tracking-normal"
							style={{
								fontFamily: ["Open Sans Condensed Bold", "sans-serif"],
							}}
						>
							Lost&Found IIITA
						</h3>
						<p
							className="text-lg font-light tracking-normal leading-6 mt-2"
							style={{
								fontFamily: ["Open Sans Condensed Light", "sans-serif"],
								width: "10em",
							}}
						>
							World's Greatest Collection of Lost Items
						</p>
					</div>
				</div>
				<div className="flex flex-col">
					<h5
						className="text-xl mb-1.5 font-bold tracking-normal sm:text-center sm:mt-8 sm:mb-4"
						style={{ fontFamily: ["Open Sans Condensed Bold", "sans-serif"] }}
					>
						Follow Us On
					</h5>
					<div className="flex justify-between gap-10 sm:justify-center">
						<Icon src={google}></Icon>
						<Icon src={twitter}></Icon>
						<Icon src={facebook}></Icon>
						<Icon src={insta}></Icon>
					</div>
				</div>
				<div
					className="w-full flex bg-[#000000] text-[#ffffff] justify-center font-light tracking-normal sm:-pb-2 border-inherit hidden sm:block sm:mt-7 sm:text-center"
					style={{ fontFamily: ["Open Sans Condensed Light", "sans-serif"] }}
				>	
					&#169; Copyright&thinsp;&thinsp;
					<strong
						className="font-bold  tracking-normal"
						style={{ fontFamily: ["Open Sans Condensed Bold", "sans-serif"] }}
					>
						&#183; Team Geekhaven
					</strong>
				</div>
			</div>
			<div
				className="w-full flex bg-[#000000] text-[#ffffff] justify-center font-light tracking-normal sm:pb-5 border-inherit sm:hidden"
				style={{ fontFamily: ["Open Sans Condensed Light", "sans-serif"] }}
			>
				&#169; Copyright&thinsp;&thinsp;
				<strong
					className="font-bold  tracking-normal"
					style={{ fontFamily: ["Open Sans Condensed Bold", "sans-serif"] }}
				>
					&#183; Team Geekhaven
				</strong>
			</div>
		</>
	);
}
