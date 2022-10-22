import ListItem from "../interfaces/ListItem";

export default function List() {
	return (
		<div className="mt-24">
			<div
				className="text-xl font-semibold"
				style={{
					marginLeft: "2vh",
					marginBottom: "2vh",
				}}
			>
				Complete List
			</div>
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />
		</div>
	);
}
