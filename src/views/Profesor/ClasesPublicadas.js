import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Content from '../../components/Content';
import Header from '../../components/Header';
import "../../components/ClaseCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useNavigate , useLocation } from "react-router-dom";
import clasesInscriptas from "../../data/clasesInscriptas.json";
import Grid from '@mui/material/Grid';
import ComputerIcon from '@mui/icons-material/Computer';
import BalanceIcon from '@mui/icons-material/Balance';
import NavigatorProfesor from '../../components/NavigatorProfesor';

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

export default function ClasesPublicadas() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate=useNavigate();

  const ruta = (id) => {
    navigate(`/alumno/clases/${id}`);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>
            <Content/>

              {/**--CARD CON LAS CLASES QUE EL ALUMNO ESTÁ CURSANDO--*/}
              <Grid container spacing={{xs: 2, md:3}} rowSpacing={1} columns={{xs:4, sm:8, md: 12}}>
              {clasesInscriptas.clasesInscriptas.map(({id, nombre, icono, descripcion, frecuencia, duracion}) => ( /**Con el método map recorres las variables de los objetos que hayas puesto en el arreglo */
                <Grid item xs={2} sm={4} md={4} key={id}>
                <Card key={id} sx={{ maxWidth: 345, maxHeight: 235 }} onClick={()=>ruta(id)}> {/**Al clickear la card se activa el método "ruta" al que le paso la id de la clase, que se va a usar en la dirección (ruta) de esa clase  */}
                  <CardActionArea>
                    <Box
                      sx={{
                        width: 345,
                        height: 35,
                        backgroundColor: "primary.dark",
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {nombre}
                      </Typography>
                      
                      <Typography gutterBottom variant="body2" color="text.secondary">
                        {descripcion}
                      </Typography>
                      <Box
                        sx={{
                        width: 315,
                        height: 5,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}
                    />
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="button" component="block">{frecuencia}</Typography>
                      <Typography variant="button" display="block">{duracion}</Typography>
                    </Box>
                    </CardContent>
                  </CardActionArea>
              </Card>
              </Grid>
            ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}