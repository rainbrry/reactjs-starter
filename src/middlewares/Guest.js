import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Guest({ children }) {
	const { isLogin } = useContext(AuthContext);
	const redirect = useNavigate();

	useEffect(() => {
		if (isLogin) redirect("/");
	}, [isLogin, redirect]);

	return children;
}
