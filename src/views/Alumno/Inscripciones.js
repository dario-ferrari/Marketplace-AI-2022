import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../../components/Navigator';
import Content from '../../components/Content';
import Header from '../../components/Header';
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
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';



{/**function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}**/}

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

  const [clases, setClases]= React.useState([]);  
  const [busqueda, setBusqueda] = React.useState('');
  
  const [checkbox, setCheckbox] = React.useState({
    unica: false,
    semanal: false,
    mensual: false,
    individual: false,
    grupal: false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    setClases(clasesInscriptas.clasesI);
  }, []);

  let filtro = {
    titulo : '',
    chekboxs : checkbox
  }



  const handleChange=(e)=>{
    setBusqueda(e.target.value);
    filtro.titulo = e.target.value
    filtrarClases(filtro);
  }

/*funsiones por filtros*/

  

  const fusionResultados = (array1, array2)=>{
    console.log(array1,array2)
    var newArray= [];
    for (var component in array2){
      if(array1.includes(array2[component]))
        newArray.push(array2[component])
    }
    return newArray;
  }


  const filtrarCheck=(filtro)=>{
    let clasesTotales = clasesInscriptas.clasesI
    let resultadosBusqueda = clasesTotales
    var active =  false
    for( var check in filtro.chekboxs){
      if(filtro.chekboxs[check])
        active = true
      }
    if(active){
      resultadosBusqueda = clasesTotales.filter((clase)=>{
        for( var check in filtro.chekboxs){
          console.log(check);
          console.log(clasesTotales);
          if(filtro.chekboxs[check]){
            if(clase.tipo.toString().toLowerCase().includes(check.toString()) || 
            clase.frecuencia.toString().toLowerCase().includes(check.toString()) ||
            clase.rating.toString().toLowerCase().includes(check.toString())){
              console.log(check,filtro.chekboxs[check])
              return clase
            }
          } 
        }
      })
    }
    return resultadosBusqueda
    }

    const filtrarTexto =(filtro)=>{
      let clasesTotales = clasesInscriptas.clasesI
      let resultadosBusqueda = clasesTotales.filter((clase)=>{
        if(clase.titulo.toString().toLowerCase().includes(filtro.titulo.toLowerCase()))
        {
          return clase;
        }
      });
      return resultadosBusqueda
    }
  
  const filtrarClases=(filtro)=>{
    console.log(filtro.titulo)
    var resultadosBusquedaTexto = filtrarTexto(filtro)
    var resultadosBusquedaCheck = filtrarCheck(filtro)
    var resultadosBusquedaJuntos = fusionResultados(resultadosBusquedaCheck,resultadosBusquedaTexto)
    console.log(resultadosBusquedaJuntos)
    setClases(resultadosBusquedaJuntos);
  }
  /**Seccion para filtrar con checkbox */
 

  const handleCheckEvent = (event) => {
    setCheckbox({
      ...checkbox,
      [event.target.name]: event.target.checked,
    });
    filtro.titulo = busqueda
    filtro.chekboxs[event.target.name]= event.target.checked
    filtrarClases(filtro)
  };

  const { unica, semanal, mensual, individual, grupal,uno, dos ,tres, cuatro,cinco } = checkbox;



  




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
          <Header onDrawerToggle={handleDrawerToggle} />
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
                      placeholder="Buscar por materia, tipo de clase, frecuencia o calificación"
                      value={busqueda}
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
                                <Checkbox checked={unica} onChange={handleCheckEvent} name="unica" />
                              }
                              label="Unica"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={semanal} onChange={handleCheckEvent} name="semanal" />
                              }
                              label="Semanal"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={mensual} onChange={handleCheckEvent} name="mensual" />
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
                                <Checkbox checked={individual} onChange={handleCheckEvent} name="individual" />
                              }
                              label="Individual"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={grupal} onChange={handleCheckEvent} name="grupal" />
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
                                <Checkbox checked={uno} onChange={handleCheckEvent} name="1" />
                              }
                              label="1 Estrella"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={dos} onChange={handleCheckEvent} name="2" />
                              }
                              label="2 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={tres} onChange={handleCheckEvent} name="3" />
                              }
                              label="3 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={cuatro} onChange={handleCheckEvent} name="4" />
                              }
                              label="4 Estrellas"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox checked={cinco} onChange={handleCheckEvent} name="5" />
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
                {clases.map(({id, titulo, imagen, descripcion, frecuencia, duracion, rating,precio}) => ( /**Con el método map recorres las variables de los objetos que hayas puesto en el arreglo */
                <Grid item xl={3} md={6}>
                  <CardStyled 
                  id={id} 
                  titulo={titulo} 
                  imagen={imagen} 
                  descripcion={descripcion} 
                  frecuencia={frecuencia} 
                  duracion={duracion}
                  rating={rating}
                  precio={precio}></CardStyled>
                </Grid>  
            ))}
              </Grid>

          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}