import * as React from "react";
import { Image } from "mui-image";
import { Box, Divider, Grid, Typography,Button ,List,
  ListItem,
  ListItemText,
  ListItemAvatar,Avatar,TextField,FormGroup, Paper } from "@mui/material";
import { buscarClasePorId,actualizarClase } from '../controller/clases.controller';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from '@mui/icons-material/Star';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContenedorProfesor from './componentsChiquitos/contenedorProfesor';
import ItemBarrita from "./componentsChiquitos/itemsBarrita";
import Swal from "sweetalert2";
import { actualizarUser, buscarUsuarioPorId } from "../controller/usuarios.controller";
import Comentarios from "./componentsChiquitos/comentarios"
import { UserContext } from '../Contexts/UserContext';
import { crearContratacionNueva, updateContratacion } from "../controller/contratacion.controller";
import { crearComentarioNuevo } from "../controller/comentario.controller"
import Modal from '@mui/material/Modal';
import { CleaningServicesRounded, Update } from "@mui/icons-material";
import { text } from "d3";
import { enviarMailProfesor } from "../controller/mail.controller";

export default function ClaseDetallada(props) {

  const paperStyle = {
    padding: "30px 20px",
    width: 500,
    margin: "0px auto"
  };


  const user = props.user
  const clase = props.clase
  const [profe,setProfe]= React.useState( props.clase.Usuarios_id)
  const [comentarios,setComentarios]= React.useState(props.clase.comentarios)
  const [comentarioText, setComentario]= React.useState(
    {
      value:''
    })
  const [obtenida,setObtenida] = React.useState(false)

  const [nuevaContratacion, setContratacion]= React.useState({
    estado:'PENDIENTE',
    clase: clase._id,
    alumno : user._id,  
    profesor: profe._id,
    mensaje: "",
    telefono: "",
    rating: 0, 
    email:"",
    horarioRef: null,
    isValorada: false

  })


  let disabled = nuevaContratacion.mensaje === "" || nuevaContratacion.telefono === "" || nuevaContratacion.email === "" || nuevaContratacion.horarioRef === null ? true : false

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useState(()=>{
      user.contrataciones.forEach(element => {
        if(element.clase._id===clase._id){
          setObtenida(true)
        }
      }); 
      //obtengo al profe populado para despues la contratacion
      const getUser = async function () {
        const respuestaUsuario = await buscarUsuarioPorId(props.clase.Usuarios_id._id)
        console.log("comentario traido ", respuestaUsuario);
        if (respuestaUsuario.rdo === 1) {
          alert("Error al obtener Usuario");
        } else {
          setProfe(respuestaUsuario.user);
          console.log('Usuario traido', respuestaUsuario.user)
        }
      }
      getUser()
    } 
  ,[comentarios])


  const handleChange = (event) => {
    setContratacion({
      ...nuevaContratacion,
      [event.target.name]: event.target.value
    })
  };

  const handleCancel = ()=>{
    setContratacion({
      estado:'PENDIENTE',
      clase: clase._id,
      alumno : user._id,  
      profesor: profe._id,
      rating: 0,
      mensaje: "",
      telefono: "",
      email:"",
      horarioRef: null,
      isValorada: false
    })
    handleClose()
  }

  

  const handleSubmitModal = ()=>{
    const crearContratacion = async function () {
      const respuesta = await crearContratacionNueva(nuevaContratacion)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuesta)
      );
      if (respuesta.rdo === 1) {
        alert("Ocurrio un error al guardar");
      } else {
        user.contrataciones.push({_id:respuesta.dataBack.createContratacion})
        profe.contrataciones.push({_id:respuesta.dataBack.createContratacion})
        const repuestaUsuario = await actualizarUser(user)
        if (repuestaUsuario.rdo === 1) {
          alert("Ocurrio un error al guardar");
        }
        const respuestaProfe = await actualizarUser(profe)
        if (respuestaProfe.rdo === 1) {
          alert("Ocurrio un error al guardar");
        }
        Swal.fire({
          icon: 'success',
          title: 'Se ha contratado la clase',
          showConfirmButton: true,
        })
        const respuestaMail = await enviarMailProfesor(nuevaContratacion,profe,clase)
        if (respuestaMail.rdo === 1) {
          alert("Ocurrio un error al enviar el mail");
        }
      }
    };
    crearContratacion()
    handleClose()
  }
  



  const handleChangeComentario = (e)=>{
    setComentario({...comentarioText,
      value:e.target.value
    })
  }


  const handleComment = ()=>{
    const crearComentario = async function (){
      var comentarioNuevo ={
        clase : clase._id,
        usuario: user._id,
        mensaje : comentarioText.value,
        estado: 'ACEPTADO',
        justificacion:0
      }
      console.log(comentarioNuevo)
      const respuestaComentario = await crearComentarioNuevo(comentarioNuevo) 
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestaComentario)
      );
      if (respuestaComentario.rdo === 1) {
        alert("Ocurrio un error al guardar");
      }else{
      setComentarios(comentarios.concat(comentarioNuevo))
      clase.comentarios.push({
        _id:respuestaComentario.dataBack.createComentario
      })
      console.log("comentarios act",clase.comentarios)
      const agregarComment = async function(){
        console.log('llego a entrar al agragarComment')
        const respuestaActualizacion = await actualizarClase(clase)
        console.log(
          "Console log de respuesta de back ",
          JSON.stringify(respuestaActualizacion)
        );
        if (respuestaActualizacion.rdo === 1) {
          alert("Ocurrio un error al guardar");
      }
    }
    agregarComment()
    
      }
  }
  crearComentario()
    setComentario({
      value:''
    })
  }


  const handleValorar = ()=>{
    let contrat
    user.contrataciones.forEach(element => {
      if(element.clase._id === clase._id){
        contrat = element
      }
    });
    if (contrat){
    const actualizarValor = async function () {
        const { value: text } = await Swal.fire({
          title: '¿Con cuanto valorarias esta clase?',
          icon: 'question',
          input: 'range',
          inputLabel: 'Tu puntaje',
          inputAttributes: {
            min: 0,
            max: 5,
            step: 1
          },
          inputValue: 0
        })
    
    if(text){
      contrat.rating = parseInt(text)
      contrat.isValorada = true
      const update = async function () {
        const respuesta = await updateContratacion(contrat)
        console.log(
          "Console log de respuesta de back ",
          JSON.stringify(respuesta)
        );
        if (respuesta.rdo === 1) {
          alert("Ocurrio un error al guardar");
        }  
      }
      update()
      }
    }
  actualizarValor()
  }
}

  return (
    <>
      <Modal style={paperStyle} open={open}
        onClose={handleClose}>
        <Paper style={paperStyle}>
        <Grid>
          <Grid align="center">
            <Typography variant="h5">Comprar Clase</Typography>
            <Typography variant="body1">
              Por favor rellena el formulario de contacto
            </Typography>
          </Grid>
          <FormGroup>
            <TextField
            margin="dense"
              label="Email"
              fullWidth
              name="email"
              placeholder="Ingresa tu mail de contacto"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
            margin="dense"
              label="Numero de telefono"
              fullWidth
              name="telefono"
              placeholder="Ingresa tu numero de contacto"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
            margin="dense"
              label="Horario de contacto"
              name="horarioRef"
              type="number"
              fullWidth
              placeholder="Tu horario de contacto (24hs)"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              label="Mensaje"
              fullWidth
              name="mensaje"
              placeholder="Deja un mensaje para profesor contandole porque te gustaria asistir al curso"
              margin="dense"
              multiline
              rows="5"
              variant="outlined"
              onChange={handleChange}
            />
            <Button
              sx={{ margin: "1vh" }}
              color="success"
              variant="contained"
              disabled={disabled}
              onClick={handleSubmitModal}
            >
              Guardar
            </Button>
            <Button  sx={{ margin: "1vh" }} color="error" variant="contained" onClick={handleCancel}>
              Cancelar
            </Button>
          </FormGroup>
        </Grid>
        </Paper>
      </Modal>
      <Box component="main" sx={{ flex: 1, bgcolor: "#eaeff1" }}>
        {/**la imagen de cover estaria bueno que se achicara un poco al bajar, investigar */}
        <Image
          src={clase.imagen}
          fit="cover"
          height="150px"
          style={{
            objectPosition: "50% 25%",
            minHeight: "150px",
            top: 0,
            height: "150px",
            width: "100%",
            zIndex: "1",
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
          <Grid
            item
            xs={1}
            container
            justifyContent={"space-between"}
            alignContent={"center"}
            sx={{ paddingRight: "1vh", margin: "0" }}
          >
            <Grid item alignSelf={"center"}>
              {obtenida ? (
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={()=>{
                    handleValorar()
                  }}
                  startIcon={<StarIcon />}
                >
                  Valorar
                </Button>
              ) : (
                <Button
                  onClick={handleOpen}
                  size="large"
                  variant="contained"
                  color="success"
                  startIcon={<ShoppingCartIcon />}
                >
                  Comprar
                </Button>
              )}
            </Grid>
          </Grid>
          {/* seccion donde se describe el curso */}
          <Grid item xs={8}>
            <Typography variant="body1" py={5} px={5}>
              {clase.descripcion}
            </Typography>
          </Grid>

          {
            /* seccion donde se describe al maetro */
            profe === null ? (
              <Typography>Cargando</Typography>
            ) : (
              <ContenedorProfesor
                nombre={profe.nombre}
                linkFoto={profe.avatar}
                cantClases={profe.clasesPublicadas.length}
                experiencia={profe.experiencia}
                titulo={profe.titulo}
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
            sx={{
              bgcolor: "#e2e3e3",
              boxShadow: " inset 0 0px 8px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            <ItemBarrita
              icono={<AccessTimeIcon sx={{ fontSize: "3.5em" }} />}
              descripcion={clase.duracion + " hs"}
            />

            <Divider orientation="vertical" variant="middle" flexItem></Divider>

            <ItemBarrita
              icono={<CalendarMonthIcon sx={{ fontSize: "3.5em" }} />}
              descripcion={clase.frecuencia}
            />

            <Divider orientation="vertical" variant="middle" flexItem></Divider>

            <ItemBarrita
              icono={<PaidIcon sx={{ fontSize: "3.5em" }} />}
              descripcion={clase.precio + " USD"}
            />

            <Divider orientation="vertical" variant="middle" flexItem></Divider>

            <ItemBarrita
              icono={<PersonIcon sx={{ fontSize: "3.5em" }} />}
              descripcion={clase.tipo}
            />
          </Grid>
        </Grid>

        {/**donde van a ir los comentarios */}
        <Typography variant="h3" paddingX={"1em"}>
          Comentarios
        </Typography>
        <Comentarios user={user} comentarios={comentarios}></Comentarios>
        <Grid container paddingX={"4em"}>
          <List sx={{ width: "100%" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ paddingRight: "1ex" }}>
                <Avatar
                  src={user.avatar}
                  sx={{
                    width: 70,
                    height: 70,
                    boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.15)",
                  }}
                ></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <TextField
                    fullWidth
                    value={comentarioText.value}
                    name="comentario"
                    label="Escribe tu comentario"
                    variant="standard"
                    onChange={handleChangeComentario}
                    sx={{ margin: "1ex"}}
                  ></TextField>
                }
                secondary={
                  <React.Fragment>
                    <Button variant="outlined" onClick={handleComment}>Comentar</Button>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Box>
    </>
  );
}
