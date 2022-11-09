import { Select } from "antd";
import React from "react";
const options = [];
for (let i = 10; i < 36; i++) {
	options.push({
		value: i.toString(36) + i,
		label: i.toString(36) + i,
	});
}
const handleChange = (value) => {
	console.log(`selected ${value}`);
};
const Dropdown = () => (
	<Select
		mode="tags"
		style={{
			width: "100%",
			backgroundColor: "#EBEFFA !important",
		}}
		dropdownStyle={{
			backgroundColor: "#EBEFFA",
		}}
		placeholder="Categories"
		onChange={handleChange}
		options={options}
	/>
);
export default Dropdown;
