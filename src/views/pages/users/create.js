import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal";

export default function AddUser() {
	const [openModal, setOpenModal] = useState(false);

	const { register, handleSubmit, reset } = useForm();
	const store = async (data) => {
		await axios
			.post("user", data)
			.then((res) => {
				reset();
				setOpenModal(!openModal);
				console.log(res.data.message);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Modal
				open={openModal}
				setOpen={setOpenModal}
				btnModal={"Add user"}
				btnStyle={"px-8 py-2 bg-cyan-500 rounded-md shadow-md text-white"}
				modalTitle={"Add user"}
				modalWitdh={"max-w-lg"}
			>
				<form onSubmit={handleSubmit(store)} method="POST" className="w-full">
					<div className="px-4 py-2">
						<label htmlFor="fullname" className="block text-sm text-dark">
							Fullname
						</label>
						<input
							type="text"
							name="fullname"
							id="fullname"
							className="w-full px-4 py-1.5 rounded-md border border-gray-300 outline-none focus:border-cyan-500"
							placeholder="Fullname"
							{...register("fullname", { required: true })}
						/>
					</div>
					<div className="px-4 py-2">
						<label htmlFor="fullname" className="block text-sm text-dark">
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							className="w-full px-4 py-1.5 rounded-md border border-gray-300 outline-none focus:border-cyan-500"
							placeholder="Username"
							{...register("username", { required: true })}
						/>
					</div>
					<div className="px-4 py-2">
						<label htmlFor="fullname" className="block text-sm text-dark">
							Role
						</label>
						<select
							name="role"
							id="role"
							className="w-full px-4 py-1.5 rounded-md border border-gray-300 outline-none focus:border-cyan-500 bg-white"
							{...register("role", { required: true })}
						>
							<option value="">Pilih role</option>
							<option value="admin">Admin</option>
							<option value="kasir">Kasir</option>
							<option value="owner">Owner</option>
						</select>
					</div>
					<div className="px-4 py-2">
						<label htmlFor="fullname" className="block text-sm text-dark">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="w-full px-4 py-1.5 rounded-md border border-gray-300 outline-none focus:border-cyan-500"
							placeholder="password"
							{...register("password", { required: true })}
						/>
					</div>
					<div className="py-2 mt-2 flex justify-end">
						<button
							type="submit"
							className="px-6 py-2 bg-blue-500 rounded shadow-lg text-white hover:bg-blue-700"
						>
							Save
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
