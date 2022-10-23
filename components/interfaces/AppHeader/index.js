export default function AppHeader() {
    return (
        <>
            <div className="flex flex-col items-center justify-center  bg-[#df5d4b] gap-y-14 relative">
                <h1 className="font-semibold text-6xl text-center mt-20 text-[#ffffff]">
                    What have you Lost/Found <br /> today?
                </h1>
                <div className="flex flex-row" style={{ gap: "10px" }}>
                    <button
                        className="bg-[#385a64] py-4 text-[#ffffff] rounded-lg text-xl font-normal"
                        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
                    >
                        Lost Item
                    </button>
                    <button
                        className="bg-[#385a64] py-4 text-[#ffffff] rounded-lg text-xl font-normal"
                        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
                    >
                        Found Item
                    </button>
                </div>
            </div>
        </>
    );
}
