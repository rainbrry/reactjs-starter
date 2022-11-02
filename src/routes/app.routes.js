import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../middlewares/Auth";
import Guest from "../middlewares/Guest";
import MainLayout from "../views/layouts/MainLayout";
import Dashboard from "../views/pages/dashboard";
import Login from "../views/pages/auth/Login";
import ChangePassword from "../views/pages/auth/ChangePassword";
import Users from "../views/pages/users";
import Products from "../views/pages/products";
import Purchasings from "../views/pages/purchasings";
import Sellings from "../views/pages/sellings";
import Reports from "../views/pages/reports";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="login"
					element={
						<Guest>
							<Login />
						</Guest>
					}
				/>
				<Route path="/" element={<MainLayout />}>
					<Route
						path="/"
						element={
							<Auth>
								<Dashboard />
							</Auth>
						}
					/>
					<Route
						path="change-password"
						element={
							<Auth>
								<ChangePassword />
							</Auth>
						}
					/>
					<Route
						path="users"
						element={
							<Auth>
								<Users />
							</Auth>
						}
					/>
					<Route
						path="products"
						element={
							<Auth>
								<Products />
							</Auth>
						}
					/>
					<Route
						path="purchasings"
						element={
							<Auth>
								<Purchasings />
							</Auth>
						}
					/>
					<Route
						path="sellings"
						element={
							<Auth>
								<Sellings />
							</Auth>
						}
					/>
					<Route
						path="reports"
						element={
							<Auth>
								<Reports />
							</Auth>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
