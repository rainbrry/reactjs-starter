import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		await axios
			.get("users")
			.then((res) => setUsers(res.data))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<UserContext.Provider value={{ users, setUsers, getUsers }}>
			{children}
		</UserContext.Provider>
	);
};
