import { Card } from "../Card/Card";

export const PollDetailCardSkeleton = ({ className }) => {
	return (
		<Card className={`${className} px-8 py-4 select-none animate-pulse`}>
			<div className="flex items-center justify-between">
				<div className="w-80 bg-zinc-100 rounded-lg max-w-full">&nbsp;</div>
			</div>
			<div className="mt-2">
				<div className="text-2xl w-[50rem] bg-zinc-100 rounded-lg max-w-full">&nbsp;</div>
				<p className="mt-2 w-[35rem] bg-zinc-100 rounded-lg max-w-full">&nbsp;</p>
			</div>
			<div className="flex items-center justify-between mt-4">
				<div className="flex space-x-2">
					<div className="rounded-full w-20 max-w-full bg-zinc-400 px-4 py-2">
						&nbsp;
					</div>
					<div className="rounded-full w-12 max-w-full bg-zinc-300 px-4 py-2">
						&nbsp;
					</div>
					<div className="rounded-full w-40 max-w-full bg-zinc-200 px-4 py-2">
						&nbsp;
					</div>
				</div>
			</div>
		</Card>
	);
};
