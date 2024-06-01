"use client";

import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	Dropdown,
	DropdownItem,
	DropdownHeader,
	DropdownDivider,
	Avatar,
} from "flowbite-react";

const customTheme = {
	root: {
		base: "bg-black/5 backdrop-blur-md px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
		rounded: {
			on: "rounded",
			off: "",
		},
		bordered: {
			on: "border",
			off: "",
		},
		inner: {
			base: "mx-auto flex flex-wrap items-center justify-between",
			fluid: {
				on: "",
				off: "container",
			},
		},
	},
};

export default function NavBar() {
	return (
		<nav className="sticky top-0 z-10">
			<Navbar
				fluid
				rounded
				className="list-none backdrop-blur-md"
				theme={customTheme}
			>
				<NavbarBrand href="/">
					<span className="self-center whitespace-nowrap text-xl font-semibold text-highlights">
						CAAS
					</span>
				</NavbarBrand>
				<div className="flex md:order-2">
					<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt="User settings"
								img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								rounded
							/>
						}
					>
						<DropdownHeader>
							<span className="block text-sm">Anonymous</span>
							<span className="block truncate text-sm font-medium">
								name@mail.com
							</span>
						</DropdownHeader>
						<DropdownItem>Settings</DropdownItem>
						<Link href={"/admin"}>
							<DropdownItem>Admin</DropdownItem>
						</Link>
						<DropdownItem>Sign out</DropdownItem>
					</Dropdown>
					<Navbar.Toggle />
				</div>

				<Navbar.Collapse>
					<Navbar.Link href="/chat">Chat</Navbar.Link>
					<Navbar.Link href="/faq">FAQ</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</nav>
	);
}
