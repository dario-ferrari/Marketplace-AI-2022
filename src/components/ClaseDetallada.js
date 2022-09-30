import * as React from "react";
import { Image } from "mui-image";
import {useLoaderData } from "react-router-dom";
import { Box, Divider, Rating, Grid, Typography, Avatar, List, ListItem,ListItemText, ListItemAvatar,Button  } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContenedorProfesor from './componentsChiquitos/contenedorProfesor';
import ItemBarrita from "./componentsChiquitos/itemsBarrita";
import Comentarios from "./componentsChiquitos/comentarios";
import Content from "./Content";
import StarIcon from '@mui/icons-material/Star';


export default function ClaseDetalladaComprada(props) {
  var estado
  if (props.estado === 'Aceptado'){
    estado = "#3a7c2d"
  }if(props.estado === "Finalizada"){
    estado = "#6741e7"
  }if (props.estado=== "Cancelada"){
    estado = "#f6492d"
  }
  return (
    <Box component="main" sx={{ flex: 1, bgcolor: "#eaeff1"}}>
      {/**la imagen de cover estaria bueno que se achicara un poco al bajar, investigar */}
      <Image
        src={props.imagen}
        fit="cover"
        height="150px"
        style={{
          objectPosition: "50% 25%",
          minHeight:"150px",
          top: 0,
          height: "150px",
          width: "100%",
          zIndex: "1"
        }}
      />
      {/**titulo de la clase  */}
      <Grid container>
        <Grid item xs={11}>
            <Typography variant="h1" py={3} px={5}>
                {props.titulo}
            </Typography>
        <Divider></Divider>
        </Grid>
        <Grid item xs={1} container justifyContent={"space-between"}
        alignContent={"center"} sx={{paddingRight:"0", margin:"0"}}>
          <Grid item alignSelf={"center"}>
            <Button size="large" variant="contained" color="success" startIcon={<ShoppingCartIcon/>}  >Comprar</Button> 
            </Grid>
            
        </Grid>
        
        {/* seccion donde se describe el curso */}
        <Grid item xs={8}>
          <Typography variant="body1" py={5} px={5}>
            {props.descripcion}
          </Typography>
        </Grid>

        {/* seccion donde se describe al maetro */}
        <ContenedorProfesor nombre={"Juan Carlos Messi"} linkFoto={'https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=240x'}
        cantClases={'13'} cantAlumnos={"1392"} titulo ={'Lic en Cosas Chidas'} rating={'5'} 
        />

        {/*caracteristicas de la clase la barrita con duracion,frcuencia,etc,etc */}
        <Grid
          container
          height={"10em"}
          marginY={"5em"}
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{ bgcolor: "#e2e3e3",boxShadow: " inset 0 0px 8px 10px rgba(0, 0, 0, 0.15)"}}
        >
          <ItemBarrita icono={<AccessTimeIcon sx={{ fontSize: "4em" }} />} descripcion={props.duracion} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>

          <ItemBarrita icono={<CalendarMonthIcon sx={{ fontSize: "4em" }} />} descripcion={props.frecuencia} />

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <ItemBarrita icono={<PaidIcon sx={{ fontSize: "4em" }} />} descripcion={props.precio} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>
          
          <ItemBarrita icono={<PersonIcon sx={{ fontSize: "4em" }} />} descripcion={props.tipo} />

        </Grid>
      </Grid>

{/**donde van a ir los comentarios */}
    <Typography variant="h3" paddingX={'1em'}>
      Comentarios
    </Typography>
    <Comentarios idClase={props.id} idUsario={props.user}></Comentarios>
    </Box>
  );
}
