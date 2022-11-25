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
import { buscarComentarioPorId } from "../../controller/comentario.controller";

export default function Comentarios(props) {
  

  const [comentario,setComentario]= React.useState(null)

  React.useEffect(()=>{
    const getComment = async function(){
      const respuestaComentario = await buscarComentarioPorId(props.idComentario)
      console.log("comentario traido ", respuestaComentario);
      if (respuestaComentario.rdo === 1) {
        alert("Error al obtener Comment");
      } else {
        setComentario(respuestaComentario.comentario)
        console.log('comentario traido', respuestaComentario.comentario)
    }
  }
  getComment()
  },[])

  return (
    <Grid container paddingX={"4em"} paddingY={"3em"}>
      <List sx={{ width: "100%" }}>
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: "1ex" }}>
                    <Avatar src={avatar}
                        sx={{
                        width: 70,
                        height: 70,
                        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
                        }}
                    ></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                            {nombre}
                            </Typography>
                            }
                    secondary={
                    <React.Fragment>
                            <Typography variant="body2" color="black" padding={"1ex"}>
                                {descripcion}
                            </Typography>
                            <ThumbUpIcon /> {likes}
                    </React.Fragment>
                            }
                />
            </ListItem>
            <Divider variant="inset"></Divider>
        </React.Fragment>
        ))}
        <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: "1ex" }}>
                    <Avatar src={user.avatar}
                        sx={{
                        width: 70,
                        height: 70,
                        boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
                        }}
                    ></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                      <TextField fullWidth id="standard-basic" label="Escribe tu comentario" variant="standard" sx={{ margin:"1ex"}}></TextField>
                            }
                    secondary={
                    <React.Fragment>
                            <Button variant="outlined">Comentar</Button>
                    </React.Fragment>
                            }
                />
          </ListItem>
        </List>
    </Grid>
  );
}
