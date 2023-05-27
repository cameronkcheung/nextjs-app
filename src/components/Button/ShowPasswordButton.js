import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ShowPasswordButton = ({ showPassword, setShowPassword }) => {
	return (
		<div
			className="bg-zinc-700 border border-white rounded-lg ml-2 px-2 hover:bg-zinc-600 transition-colors cursor-pointer flex justify-center items-center w-8"
			onClick={() => setShowPassword(!showPassword)}>
			{showPassword ? (
				<FontAwesomeIcon icon={faEyeSlash} />
			) : (
				<FontAwesomeIcon icon={faEye} />
			)}
		</div>
	);
};
