import type { Response, Vehicle } from "@/hooks/types";
import { wrapPromise } from "@/lib/promise";
import { VehicleCard } from "./VehicleCard";

const fetchVehicles = async () => {
	// ! Old alternative
	// const URL =
	// 	"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

	if (!process.env.NEXT_PUBLIC_API_URL_VEHICLES)
		throw new Error("API URL not found");
	const URL = process.env.NEXT_PUBLIC_API_URL_VEHICLES as string;

	return fetch(URL).then((response) =>
		response.json().then((data) => data as Response<Vehicle>),
	);
};

const vehiclePromise = wrapPromise(fetchVehicles());

export function CarsList() {
	const data = vehiclePromise.read();
	return (
		<>
			{data.Results.map((vehicle: Vehicle) => (
				<VehicleCard key={vehicle.MakeId} vehicle={vehicle} />
			))}
		</>
	);
}
