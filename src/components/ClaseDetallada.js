import { Image } from "mui-image";
import {useLoaderData } from "react-router-dom";
import { Box, Divider, Rating, Grid, Typography, Avatar, List, ListItem,ListItemText, ListItemAvatar,Button  } from "@mui/material";
import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ClaseDetallada() {
  return (
    <Box component="main" sx={{ flex: 1, bgcolor: "#eaeff1"}}>
      {/**la imagen de cover estaria bueno que se achicara un poco al bajar, investigar */}
      <Image
        src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2018/07/aprender-programar-gratis.png"
        fit="cover"
        height="250px"
        style={{
          objectPosition: "50% 25%",
          minHeight:"150px",
          top: 0,
          height: "250px",
          width: "100%",
          zIndex: "1"
        }}
      />
      {/**titulo de la clase  */}
      <Grid container>
        <Grid item xs={8}>
            <Typography variant="h1" py={3} px={5}>
                Titulo de la Clase{" "}
            </Typography>
        <Divider></Divider>
        </Grid>
        <Grid xs={4} container justifyContent={"end"}
        alignContent={"center"} sx={{paddingRight:"10em"}}>
            <Button size="large" variant="contained" startIcon={<ShoppingCartIcon/>} color="success" >Comprar</Button>
        </Grid>
        
        {/* seccion donde se describe el curso */}
        <Grid item xs={8}>
          <Typography variant="body1" py={5} px={5}>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. {" "}
          </Typography>
        </Grid>

        {/* seccion donde se describe al maetro */}
        <Grid
          container
          justifyContent={"center"}
          alignItems={"top"}
          paddingTop={5}
          xs={4}
          sx={{ bgcolor: "#e2e3e3",boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)" }}
        >
          <Grid container>
            <Grid container xs={5} justifyContent={"center"}>
              <Avatar
                alt="Foto Perfil"
                src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=240x"
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
                Juan Carlos Gomez
              </Typography>
              <Typography>Lic. en Artes Artisticas</Typography>
              <Typography>999 Clases</Typography>
              <Typography>14000 Alumnos</Typography>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </Grid>
          </Grid>
        </Grid>

        {/*caracteristicas de la clase la barrita con duracion,frcuencia,etc,etc */}
        <Grid
          container
          padding={5}
          height={"10em"}
          marginY={"5em"}
          direction="row"
          alignItems="center"
          sx={{ bgcolor: "#e2e3e3",boxShadow: " inset 0 0px 8px 10px rgba(0, 0, 0, 0.15)"}}
        >
          <Grid
            container
            xs={3}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AccessTimeIcon sx={{ fontSize: "4em" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "2em"}}
              px={5}
              align={"center"}
            >
              50hs
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem ></Divider>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={3}
          >
            <CalendarMonthIcon sx={{ fontSize: "4em" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.7em" }}
              px={3}
              align={"center"}
            >
              Clases Semanales
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem></Divider>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={3}
          >
            <PaidIcon sx={{ fontSize: "4em" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.7em" }}
              px={3}
              align={"center"}
            >
              999,99
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem ></Divider>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={2.9}
          >
            <PersonIcon sx={{ fontSize: "4em" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1.7em" }}
              px={3}
              align={"center"}
            >
              Clase Individual
            </Typography>
          </Grid>
        </Grid>
      </Grid>

{/**donde van a ir los comentarios */}
    <Typography variant="h3" paddingX={'1em'}>
      Comentarios
    </Typography>
    <Grid container paddingX={'4em'} paddingY={"3em"}>
      <List sx={{width: '100%'}}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingRight:"1ex"}}>
            <Avatar
            sx={{
              width: 70,
              height: 70,
              boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
            }}></Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={
            <Typography 
              sx={{fontWeight:"bold"}}>
              Juan Roman Riquelme
            </Typography>}
            secondary={
            <React.Fragment>
              <Typography 
                variant="body2"
                color="black"
                padding={"1ex"}>
                Aguante Bocaaaaa!!!!!!
            </Typography>
            <ThumbUpIcon/> 42
          </React.Fragment>
        }
      />
        </ListItem>
        <Divider variant="inset"></Divider>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingRight:"1ex"}}>
            <Avatar
            sx={{
              width: 70,
              height: 70,
              boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
            }}></Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={
            <Typography 
              sx={{fontWeight:"bold"}}>
              Juan Roman Riquelme
            </Typography>}
            secondary={
            <React.Fragment>
              <Typography 
                variant="body2"
                color="black"
                padding={"1ex"}>
                Aguante Bocaaaaa!!!!!!
            </Typography>
            <ThumbUpIcon/> 42
          </React.Fragment>
        }
      />
        </ListItem>
        <Divider variant="inset"></Divider>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingRight:"1ex"}}>
            <Avatar
            sx={{
              width: 70,
              height: 70,
              boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
            }}></Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={
            <Typography 
              sx={{fontWeight:"bold"}}>
              Juan Roman Riquelme
            </Typography>}
            secondary={
            <React.Fragment>
              <Typography 
                variant="body2"
                color="black"
                padding={"1ex"}>
                Aguante Bocaaaaa!!!!!!
            </Typography>
            <ThumbUpIcon/> 42
          </React.Fragment>
        }
      />
        </ListItem>
        <Divider variant="inset"></Divider>
        <ListItem alignItems="flex-start">
          <ListItemAvatar sx={{ paddingRight:"1ex"}}>
            <Avatar
            sx={{
              width: 70,
              height: 70,
              boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
            }}></Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={
            <Typography 
              sx={{fontWeight:"bold"}}>
              Juan Roman Riquelme
            </Typography>}
            secondary={
            <React.Fragment>
              <Typography 
                variant="body2"
                color="black"
                padding={"1ex"}>
                Aguante Bocaaaaa!!!!!!
            </Typography>
            <ThumbUpIcon/> 42
          </React.Fragment>
        }
      />
        </ListItem>
      </List>
      </Grid>
    </Box>
  );
}
