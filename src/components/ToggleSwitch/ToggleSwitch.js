export const ToggleSwitch = ({ isToggled = false, onToggle, children, className }) => {
	return (
		<div
		className={`${className} relative inline-flex items-center cursor-pointer`}
			onClick={() => onToggle()}>
			<div
				className={`w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-all after:duration-300 duration-300
				${
					isToggled
						? "focus:outline-none focus:ring-4 focus:ring-primary-300 after:translate-x-full after:border-white bg-primary-500"
						: ""
				}`}></div>
		</div>
	);
};
