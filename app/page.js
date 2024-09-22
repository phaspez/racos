import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<main className="p-0 m-0 flex-col items-center justify-between px-0">
			<div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center p-5 px-7">
				<Image src={"/robot_wave_hand.png"} width={300} height={400} alt="Hello"></Image>
				<div className=" col-span-1 lg:col-span-3 text-highlights font-extrabold grid grid-cols-1 text-left shrink place-content-start">
					<div>
					<h1 className="text-8xl w-min shrink text-highlights px-0">
						CAAS
					</h1>
					</div>
					<h1 className="text-gray-600 text-extra-large opacity-50 px-0">
						{/* <u>R</u>outed Chat-Voice <u>A</u>dmissions <u>Co</u>unseling <u>S</u>upport */}
						Chat-Voice Admissions Advisory Support
					</h1>
					<h1 className="text-gray-600 text-extra-large opacity-50 px-0">
						Hệ thống tư vấn tuyển sinh CTU
					</h1>
					<div className="p-2"></div>
					<Link href={"/chat"}>
						<button className="btn btn-info text-white">Truy cập</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
