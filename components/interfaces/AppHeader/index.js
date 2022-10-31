export default function AppHeader() {
    return (
        <>
            <div
                className="flex flex-col gap-y-16 sm:gap-y-12 pt-16 pb-32 items-center justify-center"
                style={{ boxShadow: "0 30px 40px -5px rgba(0, 0, 0, 0.15)" }}
            >
                <h1 className="font-medium text-6xl md:text-5xl sm:px-32 sm:text-center sm:leading-tight text-[#575C75] text-center leading-12 ">
                    What have you Lost/Found <br /> today&nbsp;?
                </h1>
                <div className="flex flex-row gap-14 sm:gap-8 flex-wrap sm:justify-center px-10">
                    <button
                        className="py-3.5 px-24   rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg hover:bg-[#435cd0] "
                        style={{ boxShadow: "0px 8px 20px -10px #10237b" }}
                    >
                        Lost Item
                    </button>
                    <button
                        className="py-3.5 px-24   rounded-lg   bg-[#304AC1] text-[#ffffff] font-semibold text-2xl  sm:text-lg hover:bg-[#435cd0] "
                        style={{ boxShadow: "0px 8px 20px -10px #10237b" }}
                    >
                        Found Item
                    </button>
                </div>
            </div>
        </>
    );
}
