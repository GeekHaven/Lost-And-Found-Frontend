import CategoryCard from "../../interfaces/CategoryCard";
import CategoryCardSelected from "../../interfaces/CategoryCardSelected";

export default function Category({
    categories,
    selectedCategory,
    setSelectedCategory,
}) {
    return (
        <div className="mt-20 px-36 sm:px-16">
            <div className="text-4xl font-semibold text-[#575c75]  mb-12">
                Categories
            </div>
            {categories && (
                <div
                    className=" sm:text-center gap-16 sm:gap-4 justify-center"
                    style={{ display: "flex", flexWrap: "wrap" }}
                >
                    {categories.map((category, i) => {
                        if (category.id === selectedCategory) {
                            return (
                                <CategoryCardSelected
                                    data={category}
                                    key={i}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            );
                        } else {
                            return (
                                <CategoryCard
                                    data={category}
                                    key={i}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
}
