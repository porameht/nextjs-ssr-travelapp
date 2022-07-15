import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";

const theme = createTheme();

export default function Attraction(props) {
  const attraction = props.attraction;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}

        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {attraction.name}
          </Typography>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              // sx={{
              //   // 16:9
              //   pt: "56.25%",
              // }}
              image={attraction.coverimage}
              alt="random"
            />
          </Card>
          <div style={{ marginTop: "1em" }}>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {attraction.detail}
            </Typography>
          </div>
        </Container>
      </main>
    </ThemeProvider>
  );
}
