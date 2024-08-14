import type React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

interface VehicleContextType {
	vehicleId: number | null;
	setVehicleId: (id: number | null) => void;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const useVehicle = () => {
	const context = useContext(VehicleContext);
	if (!context) {
		throw new Error("useVehicle must be used within a VehicleProvider");
	}
	return context;
};

export function VehicleProvider({ children }: { children: ReactNode }) {
	const [vehicleId, setVehicleId] = useState<number | null>(null);

	return (
		<VehicleContext.Provider value={{ vehicleId, setVehicleId }}>
			{children}
		</VehicleContext.Provider>
	);
}
