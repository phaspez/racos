"use client";
import SettingSectionAdmin from "./SettingSectionAdmin";
import SettingSectionGeneral from "./SettingSectionGeneral";

export default function Home() {
	return (
		<main className="p-0 m-0 flex-col items-center justify-between px-0 text-black dark:text-white">
			<div className="w-screen flex justify-center p-5">
				<div className="text-highlights grid grid-cols-1 text-left gap-4">
					<h1 className="font-bold text-extra-large text-opacity-10 px-0">
						Cài đặt
					</h1>
					<div className="grid grid-cols-1 gap-4">
						<SettingSectionGeneral />
						<SettingSectionAdmin />
					</div>
				</div>
			</div>
		</main>
	);
}
