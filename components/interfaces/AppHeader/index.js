export default function AppHeader() {
    return (
        <>
            <div className="flex flex-col items-center justify-center  bg-[#df5d4b] gap-y-20 relative">
                <h1 className="text-6xl font-medium text-center mt-20 text-[#ffffff]"
                style={{letterSpacing: "2px"}}
                >
                    What have you Lost/Found <br /> today?
                </h1>
                <div className="flex flex-row" style={{ gap: "10px" }}>
                    <button
                        className="bg-[#385a64] py-4 text-[#ffffff] rounded-lg text-xl font-normal"
                        style={{ display:"block" ,position:"absolute",left:"30%",transform:"translateY(-50%) translateX(-30%)", width:"25vw" }}
                    >
                        Lost Item
                    </button>
                    <button
                        className="bg-[#385a64] py-4 text-[#ffffff] rounded-lg text-xl font-normal"
                        style={{ display:"block" ,position:"absolute",left:"35%",transform:"translateY(-50%) translateX(70%)", width:"25vw"  }}
                    >
                        Found Item
                    </button>
                </div>
            </div>
        </>
    );
}
