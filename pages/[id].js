import Attraction from "../src/Attraction";
import Head from "next/head";

function AttractionPage({ data }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={data.attraction.name} />
        <meta property="og:description" content={data.attraction.detail} />
        <meta property="og:image" content={data.attraction.coverimage} />
      </Head>
      <Attraction attraction={data.attraction} />
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://www.mecallapi.com/api/attractions");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((attraction) => ({
    params: { id: String(attraction.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://www.mecallapi.com/api/attractions/${params.id}`
  );
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { data } };
}

export default AttractionPage;
