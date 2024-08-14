export interface Vehicle {
	MakeId: number;
	MakeName: string;
	VehicleTypeId: number;
	VehicleTypeName: string;
}

export interface VehicleType {
	Make_ID: number;
	Make_Name: string;
	Model_ID: number;
	Model_Name: string;
}

export interface Response<T> {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: T[];
}
