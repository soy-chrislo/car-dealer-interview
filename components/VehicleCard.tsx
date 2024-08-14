import type { Vehicle } from "@/hooks/types";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { useVehicle } from "@/provider/VehicleContext";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
	const { vehicleId, setVehicleId } = useVehicle();
	return (
		<Card
			className="w-64 cursor-pointer"
			onClick={() => setVehicleId(vehicle.MakeId)}
			style={{
				border: vehicle.MakeId === vehicleId ? "1px solid gray" : undefined,
			}}
		>
			<CardHeader>
				<CardTitle className="truncate whitespace-nowrap overflow-hidden">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>{vehicle.MakeName}</TooltipTrigger>
							<TooltipContent className="overflow-hidden">
								{vehicle.MakeName}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<ul>
					<li>Id: {vehicle.MakeId}</li>
					<li>Vehicle Type Id: {vehicle.VehicleTypeId}</li>
					<li>Vehicle Type: {vehicle.VehicleTypeName}</li>
				</ul>
			</CardContent>
		</Card>
	);
}
