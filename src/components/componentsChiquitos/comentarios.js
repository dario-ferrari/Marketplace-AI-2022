import * as React from "react";
import {
  Divider,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  TextField,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import inscripciones from "../../data/inscripciones.json";
import usuarios from "../../data/usuarios";
import { buscarComentarioPorId, } from "../../controller/comentario.controller";
import { buscarUsuarioPorId } from "../../controller/usuarios.controller";

export default function Comentarios(props) {

  const comentarios = props.comentarios
  const user = props.user
  console.log(user)

  const handleBorrarComentario = (comentario)=>{
    comentario.estado = "ELIMINADO"
    console.log(comentario)
  }
  return (
    <>
    {(comentarios.length=== 0) ? (
      <>
      <Grid px={10}> 
      <Typography variant="h5">Nadie a comentado la clase</Typography>
      </Grid>
      </>
    ):(
    
    <Grid container paddingX={"4em"}>
      <List sx={{ width: "100%" }}>
      
        {comentarios.map((x) => (
        <React.Fragment>
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ paddingRight: "1ex" }}>
              <Avatar src={x.usuario.avatar !== undefined ? x.usuario.avatar : user.avatar}
                sx={{
                  width: 70,
                  height: 70,
                  boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
                }}
              ></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontWeight: "bold"}}>
                  {x.usuario.nombre !== undefined ? x.usuario.nombre : user.nombre} {x.usuario.apellido !== undefined ? x.usuario.apellido : user.apellido}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body1" color="black" padding={"1ex"}>
                    {x.mensaje}
                  </Typography>
                </React.Fragment>
              }
            />
            {user.rol === "PROFESOR" ? (
            <React.Fragment>
              <Button variant="outlined" color="error" onClick={handleBorrarComentario(x)}>Borrar comentario</Button>
            </React.Fragment>):(
            null
            )}
            
          </ListItem>
          <Divider variant="inset"></Divider>
        </React.Fragment>
        ))
        }   
        </List>
    </Grid>
    )}
    </>
    
    )
    
}
