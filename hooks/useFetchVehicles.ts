import { useCallback, useState } from "react";
import type { Response } from "./types";

export function useFetchVehicle() {
	const [data, setData] = useState<Response["Results"]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const URL =
		"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

	const fetchVehicles = useCallback(async () => {
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
	}, []);

	return { data, loading, error, fetchVehicles };
}
