export interface Vehicle {
	MakeId: number;
	MakeName: string;
	VehicleTypeId: number;
	VehicleTypeName: string;
}

export interface Response {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: Vehicle[];
}
