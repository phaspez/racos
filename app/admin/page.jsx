"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FaRobot, FaUpload, FaUser, FaBuilding } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { uploadFile } from "../middleware/CaasBackend";
import { toast } from "react-toastify";

function getUser() {
	const username = localStorage.getItem("username");
	const department = localStorage.getItem("department");

	let success = username && department;

	return {
		success: success,
		username: username,
		department: department,
	};
}

export default function Home() {
	const [username, setUsername] = useState("admin");
	const [department, setDepartment] = useState("Can Tho University");
	const [file, setFile] = useState(null);

	const router = useRouter();

	useEffect(() => {
		let res = getUser(username);

		if (res.success) {
			setUsername(res.username);
			setDepartment(res.department);
		} else {
			router.push("/");
		}
	});

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const logout = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("department");
		return { success: true };
	}


	const handleUpload = async (e) => {
		e.preventDefault();
		if (!file) {
			alert("Please select a file first.");
			return;
		}
		
		const formData = new FormData();
		formData.append("file", file);
	
		try {
			const res = await uploadFile({ formData });
			let fileName = res.nameFile || "";
			toast.success("Upload file " + fileName? (fileName+" ") : "" + "thành công");
		} catch (error) {
			toast.error("Error uploading the file");
			//console.error("Error uploading the file:", error);
		}
	};

	const handleTrain = async (e) => {
		e.preventDefault();
		try {
			const res = await trainModel();
			const {message} = res;
			toast.success(message || "Huấn luyện mô hình thành công");
		} catch (error) {
			toast.error("Error training the model");
			//console.error("Error training the model:", error);
		}
	}

	const handleLogout = () => {
		logout();
		router.push("/");
	}

	return (
		<main className="flex py-3 m-0 flex-col items-center justify-between px-0 text-black dark:text-white">
			<Image className="dark:invert fixed top-36 right-56 opacity-30 -z-10" src="/gear.png" alt="gear icon" width={100} height={100}/>
			<Image className="fixed top-52 right-32 opacity-50 lg:opacity-100 -z-10" src="/machine.png" alt="machine icon" width={200} height={300}/>
			<div className="pt-10 w-11/12 lg:w-5/6 px-6 gap-2">
				<h1 className="text-highlights text-extra-large w-max">Admin</h1>
				<div>
					<Link href={"/"} className="flex items-center w-48 gap-4 pl-2 py-3">
						<FaArrowLeft /> Quay về trang chủ
					</Link>

					<div className="grid gap-2 p-2 text-left">
						<span className="flex items-center gap-2"><FaUser /> {username}</span>
						<span className="flex items-center gap-2"><FaBuilding /> {department}</span>
					</div>

					<p>Upload file <span className="kbd kbd-sm">.pdf</span> để huấn luyện mô hình:</p>

					<form onSubmit={handleUpload}>
						<div className="grid gap-2">
							<input type="file" accept="application/pdf" 
								className="file-input file-input-bordered file-input-info w-full max-w-xs" 
								onChange={handleFileChange}
							/>
							<div className="flex gap-2">
								<button type="submit" className="btn btn-info">
									<FaUpload />
									Tải lên
								</button>
							</div>
						</div>
					</form>
					<div className="py-2">
						<button
							onClick={handleTrain} 
							className="btn bg-blue-300 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
							<FaRobot />
							Huấn luyện
						</button>
					</div>
					<div>
						<button className="btn btn-error" onClick={handleLogout}>
							Đăng xuất
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}
