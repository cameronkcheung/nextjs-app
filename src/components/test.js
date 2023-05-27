"use client";

import { useEffect, useState } from "react";

export default function Test() {
	const [loading, setLoading] = useState(false);
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
		<>
			<div>{loading ? "loading" : "not loading"}</div>
			<button onClick={() => setLoading(!loading)}>Toggle loading</button>
			<div>{JSON.stringify(polls)}</div>
		</>
	);
}
