import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavigatorProfesor from '../../components/NavigatorProfesor';


import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
  TextField
} from '@mui/material';
import { useEffect } from "react";
import { UserContext } from '../../Contexts/UserContext';
import {buscarUsuarioPorId, actualizarUser} from '../../controller/usuarios.controller'
import Swal from 'sweetalert2';


let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};
 
const drawerWidth = 256;

export default function PerfilProfesor() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const currentUser = React.useContext(UserContext)

  const [user, setUser]= React.useState(null)

  const [edit,setEdit]= React.useState(true)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [nuevaData,setNuevaData] = React.useState({
    _id:"",
    email: "",
    nombre: "",
    apellido: "",
    telefono: "",
    fechaNac: "",
    avatar: "",
    titulo: "",
  })


  const handleOnClick = ()=>{
    console.log(nuevaData)
    setEdit(!edit)
    console.log(nuevaData)
  }

  const handleChange = (event) => {
    setNuevaData({
      ...nuevaData,
      [event.target.name]: event.target.value
    })
  };

  useEffect(() => {
    const getUsuario = async function () {
      const respuestaUsuario = await buscarUsuarioPorId(currentUser)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestaUsuario)
      );
      if (respuestaUsuario.rdo === 1) {
        alert("No existe el usuario");
      } else {
        console.log("este es el usuario recuperado",respuestaUsuario.user);
        setUser(respuestaUsuario.user)
        setNuevaData({
          _id: respuestaUsuario.user._id,
          email: respuestaUsuario.user.email,
          nombre: respuestaUsuario.user.nombre,
          apellido: respuestaUsuario.user.apellido,
          telefono: respuestaUsuario.user.telefono,
          experiencia: respuestaUsuario.user.experiencia,
          avatar: respuestaUsuario.user.avatar,
          titulo: respuestaUsuario.user.titulo,
        })
      }
    };
    getUsuario();
  
  }, [currentUser]);


  const handleSubmit = ()=>{
    const updateUser = async function () {
      const respuesta = await actualizarUser(nuevaData,currentUser)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuesta)
      );
      if (respuesta.rdo === 1) {
        alert("Ocurrio un error al guardar");
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
        })
      }
    };
    updateUser();
    setEdit(!edit)
  }

  const handleCancel = ()=>{
    setNuevaData({
      _id: user._id,
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido,
      telefono: user.telefono,
      fechaNac: user.fechaNac,
      avatar: user.avatar,
      titulo: user.estudios,
    })
    setEdit(!edit)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <NavigatorProfesor
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <NavigatorProfesor
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        {(user === null) ? (
          <Typography>CARGANDO</Typography>

        ):(
        <Grid container flexDirection={'column'} alignItems={'center'} >
          <Grid container item xs={4} alignItems={'center'} justifyContent={'center'}>
            <Grid item>
            <Card sx={{marginRight: '10px', boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
            <CardContent>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Avatar
                    src={user.avatar}
                    sx={{
                      height: 64,
                      mb: 2,
                      width: 64
                    }}
                  />
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                  >
                    {user.nombre} {user.apellido}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Buenos Aires, Argentina
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    GMT-2
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  color="primary"
                  fullWidth
                  variant="text"
                >
                  Cambiar Imagen
                </Button>
              </CardActions>
            </Card>
            </Grid>
          </Grid>
          <Grid container item xs={8}>
            <Grid item>
            <form
              autoComplete="off"
              noValidate
            >
              <Card sx={{boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}>
                <CardHeader
                  title="Datos Personales"
                />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Nombre"
                        name="nombre"
                        onChange={handleChange}
                        required
                        value={nuevaData.nombre}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Apellido"
                        name="apellido"
                        onChange={handleChange}
                        required
                        value={nuevaData.apellido}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        required
                        value={nuevaData.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Número de Teléfono"
                        name="telefono"
                        onChange={handleChange}
                        value={nuevaData.telefono}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Titulo"
                        name="titulo"
                        onChange={handleChange}
                        required
                        value={nuevaData.titulo}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        disabled={edit}
                        label="Experiencia"
                        name="experiencia"
                        onChange={handleChange}
                        value={user.experiencia}
                        variant="outlined"
                      >
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                  }}
                >
                {
                    (edit === true) ? (
                      <Button
                    color="primary"
                    variant="contained"
                    onClick={handleOnClick}
                  >
                    Editar
                  </Button>
            
                    ):(
                      <>
                    <Button
                    sx={{marginRight:"2vh"}}
                    color="success"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Guardar
                  </Button>
                  <Button
                  color="error"
                  variant="contained"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
                </>
                    )
                  }
                </Box>
              </Card>
            </form>
            </Grid>
          </Grid>
        </Grid>
      )}
      </Box>
    </ThemeProvider>
  );
}