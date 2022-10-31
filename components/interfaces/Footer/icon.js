import Image from "next/image";

export default function Icon({ src }) {
    return (
        <>
            <div
                className="w-7 h-7 text-[#ffffff] hover:opacity-100 cursor-pointer"
                style={{ opacity: 0.7 }}
            >
                <Image src={src} />
            </div>
        </>
    );
}
