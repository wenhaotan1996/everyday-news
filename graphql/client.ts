const uri =
  process.env.ENVIRONMENT === "local"
    ? "http://localhost:4000/"
    : "http://graphql:4000/";

type GQLResponse = {
  data: any;
  errors: any;
};

async function performQuery(query: string, args: { [key: string]: string }) {
  const result = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        ...args,
      },
    }),
  });

  const res: GQLResponse = await result.json();

  if (res.errors) {
    throw new Error("error");
  }

  return res.data;
}

export default { query: performQuery };
