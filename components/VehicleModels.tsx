"use client";
import { useFetchVehicle } from "@/hooks/useFetchVehicle";
import React, { useEffect } from "react";

function VehicleModels({ makeId, year }: { makeId: string; year: string }) {
	const { data, fetchVehicle } = useFetchVehicle(Number(makeId), Number(year));

	useEffect(() => {
		fetchVehicle();
	}, [fetchVehicle]);

	return (
		<ul>
			{data.map((vehicle) => (
				<li key={vehicle.Model_ID}>{vehicle.Model_Name}</li>
			))}
		</ul>
	);
}

export default VehicleModels;
