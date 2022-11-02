import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		await axios.get("users").then((res) => setUsers(res.data));
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			{children}
		</UserContext.Provider>
	);
};
