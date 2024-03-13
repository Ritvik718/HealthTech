import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../../../assets/c19.jpeg";
import img2 from "../../../assets/antigen.jpg";
import img3 from "../../../assets/SS21.webp";
export default function ImgMediaCard() {
  return (
    <>
      <div className="flex mx-32">
        <div className="mb-12">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nucleic Acid Amplification
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NAAT (Nucleic Acid Amplification Test) is a sensitive molecular
                tech commonly used in diagnosing infectious diseases like
                COVID-19.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="mx-20">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img2}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Nasal Swab Test
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img3}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blood Test
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}
