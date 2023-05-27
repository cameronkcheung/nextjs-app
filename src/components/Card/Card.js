import { forwardRef } from "react";

export const Card = forwardRef(function Card({ className = "", children }, ref) {
	return (
		<div
			ref={ref}
			className={`${className} p-5 bg-zinc-50 rounded-lg border border-zinc-300`}>
			{children}
		</div>
	);
});
