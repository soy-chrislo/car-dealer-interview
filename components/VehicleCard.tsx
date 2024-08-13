import type { Vehicle } from "@/hooks/types";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function VehicleCard(vehicle: Vehicle) {
	return (
		<Card className="w-64">
			<CardHeader>
				<CardTitle>{vehicle.MakeName}</CardTitle>
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
