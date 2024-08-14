/**
 * Get an array of years between two years
 * @param startYear - The start year
 * @param endYear - The end year (defaults to the current year)
 * @returns An array of years
 */
export function getYearsBetween(
	startYear: number,
	endYear: number = new Date().getFullYear(),
) {
	return Array.from(
		{ length: endYear - startYear + 1 },
		(_, i) => startYear + i,
	);
}
