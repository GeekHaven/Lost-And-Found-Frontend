import CategoryCard from "../../interfaces/CategoryCard";

export default function Category({ categories }) {
    return (
        <div className="mt-20 px-36">
            <div className="text-4xl font-semibold text-[#575c75]  mb-12">
                Categories
            </div>
            {categories && (
                <div
                    className="sm:justify-around sm:p-4 sm:text-center gap-11"
                    style={{ display: "flex", flexWrap: "wrap" }}
                >
                    {categories.map((category, i) => (
                        <CategoryCard data={category} key={i} />
                    ))}
                </div>
            )}
        </div>
    );
}
