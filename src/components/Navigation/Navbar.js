"use client";
import React, { useEffect, useState } from "react";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { Card } from "../Card/Card";
import { ThemedButton } from "../Button/Button";
import Link from "next/link";
import { faCircleInfo, faHouse, faTableList, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "../Link/NavLink";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [darkModeSwitchToggled, setDarkModeSwitchToggled] = useState(false);

	const navLinks = (
		<>
			<NavLink
				href="/"
				targetPath={"/"}
				onClick={() => setMenuOpen(false)}
				className={
					"text-black border-transparent border hover:border-black px-4 py-1 rounded-full text-sm font-medium"
				}
				activeClassName={
					"bg-zinc-900 text-white border-transparent border px-4 py-1 rounded-full text-sm font-medium"
				}>
				<FontAwesomeIcon icon={faHouse} className="mr-3" />
				Home
			</NavLink>
			<NavLink
				href="/polls"
				targetPath={"/polls"}
				onClick={() => setMenuOpen(false)}
				className={
					"text-black border-transparent border hover:border-black px-4 py-1 rounded-full text-sm font-medium"
				}
				activeClassName={
					"bg-zinc-900 text-white border-transparent border px-4 py-1 rounded-full text-sm font-medium"
				}>
				<FontAwesomeIcon icon={faTableList} className="mr-3" />
				Polls
			</NavLink>
			<NavLink
				href="/info"
				targetPath={"/info"}
				onClick={() => setMenuOpen(false)}
				// className={({ isActive }) =>
				// 	isActive
				// 		? "bg-zinc-900 text-white border-transparent border px-4 py-1 rounded-full text-sm font-medium"
				// 		: "text-black border-transparent border hover:border-black px-4 py-1 rounded-full text-sm font-medium"
				// }
				className={
					"text-black border-transparent border hover:border-black px-4 py-1 rounded-full text-sm font-medium"
				}
				activeClassName={
					"bg-zinc-900 text-white border-transparent border px-4 py-1 rounded-full text-sm font-medium"
				}>
				<FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
				Info
			</NavLink>
		</>
	);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 640) {
				setMenuOpen(false);
			}
		});
	}, []);

	const toggleDarkMode = () => {
		setDarkModeSwitchToggled(!darkModeSwitchToggled);
	};

	return (
		<>
			<div className="bg-zinc-50/80 backdrop-blur-md fixed bottom-0 h-12 bg-clip-padding w-full shadow z-[100] border-t">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-12 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								onClick={() => toggleMenu()}
								type="button"
								className="inline-flex transition items-center justify-center rounded-full p-1.5 text-black hover:scale-105 border border-zinc-400 focus:outline-none shadow-sm">
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor">
									{menuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									)}
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="hidden sm:block">
								<div className="flex space-x-4">{navLinks}</div>
							</div>
						</div>
						<ToggleSwitch
							isToggled={darkModeSwitchToggled}
							onToggle={() => toggleDarkMode()}
							className="mr-3 hidden sm:block"
						/>
						{/* {auth.user ? (
							<NavLink href="/profile" onClick={() => setMenuOpen(false)}>
								<ThemedButton type={"button"} classType={"default"}>
									<FontAwesomeIcon icon={faUser} className="mr-3" />
									{auth.user.username}
								</ThemedButton>
							</NavLink>
						) : (
							<div className="flex space-x-2">
								<Link
									href="/login"
									onClick={() => setMenuOpen(false)}>
									<ThemedButton type={"button"} classType={"default"}>
										Login
									</ThemedButton>
								</Link>
								<Link
									href="/register"
									onClick={() => setMenuOpen(false)}>
									<ThemedButton type={"button"} classType={"default"}>
										Register
									</ThemedButton>
								</Link>
							</div>
						)} */}
					</div>
				</div>
			</div>
			<div
				className={`z-[99] scrollbar-none overflow-y-auto sm:hidden bg-zinc-100/75 h-screen pb-12 w-full fixed top-0 bg-clip-padding backdrop-blur-sm transition-[margin-top] duration-500 ${
					menuOpen ? "mt-0" : "mt-[200vh]"
				}`}>
				<div className="flex flex-col h-full justify-between px-2 pt-2 pb-3 space-y-4">
					<div className="space-y-3 flex flex-col">{navLinks}</div>
					<Card className="!p-3">
						<div className="flex items-center">
							<ToggleSwitch
								className={"mr-3"}
								isToggled={darkModeSwitchToggled}
								onToggle={() => toggleDarkMode()}
							/>
							<label className="text-zinc-500 text-sm">Dark mode</label>
						</div>
						<hr className="my-2" />
						<div>
							<label className="text-zinc-500 text-sm">
								Another setting here
							</label>
						</div>{" "}
						<hr className="my-2" />
						<div>
							<label className="text-zinc-500 text-sm">
								Another setting here
							</label>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
}
