import Link from "next/link";
import { useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

export default function NavLink({ children, href, className, activeClassName, targetPath }) {
	const activeSegments = useSelectedLayoutSegments();

	const currentPath = "/" + activeSegments.join("/");

	return (
		<Link
			className={`${currentPath === targetPath ? activeClassName : ""} ${className}`}
			href={href}>
			{children}
		</Link>
	);
}
