import * as React from "react";
import { Image } from "mui-image";
import { Box, Divider, Grid, Typography  } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import ContenedorProfesor from './componentsChiquitos/contenedorProfesor';
import ItemBarrita from "./componentsChiquitos/itemsBarrita";
import Comentarios from "./componentsChiquitos/comentarios";


export default function ClaseDetalladaProfesor(props) {

  const clase = props.clase
  const user = props.user
  console.log(clase,user)

  return (
    <Box component="main" sx={{ flex: 1, bgcolor: "#eaeff1"}}>
      {/**la imagen de cover estaria bueno que se achicara un poco al bajar, investigar */}
      <Image
        src={clase.imagen}
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
        <Grid item xs={9}>
            <Typography variant="h1" py={3} px={5}>
                {clase.titulo}
            </Typography>
        <Divider></Divider>
        </Grid>
        
        {/* seccion donde se describe el curso */}
        <Grid item xs={8}>
          <Typography variant="body1" py={5} px={5}>
            {clase.descripcion}
          </Typography>
        </Grid>

        {/* seccion donde se describe al maetro */}
        <ContenedorProfesor nombre={user.nombre} linkFoto={user.avatar}
        cantClases={user.clasesPublicadas.length} experiencia={user.experiencia} titulo ={user.titulo}
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
          <ItemBarrita icono={<AccessTimeIcon sx={{ fontSize: "4em" }} />} descripcion={clase.duracion} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>

          <ItemBarrita icono={<CalendarMonthIcon sx={{ fontSize: "4em" }} />} descripcion={clase.frecuencia} />

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <ItemBarrita icono={<PaidIcon sx={{ fontSize: "4em" }} />} descripcion={clase.precio} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>
          
          <ItemBarrita icono={<PersonIcon sx={{ fontSize: "4em" }} />} descripcion={clase.tipo} />

        </Grid>
      </Grid>

{/**donde van a ir los comentarios */}
    <Typography variant="h3" paddingX={'1em'}>
      Comentarios
    </Typography>
    <Comentarios user={user} comentarios={clase.comentarios}></Comentarios>
    </Box>
  );
}
