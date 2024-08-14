# Interview Process

- Interviewee: Christian Camilo. chris@soychristian.com

## Getting Started

To get started with the project, you can use the following npm scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.

## Features

- React Suspense: On loading vehicle models.
![img_1](https://imgur.com/a0i4Zpn.png)

- Responsive and feedback: On basic interactions (when choosing options).
![img_2](https://imgur.com/rAadptv.png)

- Data fetching with NextJS SSG Tool: getStaticProps.
![img_3](https://imgur.com/xCcm2ys.png)

- Production environment variables support.
```ts
// ./components/CarsList.tsx
const fetchVehicles = async () => {
	if (!process.env.NEXT_PUBLIC_API_URL_VEHICLES)
		throw new Error("API URL not found");
	const URL = process.env.NEXT_PUBLIC_API_URL_VEHICLES as string;

	return fetch(URL).then((response) =>
		response.json().then((data) => data as Response<Vehicle>),
	);
};
```

- Promise utility to handle Suspended (React Suspense) elements.
```ts
// ./lib/promise.ts
```

## Project Structure

The project has the following structure:

### Key Directories and Files

- **app/**: Contains the main application files such as `globals.css`, `layout.tsx`, and `page.tsx`.
- **components/**: Contains reusable UI components like `CarsList.tsx`, `CarsView.tsx`, `Dropdown.tsx`, and `VehicleCard.tsx`.
- **hooks/**: Contains custom React hooks.
- **lib/**: Contains utility functions and modules, such as `years.ts` which includes the `getYearsBetween` function.
- **provider/**: Contains context providers.
- **public/**: Contains static assets.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.

## Dependencies

The project uses the following key dependencies:

- [`next`](https://www.npmjs.com/package/next?activeTab=readme): The React framework for production.
- [`react`](https://www.npmjs.com/package/react): A JavaScript library for building user interfaces.
- [`react-dom`](https://www.npmjs.com/package/react-dom): Serves as the entry point to the DOM and server renderers for React.
- [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge): Utility for merging Tailwind CSS classes.
- [`lucide-react`](https://www.npmjs.com/package/lucide-react): Icons library used for Shadcn components.
- [`shadcn-ui`](https://www.npmjs.com/package/shadcn-ui): Components library.
