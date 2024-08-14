type Handler = {
	pending: () => never;
	error: () => never;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	default: () => any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: () => any;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function wrapPromise(promise: Promise<any>) {
	let status = "pending";
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	let response: any;

	const suspender = promise.then(
		(res) => {
			status = "success";
			response = res;
		},
		(err) => {
			status = "error";
			response = err;
		},
	);

	const handler: Handler = {
		pending: () => {
			throw suspender;
		},
		error: () => {
			throw response;
		},
		default: () => response,
	};

	const read = () => {
		const result = handler[status] ? handler[status]() : handler.default();
		return result;
	};

	return { read };
}
