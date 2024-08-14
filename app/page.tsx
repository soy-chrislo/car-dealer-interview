"use client";
import { CarsView } from "@/components/CarsView";
import { Button } from "@/components/ui/button";
import { YearsDropdown } from "@/components/YearsDropdown";
import { useFetchVehicles } from "@/hooks/useFetchVehicles";
import { useVehicle } from "@/provider/VehicleContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const { vehicleId } = useVehicle();
	const [selectedYear, setSelectedYear] = useState<number | null>(null);

	const { fetchVehicles, data } = useFetchVehicles();
	const [vehicleTypes, setVehicleTypes] = useState<
		{ vehicleTypeId: number; vehicleTypeName: string }[]
	>([]);

	useEffect(() => {
		fetchVehicles();
	}, [fetchVehicles]);

	useEffect(() => {
		console.log("VehicleId: ", vehicleId);
		console.log("Selected year: ", selectedYear);
	}, [vehicleId, selectedYear]);

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
		<main className="flex flex-col items-center  min-h-screen">
			<section className="w-4/5 flex mt-5 mb-5 justify-start">
				{/* <Dropdown
					className="mr-5"
					options={(() => {
						return vehicleTypes.map((type) => ({
							label: type.vehicleTypeName,
							value: type.vehicleTypeId.toString(),
						}));
					})()}
				/> */}
				<YearsDropdown
					onChange={(value) => setSelectedYear(Number.parseInt(value))}
					startYear={2015}
				/>
			</section>
			<CarsView className="w-4/5 h-[700px] overflow-auto border border-gray-300 rounded-md mb-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" />
			<section>
				{vehicleId && selectedYear ? (
					<Link href={`/result/${vehicleId}/${selectedYear}`}>
						<Button>Search model</Button>
					</Link>
				) : (
					<Button disabled>Search model</Button>
				)}
			</section>
		</main>
	);
}
