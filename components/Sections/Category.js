import Category_Card from "../interfaces/CategoryCard";

export default function Category() {
	return (
		<div className="category">
			<div
				className="head">
				Categories :
			</div>
			<div className="cards">
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
