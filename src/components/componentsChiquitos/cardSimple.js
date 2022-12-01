import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Image } from "mui-image";

export default function SimpleCard(props) {
  const clase = props.clase
  return (
    <Card
      sx={{
        minWidth: 250,
        maxHeight: 200,
        bgcolor: "#eee7ee",
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="success" gutterBottom>
              {clase.frecuencia}
            </Typography>
            <Typography variant="h5" component="div">
              {clase.titulo}
            </Typography>
            <Typography variant="body2">Valorado
            </Typography>
            <CardActions >
            <Link to={`/alumno/clases/${clase._id}`}>
              <Button variant="outlined" size="small">
                Detalles
              </Button>
            </Link>
          </CardActions>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Image src={clase.imagen} fit={"cover"}></Image>
        </Grid>
      </Grid>
    </Card>
  );
}
