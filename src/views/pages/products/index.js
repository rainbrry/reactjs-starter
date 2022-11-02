import React from "react";

export default function Products() {
	return (
		<div className="px-8 py-4">
			<h3 className="text-2xl text-base-500">Products</h3>

			<div className="flex justify-end">
				<button className="px-8 py-2 bg-cyan-500 rounded-md shadow-md text-white">
					Add product
				</button>
			</div>
			<div className="py-4">
				<div className="w-full h-[450px] bg-base-100 rounded shadow-lg"></div>
			</div>

			<div className="w-full flex justify-center">
				<div className="flex justify-center gap-10 w-96 items-center px-2  h-10 bg-base-100 rounded shadow-lg">
					<span className="block">Previous</span>
					<span className="block">1</span>
					<span className="block">2</span>
					<span className="block">3</span>
					<span className="block">4</span>
					<span className="block">Next</span>
				</div>
			</div>
		</div>
	);
}
