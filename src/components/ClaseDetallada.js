import * as React from "react";
import { Image } from "mui-image";
import { Box, Divider, Grid, Typography,Button  } from "@mui/material";
import { buscarClasePorId } from '../controller/clases.controller';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContenedorProfesor from './componentsChiquitos/contenedorProfesor';
import ItemBarrita from "./componentsChiquitos/itemsBarrita";
import Swal from "sweetalert2";
import { buscarUsuarioPorId } from "../controller/usuarios.controller";
import Comentarios from "./componentsChiquitos/comentarios"

export default function ClaseDetallada(props) {
  
  const [clase, setClase]= React.useState(null); 
  const [profe, setProfe]= React.useState(null)

  React.useState(()=>{
    const getClase = async function () {
      console.log("clase locuaras jajað",props.id)
      const respuestaClase = await buscarClasePorId(props.id);
      console.log("Lpara saber que clase traje ", respuestaClase);
      if (respuestaClase.rdo === 1) {
        alert("Error al obtener Clase");
      } else {
        setClase(respuestaClase.clase);
        console.log("Clase obtenida: ", respuestaClase.clase);
        const getProfe = async function (){
          console.log("profe a buscar",respuestaClase.clase.Usuarios_id)
            const respuestaUsuario = await buscarUsuarioPorId(respuestaClase.clase.Usuarios_id);
            console.log("Usuario conseguido ", respuestaUsuario);
            if (respuestaUsuario.rdo === 1) {
           alert("Error al obtener usuario");
          } else {
            setProfe(respuestaUsuario.user);
            console.log("Usuario obtenido: ", respuestaUsuario.user);
            }
      }
      getProfe()
    };}
    getClase()
    console.log(clase)
  },[])


  const comprarClase = ()=>{
    const { data: formValues } = Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Telefono">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Email">' +
        '<input type="number"id="swal-input3" class="swal2-input" placeholder="Horario de Contacto (24hs)">' +
        '<textarea id="swal-textarea" class="swal2-input" placeholder="Mensaje">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          telefono: document.getElementById('swal-input1').value,
          mail:  document.getElementById('swal-input2').value,
          horario:document.getElementById('swal-input3').value,
          mensaje:document.getElementById('swal-textarea').value
        }
      }
    })
    
    if (formValues) {
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
      })
    }
    }


  return (
    <> 
      {(profe===null) ? (
      <Typography>CARGANDO</Typography>

    ):(
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
            <Button onClick={comprarClase} size="large" variant="contained" color="success" startIcon={<ShoppingCartIcon/>}  >Comprar</Button> 
            </Grid>
            
        </Grid>
        
        {/* seccion donde se describe el curso */}
        <Grid item xs={8}>
          <Typography variant="body1" py={5} px={5}>
            {clase.descripcion}
          </Typography>
        </Grid>

        {/* seccion donde se describe al maetro */}
        <ContenedorProfesor nombre={profe.nombre} linkFoto={profe.avatar}
        cantClases={profe.clasesPublicadas.length} experiencia={profe.experiencia} titulo ={profe.titulo}
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
    {clase.comentarios.map((x)=>(
    <Comentarios idComentario={x.comentarios_id}></Comentarios>
    ))}
    </Box>  
      )
    }
  </>
  )
}
