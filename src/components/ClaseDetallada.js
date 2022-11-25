import * as React from "react";
import { Image } from "mui-image";
import { Box, Divider, Grid, Typography,Button ,List,
  ListItem,
  ListItemText,
  ListItemAvatar,Avatar,TextField } from "@mui/material";
import { buscarClasePorId } from '../controller/clases.controller';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from '@mui/icons-material/Star';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContenedorProfesor from './componentsChiquitos/contenedorProfesor';
import ItemBarrita from "./componentsChiquitos/itemsBarrita";
import Swal from "sweetalert2";
import { buscarUsuarioPorId } from "../controller/usuarios.controller";
import Comentarios from "./componentsChiquitos/comentarios"
import { UserContext } from '../Contexts/UserContext';
import { crearContratacionNueva } from "../controller/contratacion.controller";import Modal from '@mui/material/Modal';

export default function ClaseDetallada(props) {
  
  const user = props.user
  const clase = props.clase
  const profe = props.profe

  const [open, setOpen] = React.useState(false);

  console.log(profe,clase,user)
  const [obtenida,setObtenida] = React.useState(false)

  const [nuevaContratacion, setContratacion]= React.useState({
    estado:'PENDIENTE',
    clase: clase._id,
    alumno : user._id,  
    profesor: profe._id,
    mensaje: "",
    telefono: '',
    email:'',
    horarioRef:0,
    isValorada: false

  })

  React.useState(()=>{
      user.contrataciones.forEach(element => {
        if(element.clase._id===clase._id){
          setObtenida(true)
        }
      });
      //obtengo la clase que me meti
      
    }
  ,[])
  

  const comprarClase = ()=>{
    const {values : formulario } = Swal.fire({
    title: 'Multiple inputs',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Telefono">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Email">' +
      '<input type="number"id="swal-input3" class="swal2-input" placeholder="Horario de Contacto (24hs)">' +
      '<textarea id="swal-textarea" class="swal2-input" placeholder="Mensaje">',
    focusConfirm: false,
    preConfirm: () => {
        setContratacion({...nuevaContratacion, 
          telefono : document.getElementById('swal-input1').value})
        setContratacion({...nuevaContratacion, 
          email : document.getElementById('swal-input2').value})
        setContratacion({...nuevaContratacion, 
          horarioRef : document.getElementById('swal-input3').value})
        setContratacion({...nuevaContratacion, 
          mensaje : document.getElementById('swal-textarea').value})
        console.log(nuevaContratacion)
    }
  })
}


<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>



  return (
    <>
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
        <Grid item xs={10}>
            <Typography variant="h1" py={3} px={5}>
                {clase.titulo}
            </Typography>
        <Divider></Divider>
        </Grid>
        <Grid item xs={1} container justifyContent={"space-between"}
        alignContent={"center"} sx={{paddingRight:"1vh", margin:"0"}}>
          <Grid item alignSelf={"center"}>
            {(obtenida)?(
              <Button size="large" variant="contained" color="primary" startIcon={<StarIcon/>}>Valorar</Button>
            ):(
              <Button onClick={comprarClase} size="large" variant="contained" color="success" startIcon={<ShoppingCartIcon/>}  >Comprar</Button> )
            }
            </Grid>
        </Grid>
        
        {/* seccion donde se describe el curso */}
        <Grid item xs={8}>
          <Typography variant="body1" py={5} px={5}>
            {clase.descripcion}
          </Typography>
        </Grid>

        {/* seccion donde se describe al maetro */
        (profe === null) ? (<Typography>Cargando</Typography>
        ):(
        <ContenedorProfesor nombre={profe.nombre} linkFoto={profe.avatar}
        cantClases={profe.clasesPublicadas.length} experiencia={profe.experiencia} titulo ={profe.titulo}
        />
        )
        }
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
          <ItemBarrita icono={<AccessTimeIcon sx={{ fontSize: "3.5em" }} />} descripcion={clase.duracion + ' hs'} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>

          <ItemBarrita icono={<CalendarMonthIcon sx={{ fontSize: "3.5em" }} />} descripcion={clase.frecuencia} />

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <ItemBarrita icono={<PaidIcon sx={{ fontSize: "3.5em" }} />} descripcion= {clase.precio + ' USD'} />

          <Divider orientation="vertical" variant="middle" flexItem ></Divider>
          
          <ItemBarrita icono={<PersonIcon sx={{ fontSize: "3.5em" }} />} descripcion={clase.tipo} />

        </Grid>
      </Grid>

{/**donde van a ir los comentarios */}
    <Typography variant="h3" paddingX={'1em'}>
      Comentarios
    </Typography>
    <Comentarios comentarios={clase.comentarios}></Comentarios>
  <Grid container paddingX={"4em"} paddingY={"3em"}>
      <List sx={{ width: "100%" }}>
        <React.Fragment></React.Fragment>
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
    </Box>   
  </>
  )
}
