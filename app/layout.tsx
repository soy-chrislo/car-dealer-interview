"use client";
import "./globals.css";
import { cn } from "@/lib/utils";
import { VehicleProvider } from "@/provider/VehicleContext";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background font-sans antialiased")}>
				<VehicleProvider>{children}</VehicleProvider>
			</body>
		</html>
	);
}
