import Category_Card from "../interfaces/CategoryCard";

export default function Category() {
    return (
			<div className="mt-24">
				<div
					className="text-2xl font-semibold"
					style={{
						marginLeft: "2vh",
					}}
				>
					Categories :
				</div>
				<div
					className="sm:justify-around sm:p-4 sm:text-center"
					style={{ display: "flex", flexWrap: "wrap" }}
				>
					<Category_Card />
					<Category_Card />
					<Category_Card />
					<Category_Card />
					<Category_Card />
					<Category_Card />
					<Category_Card />
				</div>
			</div>
		);
}
