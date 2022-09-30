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
import CommentIcon from "@mui/icons-material/Comment";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

export default function CardProfesor(props) {
  var valorada;
  if (props.valorada === true) valorada = "Valorada";
  else valorada = "Aun no valorada";
  return (
    <Card
      sx={{
        maxHeight: 200,
        bgcolor: "#eee7ee",
        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box
        sx={{
          height: 15,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Grid container justifyContent={'center'}>
        <CardContent xs={12} sx={{width:"100%"}}>
          <Grid item>
            <Typography sx={{ fontSize: 14 }} color="success" gutterBottom>
              {props.estado}
            </Typography>
            <Typography variant="h5" component="div">
              {props.titulo}
            </Typography>
            <Typography variant="body2">Cant Alumnos</Typography>
          </Grid>
          <CardActions>
          <Grid container item justifyContent={"space-around"}>
              <Grid item>
                <Link to={`/profesor/clasesprofesor/${props.id}`}>
                  <Button variant="outlined" size="small">
                    Detalles
                  </Button>
                </Link>
              </Grid>
              <Grid item >
                <Badge color="secondary" badgeContent={props.comentariosNuevos}>
                  <CommentIcon />
                </Badge>
              </Grid>
          </Grid>
          </CardActions>
        </CardContent>
      </Grid>
    </Card>
  );
}
