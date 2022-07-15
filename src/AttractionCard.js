import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function AttractionCard(props) {
  const attraction = props.attraction;
  return (
    <Card>
      <Link href={"/" + attraction.id}>
        <CardMedia
          component="img"
          height="315"
          image={attraction.coverimage}
          alt={attraction.name}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {attraction.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {attraction.detail}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Link href={"/" + attraction.id}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
