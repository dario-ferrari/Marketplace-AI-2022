import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { Grid, Link } from "@mui/material";

export default function SimpleCard(props) {
  var valorada 
    if(props.valorada===true) 
      valorada = "Valorada"
    else valorada = "Aun no valorada"
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
              {props.estado}
            </Typography>
            <Typography variant="h5" component="div">
              {props.titulo}
            </Typography>
            <Typography variant="body2">{valorada}
            </Typography>
            <CardActions >
            <Link to={`/alumno/clasesCompradas/${props.id}`}>
              <Button variant="outlined" size="small">
                Detalles
              </Button>
            </Link>
          </CardActions>
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <Image src={props.imagen} fit={"cover"}></Image>
        </Grid>
      </Grid>
    </Card>
  );
}
