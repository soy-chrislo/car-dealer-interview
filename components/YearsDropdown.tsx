import React from "react";
import Dropdown from "./Dropdown";

interface Props {
	startYear: number;
	endYear?: number;
}

export function YearsDropdown({
	startYear,
	endYear = new Date().getFullYear(),
}: Props) {
	const [years] = React.useState(
		Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i),
	);
	return (
		<Dropdown
			options={years.map((year) => ({
				label: year.toString(),
				value: year.toString(),
			}))}
		/>
	);
}
