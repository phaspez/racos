"use server";

import axios from "axios";
// import { cookies } from "next/headers";

// fetch userdata from server
// deprecated
async function getUserInfo({ token }) {
	//console.log(process.env.BACKEND_URL + "/api/user/info");
	//console.log("logging in with ", token);

	const config = {
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: {
			token: token,
		},
	};
	const response = await axios.get(
		process.env.BACKEND_URL + "/api/user/info",
		null,
		{
			params: {
				token: token,
			},
			...config,
		}
	);
	const data = response.data;
	return data;
}

async function login({ username, password }) {
	const response = await axios.post(
		process.env.BACKEND_URL + "/api/v1/user/login",
		{
			username: username,
			password: password,
		}
	);

	const data = response.data;

	if (data) {
		localStorage.setItem("username", data.username);
		localStorage.setItem("department", data.department);
	}


	return data;
}

async function sendPrompt({ prompt }) {
	const response = await axios.post(
		process.env.BACKEND_URL + "/api/v1/chat/prompt",
		{
			//token: token,
			prompt: prompt,
		}
	);
	const data = response.data;
	return data;
}

async function uploadFile({ formData }){
	const response = await axios.post(
		process.env.BACKEND_URL + "/api/v1/user/upload", formData, 
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);
	const data = response.data;
	return data;
}

async function trainModel(){
	const response = await axios.post(
		process.env.BACKEND_URL + "/api/v1/user/train"
	);
	const data = response.data;
	return data;
}

function logout() {
	localStorage.removeItem("username");
	localStorage.removeItem("department");
	return { success: true };
}

export { login, logout, sendPrompt, uploadFile, trainModel };
