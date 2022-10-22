import ListItem from "../ListItem"
export default function List() {
	return (
		<div>
            <div
				className="list-head">
				Complete List :
			</div>
            <div>
				<ListItem />
				<ListItem />
				<ListItem />
			</div>
        </div>
	);
}
