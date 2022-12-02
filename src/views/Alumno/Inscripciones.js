import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from '../../components/Navigator';
import Content from '../../components/Content';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import CardStyled from "../../components/CardStyled";
import clasesInscriptas from "../../data/inscripciones.json";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {listadoClases,buscarClasePorFiltro} from '../../controller/clases.controller'
import { UserContext } from '../../Contexts/UserContext';



/* {/**function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}**/

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

export default function Inscripciones() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const currentUser = React.useContext(UserContext)
  const [clases, setClases]= React.useState([]);

  const [cargando,setCargando] = React.useState(false)

  const [filtro, setFiltro] = React.useState({
    titulo: {value: ""},
    unica: {value: false,
        query:{frecuencia: "Unica"}},
    semanal: {value: false,
        query:{frecuencia: "Semanal"}},
    mensual: {value: false,
        query:{frecuencia: "mensual"}},
    individual: {value: false,
        query:{tipo: "Individual"}},
    grupal: {value: false,
        query:{tipo: "Grupal"}},
    uno : {value: false,
        query:{rating : 1}},
    dos : {value: false,
        query:{rating : 2}},
    tres : {value: false,
        query:{rating : 3}},
    cuatro : {value: false,
        query:{rating : 4}},
    cinco : {value: false,
        query:{rating : 5}}
  });


  React.useEffect(()=>{
    /* console.log('ÉSTE ES EL CURRENT USER', currentUser)
    const getClases = async function () {
      const respuestaClases = await listadoClases()
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestaClases)
      );
      if (respuestaClases.rdo === 1) {
        alert("No existe el doctor");
      } else {
        setClases(respuestaClases.clase);
      }
    };
    getClases(); */
    const filtrarClases = async function () {
      console.log('llamada al back con filtro:',filtro)
      const respuestasFiltradas = await buscarClasePorFiltro(filtro)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestasFiltradas)
      );
      if (respuestasFiltradas.rdo === 1) {
        alert("No existe el doctor");
      } else {
        setClases(respuestasFiltradas.clase);
      }
    };
    filtrarClases();
  }, [filtro])
  
  
  


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const llamadaBack = ()=>{
    const filtrarClases = async function () {
      console.log('llamada al back con filtro:',filtro)
      const respuestasFiltradas = await buscarClasePorFiltro(filtro)
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestasFiltradas)
      );
      if (respuestasFiltradas.rdo === 1) {
        alert("No existe el doctor");
      } else {
        setClases(respuestasFiltradas.clase);
      }
    };
    filtrarClases();
  }

  




  

  const handleChange = (event) => {
    let variable
    if(event.target.name === "titulo"){
      variable = filtro[event.target.name]
      setFiltro({...filtro,
        [event.target.name] : {...variable, value : event.target.value }
      })
      console.log("este es el texto buscado", filtro.titulo)
    }else{
      variable = filtro[event.target.name]
      setFiltro({...filtro,
        [event.target.name] : {...variable, value:!variable.value}
      })
      llamadaBack()
    }
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
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content/>
{/**BARRA DE BÚSQUEDA DE CLASES*/}
            <Grid container spacing={{xs: 2,  md:3}} rowSpacing={4}>
              <Grid item xs={12}>
            <Paper sx={{ maxWidth: 936, margin: "auto",  marginBottom: 2, overflow: 'hidden' }}>
              <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center" padding={5}>
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      name="titulo"
                      placeholder="Buscar por nombre de la materia"
                      value={filtro.titulo.value}
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Buscar
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
              </AppBar>
            </Paper>
            </Grid>
    
{/**CheckBox para filtrar**/}

            <Grid container>
            <Paper sx={{ maxWidth: 936, margin: "auto",  marginBottom: 2, overflow: 'hidden' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Filtrar por:</        FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.unica.value} onChange={handleChange} name="unica" />
                              }
                              label="Unica"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.semanal.value} onChange={handleChange} name="semanal" />
                              }
                              label="Semanal"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.mensual.value} onChange={handleChange} name="mensual" />
                              }
                              label="Mensual"
                            />
                          </FormGroup>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend"> Tipo de Clase:</        FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.individual.value} onChange={handleChange} name="individual" />
                              }
                              label="Individual"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.grupal.value} onChange={handleChange} name="grupal" />
                              }
                              label="Grupal"
                            />
                          </FormGroup>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Calificacion:</        FormLabel>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.uno.value} onChange={handleChange} name="uno" />
                              }
                              label="1 Estrella"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.dos.value} onChange={handleChange} name="dos" />
                              }
                              label="2 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.tres.value} onChange={handleChange} name="tres" />
                              }
                              label="3 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.cuatro.value} onChange={handleChange} name="cuatro" />
                              }
                              label="4 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={filtro.cinco.value} onChange={handleChange} name="cinco" />
                              }
                              label="5 Estrellas"
                            />
                          </FormGroup>
                        </FormControl>
                        </Paper>
                        </Grid>
            </Grid>

{/**CLASES PARA INSCRIBIRSE:*/}

            <Grid container spacing={2} alignItems="center" >
                {clases.map((clase) => ( /**Con el método map recorres las variables de los objetos que hayas puesto en el arreglo */
                <Grid item xl={3} md={6}>
                  <CardStyled 
                  clase={clase}></CardStyled>
                </Grid>  
            ))}
              </Grid>

          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}