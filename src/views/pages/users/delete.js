import axios from "axios";
import React, { useState } from "react";
import Confirm from "../../components/Confirm";

export default function DeleteUser({ id }) {
	const [openModal, setOpenModal] = useState(false);

	const [users, setUsers] = useState([]);

	const destroy = async (id) => {
		await axios
			.delete(`user/${id}`)
			.then((res) => {
				setUsers((user) => user.filter((res) => res._id !== user._id));
				setOpenModal(!openModal);
				console.log(res.data.message);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Confirm
			open={openModal}
			setOpen={setOpenModal}
			btnStyle={"px-4 py-1 bg-red-500 rounded-lg shadow text-white"}
			btnModal={"Delete"}
			modalTitle={"Hapus User"}
			modalWitdh={"w-1/3"}
			confirm={
				<button
					onClick={() => destroy(id)}
					className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded shadow text-white"
				>
					Yes
				</button>
			}
		>
			<span className="font-medium text-lg block mt-5">
				Anda yakin akan melanjutkan?
			</span>
			<p className="font-medium text-md text-red-500">
				Data yang dihapus tidak bisa dikembalikan lagi
			</p>
		</Confirm>
	);
}
