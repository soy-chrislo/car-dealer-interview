import { useCallback, useState } from "react";
import type { Response, VehicleType } from "./types";

export function useFetchVehicle(makeId: number, year: number) {
	const [data, setData] = useState<Response<VehicleType>["Results"]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const URL = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

	const fetchVehicle = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(URL);
			const data = await response.json();
			setData(data.Results);
		} catch (error) {
			if (error instanceof Error) setError(error.message);
			else setError("An error occurred");
		}
		setLoading(false);
	}, [URL]);

	return { data, loading, error, fetchVehicle };
}
