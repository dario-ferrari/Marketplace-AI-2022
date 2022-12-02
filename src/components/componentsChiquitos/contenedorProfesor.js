import * as React from "react";
import {Rating, Grid, Typography, Avatar,} from "@mui/material";


export default function ContenedorProfesor(props){
    return(
        <Grid
          container
          justifyContent={"center"}
          alignItems={"top"}
          padding={5}
          xs={4}
          sx={{ bgcolor: "#e2e3e3",boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)" }}
        >
          <Grid container>
            <Grid container xs={5} justifyContent={"center"}>
              <Avatar
                alt="Foto Perfil"
                src={props.linkFoto}
                sx={{
                  width: 150,
                  height: 150,
                  boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
                }}
              />
            </Grid>
            <Grid item xs={7} direction={"column"}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5em",
                }}
              >
                {props.nombre}
              </Typography>
              <Typography>{props.titulo}</Typography>
              <Typography>{props.cantClases} Clases</Typography>
              <Typography>{props.experiencia}</Typography>
            </Grid>
          </Grid>
        </Grid>

    )
}