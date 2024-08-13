"use client";
import Dropdown from "@/components/Dropdown";
import { VehicleCard } from "@/components/VehicleCard";
import { YearsDropdown } from "@/components/YearsDropdown";
import { useFetchVehicle } from "@/hooks/useFetchVehicles";
import { useEffect, useState } from "react";

export default function Home() {
	const { fetchVehicles, data } = useFetchVehicle();
	const [vehicleTypes, setVehicleTypes] = useState<
		{ vehicleTypeId: number; vehicleTypeName: string }[]
	>([]);

	useEffect(() => {
		fetchVehicles();
	}, [fetchVehicles]);

	useEffect(() => {
		if (data.length) {
			const uniqueVehicleTypes = new Set();
			const types = data
				.filter((vehicle) => {
					if (uniqueVehicleTypes.has(vehicle.VehicleTypeId)) {
						return false;
					}
					uniqueVehicleTypes.add(vehicle.VehicleTypeId);
					return true;
				})
				.map((vehicle) => ({
					vehicleTypeId: vehicle.VehicleTypeId,
					vehicleTypeName: vehicle.VehicleTypeName,
				}));
			setVehicleTypes(types);

			types.unshift({
				vehicleTypeId: 0,
				vehicleTypeName: "All",
			});
		}
	}, [data]);

	return (
		<main>
			<Dropdown
				options={(() => {
					return vehicleTypes.map((type) => ({
						label: type.vehicleTypeName,
						value: type.vehicleTypeId.toString(),
					}));
				})()}
			/>
			<YearsDropdown startYear={2022} />
			{data.map((vehicle) => (
				<VehicleCard key={vehicle.MakeId} {...vehicle} />
			))}
		</main>
	);
}
