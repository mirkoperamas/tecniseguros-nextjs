import { Header } from "../components/organisms/Header/Header";
import { HomeView } from "../components/templates/HomeView";
import { GraphQLClient, gql } from "graphql-request";

export default function Home({ data }) {
  return (
    <>
      <Header />
      <HomeView data={data} />
    </>
  );
}

// -----GRAPHQL CLIENT-----
export async function getStaticProps() {
  const endpoint = process.env.PREVIEW_CH_ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint);
  graphQLClient.setHeader(
    "x-hasura-admin-secret",
    process.env.PREVIEW_CH_API_KEY
  );

  const query = gql`
    {
      actresses {
        id
        country
        date
        img
        name
      }
    }
  `;

  const data = await graphQLClient.request(query);

  return {
    props: { data },
  };
}
