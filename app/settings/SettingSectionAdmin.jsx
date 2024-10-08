"use client";

import SettingSection from "./SettingSection";
import Image from "next/image";
import { useState } from "react";
//import {login} from "../middleware/CaasBackend";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import axios from 'axios';

async function login({ username, password }) {
	const response = await axios.post(
		process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1/user/login",
		{
			username: username,
			password: password,
		}
	);
	const data = response.data;
	console.log(data);
	if (data) {
		localStorage.setItem("username", data.username);
		localStorage.setItem("department", data.department);
	}


	return data;
}

export default function SettingSectionAdmin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const test = {
			"password": password,
			"username": username,
		}
		console.log(username);
		console.log(password);
		try {
			console.log(test);
			await login(test).then((resp) => {
				toast.success('Đăng nhập thành công');
				router.push("/admin");
			});
		} catch (error) {
			console.error(error);
			toast.error('Đăng nhập thất bại');
		}
	};

	return (
		<SettingSection title="Đăng nhập Admin">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<form onSubmit={handleSubmit} className="grid p-2 max-w-md flex-col text-black dark:text-white gap-4">
					<label className="input input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
							<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
						</svg>
						<input
							type="text"
							className="grow w-full"
							placeholder="Email"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
					<label className="input w-full input-bordered flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
								clipRule="evenodd"
							/>
						</svg>
						<input
							type="password"
							className="grow"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<button type="submit" onClick={handleSubmit} className="btn btn-outline">Login</button>
				</form>
				<div className="grid">
					<Image
						src={"/landing2.png"}
						width={200}
						height={200}
						alt="Robot image"
						className="justify-self-center"
					/>
				</div>
			</div>
		</SettingSection>
	);
}
