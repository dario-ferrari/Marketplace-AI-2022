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

export default function CardStyled(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.imagen}
      />
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Rating
              name="half-rating-read"
              defaultValue={Number(props.rating)}
              precision={1}
              readOnly
            />
            <Typography gutterBottom variant="h5" component="div">
              {props.titulo}
            </Typography>
          </Grid>
          <Grid item position="relative" top={-45} right={-7}>
            <Avatar
              alt="Foto Perfil"
              src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=240x"
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {props.descripcion.slice(0,100)}
              <br />
              {props.frecuencia}, {props.duracion}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{paddingTop: '0px'}}>
        <Grid container alignContent={'center'}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.primary" sx={{display:'flex',fontSize:'1.5em'}} justifyContent={'center'}>
              {props.precio} USD
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Link to={`/alumno/clases/${props.id}`}>
              <Button variant="outlined" size="medium">
                Saber Mas
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
