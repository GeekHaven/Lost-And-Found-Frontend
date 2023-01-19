import Image from "next/image";

export default function Icon({ src, link }) {
    return (
			<>
				<a
					href={link}
					className="text-[#ebeffa] hover:opacity-100 cursor-pointer hidden sm:inline-block"
					style={{ opacity: 0.7 }}
				>
					<Image height={'40px'} width={'40px'} src={src} />
				</a>
				<a
					href={link}
					className=" h-7 w-7 text-[#ebeffa] hover:opacity-100 cursor-pointer sm:hidden"
					style={{ opacity: 0.7 }}
				>
					<Image src={src} />
				</a>
			</>
		);
}
