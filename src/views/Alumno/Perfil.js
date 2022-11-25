import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from '../../components/Navigator';
import Content from '../../components/Content';
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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from '../../Contexts/UserContext';
import {buscarUsuarioPorId} from '../../controller/usuarios.controller'


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

export default function Perfil() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const navigate=useNavigate();
  const [user, setUser]= React.useState(null)

  const currentUser = React.useContext(UserContext)

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
      }
    };
    getUsuario();
  
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event) => {
    /**setValues({
      ...values,
      [event.target.name]: event.target.value
    }); */
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              nombre={user.nombre}
            />
          )}

          <Navigator
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
                        label="Nombre"
                        name="firstName"
                        onChange={handleChange}
                        required
                        value={user.nombre}
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
                        label="Apellido"
                        name="lastName"
                        onChange={handleChange}
                        required
                        value={user.apellido}
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
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        required
                        value={user.email}
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
                        label="Número de Teléfono"
                        name="phone"
                        onChange={handleChange}
                        type="number"
                        value={user.telefono}
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
                        label="Fecha de Nacimiento"
                        name="date"
                        onChange={handleChange}
                        required
                        value={user.fechaNac}
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
                        label="Estudios Cursados"
                        name="state"
                        onChange={handleChange}
                        required
                        value={user.estudios}
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
                  <Button
                    color="primary"
                    variant="contained"
                  >
                    Editar
                  </Button>
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