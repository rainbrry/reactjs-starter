import React from "react";

export default function Reports() {
	return (
		<div className="px-8 py-4">
			<h3 className="text-2xl text-base-500">Reports</h3>

			<div className="py-4">
				<div className="w-full h-[500px] bg-base-100 rounded shadow-lg overflow-x-hidden overflow-y-auto"></div>
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
