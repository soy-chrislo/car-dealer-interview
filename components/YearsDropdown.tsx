import React from "react";
import Dropdown from "./Dropdown";

interface Props {
	startYear: number;
	endYear?: number;
	className?: string;
	onChange?: (value: string) => void;
}

export function YearsDropdown({
	startYear,
	endYear = new Date().getFullYear(),
	className,
	onChange,
}: Props) {
	const [years] = React.useState(
		Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i),
	);
	return (
		<Dropdown
			onChange={onChange}
			className={className}
			options={years.map((year) => ({
				label: year.toString(),
				value: year.toString(),
			}))}
		/>
	);
}
