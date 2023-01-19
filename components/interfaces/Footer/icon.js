import Image from "next/image";

export default function Icon({ src, link }) {
    return (
			<>
				<a
					href={link}
					className="w-7 h-7 text-[#ebeffa] hover:opacity-100 cursor-pointer"
					style={{ opacity: 0.7 }}
				>
					<Image src={src} />
				</a>
			</>
		);
}
