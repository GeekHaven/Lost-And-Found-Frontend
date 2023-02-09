import Link from "next/link";
export default function AppHeader() {
    return (
        <>
            <div
                className="flex flex-col gap-y-16 sm:gap-y-12 pt-16 pb-24 items-center justify-center bg-[#FFFFFF]"
                style={{ boxShadow: "0 8px 12px -5px rgba(0, 0, 0, 0.15)" }}
            >
                <h1 className="font-[500] -mb-2 text-5xl font-['Open Sans'] md:text-5xl sm:px-32 sm:text-center sm:leading-tight text-[#091553] text-center leading-12 ">
                    What have you Lost/Found <br /> today&nbsp;?
                </h1>
                <div className="flex flex-row gap-14 sm:gap-8 flex-wrap sm:justify-center px-10">
                    <Link href="/lost">
                        <a>
                            <button
                                className="py-3.5 w-72 sm:w-72 rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg hover:bg-[#435cd0] "
                                style={{
                                    boxShadow: "0px 8px 20px -10px #10237b",
                                }}
                            >
                                Lost Item
                            </button>
                        </a>
                    </Link>
                    <Link href="/found">
                        <a>
                            <button
                                className="py-3.5 w-72 sm:w-72  rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg hover:bg-[#435cd0] "
                                style={{
                                    boxShadow: "0px 8px 20px -10px #10237b",
                                }}
                            >
                                Found Item
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}
