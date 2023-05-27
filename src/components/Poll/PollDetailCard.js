import Link from "next/link";
import { ThemedButton } from "../Button/Button";
import { Card } from "../Card/Card";
import { CopyWordIdButton } from "../Button/CopyWordIdButton";
import { dateToHowManyAgo, dateToHowManyUntil } from "@/app/_utils/DateUtils";
import { Tag } from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const lineClampClassMap = {
	1: "line-clamp-1",
	2: "line-clamp-2",
	3: "line-clamp-3",
	4: "line-clamp-4",
	5: "line-clamp-5",
	6: "line-clamp-6",
};

export const PollDetailCard = ({ poll, key, className = "", descriptionClassName = "" }) => {
	return (
		<>
			<Card
				key={key}
				className={`${className} px-6 md:px-8 py-4 hover:border-zinc-400 transition-colors`}>
				<div className="flex items-center justify-between">
					<div className="text-xs font-light text-zinc-600">
						<span>Created {dateToHowManyAgo(poll.created)} by </span>
						<Link href={"/"} className={"font-medium text-black"}>
							{poll.author.userName}
						</Link>
						{poll.endAt && (
							<>
								<span className="mx-2">•</span>
								<span className="text-xs">
									{new Date(poll.endAt) >= new Date()
										? `Ends in ${dateToHowManyUntil(poll.endAt)}`
										: "Ended"}
								</span>
							</>
						)}
					</div>
					<div className="space-x-2 items hidden sm:flex">
						{poll.anonymous && (
							<div className="px-3 py-1 text-xs text-amber-500 transition-colors transform bg-amber-100 rounded-lg tracking-wide cursor-default font-medium select-none">
								Anonymous
								<a className="ml-1 cursor-pointer">
									<FontAwesomeIcon icon={faCircleQuestion} />
								</a>
							</div>
						)}
						{poll.public && (
							<div className="px-3 py-1 text-xs text-green-500 transition-colors transform bg-green-100 rounded-lg tracking-wide cursor-default font-medium select-none">
								Public
								<a className="ml-1 cursor-pointer">
									<FontAwesomeIcon icon={faCircleQuestion} />
								</a>
							</div>
						)}
					</div>
				</div>
				<div className="mt-2">
					<Link
						href={`/poll/${poll.wordId}`}
						className="text-xl text-zinc-700 hover:text-zinc-500">
						{poll.title}
					</Link>
					<p
						className={`${descriptionClassName} mt-2 text-zinc-500 font-light text-sm`}>
						{poll.description}
					</p>
				</div>
				{poll.tags?.length > 0 && (
					<div className="mt-2 flex flex-wrap">
						{poll.tags.map((tag) => {
							return <Tag key={tag.id} tag={tag} className={"mr-2 mb-2"} />;
						})}
					</div>
				)}

				<div className="flex items-center justify-between mt-2">
					<div className="flex space-x-2">
						<Link href={`/poll/${poll.wordId}`}>
							<ThemedButton type={"button"}>View</ThemedButton>
						</Link>
						<ThemedButton type={"button"} classType="secondary">
							<FontAwesomeIcon icon={faEllipsis} className="text-white"/>
						</ThemedButton>
						<CopyWordIdButton wordId={poll.wordId}>
							{poll.wordId}
						</CopyWordIdButton>
					</div>
				</div>
			</Card>
		</>
	);
};
