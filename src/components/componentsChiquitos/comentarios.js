import * as React from "react";
import {
  Box,
  Divider,
  Rating,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import clasesInscriptas from "../../data/clasesInscriptas.json";

export default function Comentarios(props) {
  return (
    <Grid container paddingX={"4em"} paddingY={"3em"}>
      <List sx={{ width: "100%" }}>
        {clasesInscriptas.clasesI.find( clases=>clases.id===Number(props.idClase)).comentarios.map(({ nombre, descripcion, likes, avatar }) => (
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
      </List>
    </Grid>
  );
}
