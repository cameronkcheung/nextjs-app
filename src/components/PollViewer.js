"use client";

import { useEffect, useState } from "react";

export default function PollViewer() {
	const [polls, setPolls] = useState(null);

	useEffect(() => {
		fetch(`/api/hello?query=${"a"}`, { next: { revalidate: false } })
			.then((res) => res.json())
			.then((data) => {
				setPolls(data.polls.items);
				console.log(data.polls.items);
			});
	}, []);

	return (
		<div className="bg-red-500 text-white">
			{polls &&
				polls.map((poll) => {
					return <div key={poll.id}>{poll.title}</div>;
				})}
		</div>
	);
}
