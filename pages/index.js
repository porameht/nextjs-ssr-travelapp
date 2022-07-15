import Navbar from "../src/Navbar";
import AttractionCard from "../src/AttractionCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function HomePage({ data }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <div style={{ marginTop: "1em" }}>
          <Typography variant="h4" gutterBottom component="div">
            Around The World!!
          </Typography>
        </div>
        <Grid container spacing={3}>
          {data.map((attraction) => (
            <Grid item xs={12} lg={4} key={attraction.id}>
              <AttractionCard attraction={attraction} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch("https://www.mecallapi.com/api/attractions");
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { data } };
}
export default HomePage;
