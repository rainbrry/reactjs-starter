import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "./create";
import DeleteUser from "./delete";
import EditUser from "./edit";

export default function Users() {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		await axios.get("users").then((res) => setUsers(res.data));
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="px-8 py-4">
			<h3 className="text-2xl text-base-500">Users</h3>

			<div className="flex justify-end">
				<AddUser />
			</div>
			<div className="py-4">
				<div className="w-full h-[450px] bg-base-100 rounded shadow-lg">
					<table className="table-auto w-full">
						<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 border-b-2 text-left">
							<tr>
								<th className="p-4 whitespace-nowrap">
									<div className="font-semibold">Name</div>
								</th>
								<th className="p-4 whitespace-nowrap">
									<div className="font-semibold">Username</div>
								</th>
								<th className="p-4 whitespace-nowrap">
									<div className="font-semibold">Role</div>
								</th>
								<th className="p-4 whitespace-nowrap">
									<div className="font-semibold text-center">Actions</div>
								</th>
							</tr>
						</thead>
						<tbody className="text-md divide-y text-left divide-gray-100">
							{users.map((user) => {
								return (
									<tr key={user._id} className="border-b-2 border-gray-200">
										<td className="px-4 py-2 whitespace-nowrap">
											<div className="font-medium text-gray-800 capitalize">
												{user.fullname}
											</div>
										</td>
										<td className="px-4 py-2 whitespace-nowrap">
											<div className="font-normal">{user.username}</div>
										</td>
										<td className="px-4 py-2 whitespace-nowrap">
											<div className="font-medium capitalize">
												<span className="px-4 py-1 rounded-full bg-cyan-600 text-white">
													{user.role}
												</span>
											</div>
										</td>
										<td className="p-2 whitespace-nowrap">
											<div className="text-md text-center flex gap-2 justify-center">
												<EditUser user={user} />
												<DeleteUser id={user._id} />
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
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
