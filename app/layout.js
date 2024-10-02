import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { SettingsProvider } from "./managers/SettingsContext";
import { ThemeProvider } from "next-themes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"], weight: '500' });
export const metadata = {
	title: "CAAS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" enableSystem={false}>
					<SettingsProvider>
						<div className="fixed h-full w-full p-0 m-0 -z-50 background-theme-red dark:background-theme-black">
							{" "}
						</div>
						<NavBar />
						<div className="py-10" />
						{children}
						<ToastContainer />
					</SettingsProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
