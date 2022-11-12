import { Select } from "antd";
import React from "react";
// const options = [];
// for (let i = 10; i < 36; i++) {
//     options.push({
//         value: i.toString(36) + i,
//         label: i.toString(36) + i,
//     });
// }
const Dropdown = ({ options, setValue, fieldNames }) => {
    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <Select
            // mode="tags"
            style={{
                width: "100%",
                backgroundColor: "#EBEFFA !important",
            }}
            placeholder="Category"
            onChange={handleChange}
            fieldNames={fieldNames}
            options={options}
            showArrow={false}
        />
    );
};
export default Dropdown;
