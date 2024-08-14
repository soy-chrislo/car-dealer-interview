import { Suspense } from "react";
import { CarsList } from "./CarsList";
import { VehicleCardSkeleton } from "./VehicleCardSkeleton";

export function CarsView({ className }: { className?: string }) {
	// ! Non-suspense way
	// const { fetchVehicles, data } = useFetchVehicles();

	// useEffect(() => {
	// 	fetchVehicles();
	// }, [fetchVehicles]);

	return (
		<div className={`${className} pt-5 pb-5`}>
			<div className="flex flex-wrap justify-center items-center gap-5">
				<Suspense
					fallback={
						<div className="flex flex-wrap justify-center items-center gap-5">
							{[...Array(10)].map((_, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<VehicleCardSkeleton key={i} />
							))}
						</div>
					}
				>
					<CarsList />
				</Suspense>
				
				{
				// ! Non-suspense way
				/* {data.map((vehicle: Vehicle) => (
					<VehicleCard key={vehicle.MakeId} vehicle={vehicle} />
				))} */}
			</div>
		</div>
	);
}
