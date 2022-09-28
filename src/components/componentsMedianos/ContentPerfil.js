import {
  Card,
  CardContent,
  Divider,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import usuarios from "../../data/usuarios";
import SimpleCard from "../componentsChiquitos/cardSimple";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function ContentPerfil(props) {
  const persona = usuarios.find((user) => user.id === 1);
  return (
    /**la idea es simular un cv pero sin que sea un cv XD**/
    <Grid container height={"100%"}>
      <Grid
        container
        item
        xs={3}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{
          bgcolor: "#deafff",
          boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
          marginLeft: "30px",
          marginRight: "30px",
          borderRadius: "30px",
        }}
      >
        <Grid item sx={{ paddingTop: "30px" }}>
          <Avatar
            src={persona.avatar}
            sx={{
              height: "250px",
              width: "250px",
              boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
            }}
          />
        </Grid>
        <Grid item>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <ListItemAvatar sx={{margin:"15px"}}>
                <Avatar sx={{ width: '80px', height: '80px', bgcolor:'#6f50f6' }}>
                  <ImageIcon sx={{ fontSize: "50px" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="h5">Nombre</Typography>} secondary={<Typography variant="h6">Juana Carla Bianchi </Typography>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar sx={{margin:"15px"}}>
                <Avatar sx={{ width: '80px', height: '80px', bgcolor:'#6f50f6' }}>
                  <WorkIcon sx={{ fontSize: "50px" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="h5">Trabajo</Typography>} secondary={<Typography variant="h6">Profesor Literatura</Typography>} />
            </ListItem>
            <ListItem>
              <ListItemAvatar sx={{margin:"15px"}}>
                <Avatar sx={{ width: '80px', height: '80px', bgcolor:'#6f50f6' }}>
                  <BeachAccessIcon sx={{ fontSize: "50px" }}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="h5">Contacto</Typography>} secondary={<Typography variant="h6">jcbianchi@mail.com</Typography>} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={8.5}
        flexDirection="column"
        alignContent="stretch"
        justifyContent="space-around"
      >
        <Divider textAlign="left">
          <Typography variant="h3">Terminados</Typography>
        </Divider>
        <Grid container columnSpacing={4}>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
        </Grid>
        <Divider textAlign="left">
          <Typography variant="h3">En Proceso</Typography>
        </Divider>
        <Grid container columnSpacing={4}>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
          <Grid item xs={3}>
            <SimpleCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
