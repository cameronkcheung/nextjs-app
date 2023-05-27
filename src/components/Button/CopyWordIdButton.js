"use client";

import { copyToClipboard } from "@/app/_utils/ClipboardUtils";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const CopyWordIdButton = ({ wordId, type = "button", children, className }) => {
	const [_wordId, _setWordId] = useState(null);
	const [showCopied, setShowCopied] = useState(false);

	useEffect(() => {
		_setWordId(wordId);
	}, []);

	const handleButton = () => {
		copyToClipboard(_wordId);
		setShowCopied(true);
		setTimeout(() => setShowCopied(false), 5000);
	};

	return (
		<>
			<button
				type={type}
				className={`${className} rounded-full bg-zinc-100 px-4 py-2 text-xs cursor-pointer text-zinc-500 hover:bg-zinc-200 transition border flex justify-center items-center relative`}
				onClick={() => handleButton()}>
				<span
					style={{
						opacity: showCopied ? "0%" : "100%",
					}}
					className="flex flex-row justify-center items-center">
					<FontAwesomeIcon icon={faCopy} className="pr-2" />
					<div className="line-clamp-1">{children}</div>
				</span>
				{showCopied && (
					<span className="absolute flex flex-row justify-center items-center">
						<FontAwesomeIcon icon={faCheck} className="pr-2" />
						<div>Copied</div>
					</span>
				)}
			</button>
		</>
	);
};
