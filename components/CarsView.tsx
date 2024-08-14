import { useFetchVehicles } from "@/hooks/useFetchVehicles";
import React, { useEffect, useState } from "react";
import { VehicleCard } from "./VehicleCard";

export function CarsView({ className }: { className?: string }) {
	const { fetchVehicles, data } = useFetchVehicles();

	useEffect(() => {
		fetchVehicles();
	}, [fetchVehicles]);
	return (
		<div className={`${className} pt-5`}>
			<div className="flex flex-wrap justify-center items-center gap-5">
				{data.map((vehicle) => (
					<VehicleCard key={vehicle.MakeId} vehicle={vehicle} />
				))}
			</div>
		</div>
	);
}
