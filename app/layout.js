import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CAAS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="fixed h-full w-full p-0 m-0 -z-50 background-theme-red">
					{" "}
				</div>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
