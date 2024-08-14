"use client";
import { useFetchVehicle } from "@/hooks/useFetchVehicle";
import { useEffect } from "react";

export default function Result({
	params,
}: { params: { makeId: string; year: string } }) {
	const { makeId, year } = params;
	const { data, fetchVehicle } = useFetchVehicle(Number(makeId), Number(year));

	useEffect(() => {
		fetchVehicle();
	}, [fetchVehicle]);

	return (
		<div>
			<h1>Result</h1>
			<p>Make ID: {params.makeId}</p>
			<p>Year: {params.year}</p>
			<ul>
				{data.map((vehicle) => (
					<li key={vehicle.Model_ID}>{vehicle.Model_Name}</li>
				))}
			</ul>
		</div>
	);
}
