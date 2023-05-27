import { NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("query");

	const res = await fetch("https://pollr2.azurewebsites.net/graphql", {
		method: "POST",
		mode: "cors",
		next: { revalidate: 10 },
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `{
                    polls(
                      order: { created: DESC }
                      where: {
                        or: [{ title: { contains: "${query}" } }, { description: { contains: "${query}" } }]
                      }
                    ) {
                      items {
                        id
                        title
                        description
                        wordId
                        anonymous
                        public
                        created
                        endAt
                        author {
                          userName
                        }
                        tags {
                          id
                          name
                        }
                      }
                    }
                  }`,
		}),
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const responseJson = await res.json();

	return NextResponse.json(responseJson.data);
}
