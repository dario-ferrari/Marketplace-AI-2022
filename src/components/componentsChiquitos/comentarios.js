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
import { actualizarComentario, buscarComentarioPorId, } from "../../controller/comentario.controller";
import { buscarUsuarioPorId } from "../../controller/usuarios.controller";
import Swal from "sweetalert2";

export default function Comentarios(props) {

  const comentarios = props.comentarios
  const user = props.user
  console.log(user)


  const pedirText = async function(comentario){ 
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Justificacion por eliminar el mensaje',
    inputPlaceholder: 'Escribe tu mensaje aqui...',
    inputAttributes: {
      'aria-label': 'Escribe tu mensaje aqui'
    },
    showCancelButton: true
  })
  if (text){
    comentario.justificacion = text
    handleBorrarComentario(comentario)
  }
  
  console.log(comentario)
}

  const handleBorrarComentario = (comentario)=>{
    comentario.estado = "ELIMINADO"
    const updateComentario = async function () {
      const respuesta = await actualizarComentario(comentario)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuesta)
      );
      if (respuesta.rdo === 1) {
        alert("Ocurrio un error al guardar");
      } else {
        Swal.fire({
          icon: 'success',
          title: 'El mensaje se ha eliminado',
          showConfirmButton: false,
        })
      }
    };
    updateComentario();
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
          {x.estado !== "ELIMINADO" ? (
            <>
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
            <>
              <Button variant="outlined" color="error" onClick={() => pedirText(x)}>
                Borrar comentario</Button>
            </>
            ):(
            null
            )}
            
          </ListItem>
          <Divider variant="inset"></Divider>
          </>
          ):(
            null
            )}
          
        </React.Fragment>
        ))
        }   
        </List>
    </Grid>
    )}
    </>
    
    )
    
}
