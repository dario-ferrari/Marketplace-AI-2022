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
import { UserContext } from '../../Contexts/UserContext';
import { buscarUsuarioPorId } from "../../controller/usuarios.controller";

export default function Comentarios(props) {

  const comentarios = props.comentarios

  return (
    <>
    {(comentarios.length=== 0) ? (
      <>
      </>
    ):(
    
    <Grid container paddingX={"4em"} paddingY={"3em"}>
      <List sx={{ width: "100%" }}>
      
        {comentarios.map((x) => (
        <React.Fragment>
          <ListItem alignItems="flex-start">
            <ListItemAvatar sx={{ paddingRight: "1ex" }}>
              <Avatar src={x.avatar}
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
                  { }
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body2" color="black" padding={"1ex"}>
                    {x.mensaje}
                  </Typography>
                  <ThumbUpIcon /> {x.likes}
                </React.Fragment>
              }
            />
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
