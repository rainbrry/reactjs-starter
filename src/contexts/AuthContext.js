import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [auth, setAuth] = useState([]);

	return (
		<AuthContext.Provider value={{ isLogin, setIsLogin, auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
