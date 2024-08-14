import VehicleModels from "@/components/VehicleModels";
import { getYearsBetween } from "@/lib/years";

export async function generateStaticParams() {
	const getVehiculeIds = async () => {
		const URL =
			"https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

		const response = await fetch(URL);
		const data = (await response.json()) as { Results: { MakeId: number }[] };
		return data.Results.map((result) => result.MakeId);
	};

	const vehicleIds = await getVehiculeIds();
	const years = getYearsBetween(2015);
	return vehicleIds.flatMap((makeId) =>
		years.map((year) => ({
			makeId: makeId.toString(),
			year: year.toString(),
		})),
	);
}

export default function Result({
	params,
}: { params: { makeId: string; year: string } }) {
	const { makeId, year } = params;
	const grayScale = 400;

	return (
		<main className="flex flex-col items-center  min-h-screen text-2xl">
			<div
				className={`mt-5 flex w-4/5 border border-gray-${grayScale} rounded-lg`}
			>
				<div
					className={`w-1/2 border-r border-gray-${grayScale} flex justify-center`}
				>
					<p>Make ID: {params.makeId}</p>
				</div>
				<div className="w-1/2 flex justify-center">
					<p>Year: {params.year}</p>
				</div>
			</div>
			<div
				className={`mt-5 flex w-4/5 border border-gray-${grayScale} rounded-lg p-5`}
			>
				<VehicleModels makeId={makeId} year={year} />
			</div>
		</main>
	);
}
