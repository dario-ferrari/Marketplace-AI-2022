import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { Grid } from "@mui/material";

export default function SimpleCard() {
  return (
    <Card sx={{ minWidth: 275, bgcolor: "#eee7ee",boxShadow : "0 8px 8px 0 rgba(0, 0, 0, 0.15)" }}>
      <Grid container>
        <Grid item xs={6}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Completado
            </Typography>
            <Typography variant="h5" component="div">
              Titulo
            </Typography>
            <Typography variant="body2">Prof. Trujillo</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Image src="https://www.freecodecamp.org/espanol/news/content/images/2021/01/Course-Image-1.png" fit={'cover'}></Image>
        </Grid>
      </Grid>
    </Card>
  );
}
