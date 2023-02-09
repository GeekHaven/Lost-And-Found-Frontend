import { useRouter } from "next/router";
import { getLS } from "../../utils/LocalStorage";

export default function End() {
    const router = useRouter();
    function handleLogin() {
        if (getLS("jwt_token")) {
            router.push("/home");
        } else {
            router.push("/signin");
        }
    }
    return (
      <div className="flex flex-col items-center justify-center ">
        <div
          className="text-5xl font-semibold text-[#091553] text-center leading-tight mt-32 sm:text-4xl"
          style={{ letterSpacing: "1px" }}
        >
          Ready to meet up with <br /> your long lost things?
        </div>
        <div className="mt-[3rem]">
          <button
            className="sm:scale-[80%] px-20  py-3.5 bg-[#304ac1] text-[#ffffff] font-medium text-xl hover:bg-[#435cd0] rounded-lg mb-12"
            onClick={handleLogin}
          >
            Get Started
          </button>
        </div>
      </div>
    );
}
