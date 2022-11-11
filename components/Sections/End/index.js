import { useRouter } from "next/router";
export default function End() {
    const router = useRouter();
    function handleLogin() {
        router.push("/signin");
    }
    return (
        <div className="flex flex-col items-center justify-center mt-32">
            <div
                className="text-5xl font-semibold text-[#091553] text-center leading-tight"
                style={{ letterSpacing: "1px" }}
            >
                Ready to meet up with <br /> your long lost things?
            </div>
            <div className="mt-[3rem]">
                <button
                    className="px-24  py-3.5 bg-[#304ac1] text-[#ffffff] font-semibold text-2xl hover:bg-[#435cd0] rounded-lg mb-12"
                    onClick={handleLogin}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
