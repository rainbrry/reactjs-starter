import React from "react";

export default function AdminDashboard() {
	return (
		<div className="px-8 py-4">
			<h3 className="text-2xl text-base-500">Dashboard</h3>

			<div className="flex flex-row justify-between flex-wrap py-4 w-full">
				<div className="md:w-72 h-32 bg-base-100 rounded shadow-lg">Tes</div>
				<div className="md:w-72 h-32 bg-base-100 rounded shadow-lg">Tes</div>
				<div className="md:w-72 h-32 bg-base-100 rounded shadow-lg">Tes</div>
				<div className="md:w-72 h-32 bg-base-100 rounded shadow-lg">Tes</div>
			</div>

			<div className="flex flex-row gap-4 py-4 w-full">
				<div className="w-9/12 h-96 bg-base-100 rounded shadow-lg"></div>
				<div className="md:w-3/12 h-96 bg-base-100 rounded shadow-lg"></div>
			</div>
		</div>
	);
}
