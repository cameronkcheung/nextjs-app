"use client";
import React, { useMemo } from "react";

const buttonClassNameMap = {
	DARK: "text-white bg-zinc-800 hover:bg-zinc-900 font-medium rounded-full text-sm px-4 py-2 shadow-sm select-none disabled:opacity-50 flex justify-center items-center",
	LIGHT: "text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-100 font-medium rounded-full text-sm px-4 py-2 shadow-sm select-none disabled:opacity-50 flex justify-center items-center",
	DEFAULT: "text-white bg-primary-500 hover:bg-primary-600 font-medium rounded-full text-sm px-4 py-2 shadow-sm select-none disabled:opacity-50 flex justify-center items-center",
	SECONDARY:
		"text-white bg-secondary-500 hover:bg-secondary-600 font-medium rounded-full text-sm px-4 py-2 shadow-sm select-none disabled:opacity-50 flex justify-center items-center",
};

export const ThemedButton = ({
	children,
	classType,
	className = "",
	onClick,
	disabled,
	loading,
	type = "button",
}) => {
	const buttonStyle = useMemo(() => {
		const _classType = classType?.toUpperCase();
		const buttonType = !(_classType in buttonClassNameMap) ? "DEFAULT" : _classType;
		return buttonClassNameMap[buttonType];
	}, [classType]);

	return (
		<>
			<button
				disabled={disabled}
				type={type}
				onClick={onClick}
				className={`${className} ${buttonStyle} relative`}>
				<span
					style={{
						opacity: loading ? "0%" : "100%",
					}}
					className="flex flex-row justify-center items-center">
					{children}
				</span>
				{loading && (
					<div className="absolute">
						<svg
							className="h-5 w-5 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24">
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div>
				)}
			</button>
		</>
	);
};
