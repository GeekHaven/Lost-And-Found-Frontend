import Navbar from "../../components/interfaces/Navbar";
import AppHeader from "../../components/interfaces/AppHeader";
import LostVector from "../../assets/illustrations/homepage1.png";
import FoundVector from "../../assets/illustrations/homepage2.png";
import Footer from "../../components/interfaces/Footer";
import Image from "next/image";
export default function Instructions() {
  return (
		<>
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
						<p className="font-semibold text-4xl">Instructions for Lost:</p>
						<p className="font-normal text-2xl -mt-0.5">Hope is still there!</p>
					</div>
					<ul className="px-4" style={{ listStyleType: "disc" }}>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
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
						<p className="font-semibold text-4xl">Instructions for Found:</p>
						<p className="font-normal text-2xl -mt-0.5">
							You guys are the real hero!
						</p>
					</div>
					<ul className="px-4" style={{ listStyleType: "disc" }}>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
						</li>
						<li className="text-lg font-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
							massa nec, tellus, eget sit. Sodales amet, neque, aenean aliquam
							amet at morbi praesent metus
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
