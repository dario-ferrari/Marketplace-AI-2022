import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Content from '../../components/Content';
import "../../components/ClaseCard.css";
import clasesInscriptas from "../../data/clasesInscriptas.json";
import Grid from '@mui/material/Grid';
import NavigatorProfesor from '../../components/NavigatorProfesor';
import CardProfesor from '../../components/componentsChiquitos/cardProfesor';
import { UserContext } from '../../Contexts/UserContext';
import { buscarUsuarioPorId } from '../../controller/usuarios.controller';
import { Typography } from '@mui/material';

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
  const currentUser = React.useContext(UserContext)
  
  const [clases, setClases]= React.useState([]  )

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  React.useEffect(()=>{
    console.log('ÉSTE ES EL CURRENT USER', currentUser)
    const getClases = async function () {
      const respuestaUsuario = await buscarUsuarioPorId(currentUser)
      console.log(
        "Console de back ",
        JSON.stringify(respuestaUsuario.user.clasesPublicadas)
      );
      if (respuestaUsuario.rdo === 1) {
        alert("Ocurrio un error");
      } else {  
        setClases(respuestaUsuario.user.clasesPublicadas)
      }
    };
    getClases()
  },[])


  console.log(clases)
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
        {(clases === null) ? (
          <Typography>CARGANDO</Typography>

        ):(
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>

              {/**--CARD CON LAS CLASES QUE EL ALUMNO ESTÁ CURSANDO--*/}
              <Grid container spacing={2} alignItems="center">
              {( /**clasesInscriptas.clasesInscriptas.map(({id, titulo, imagen, frecuencia, valorada, estado}) => Con el método map recorres las variables de los objetos que hayas puesto en el arreglo */
                clases.map((x)=>
                (
                <Grid item xs={2} sm={3} md={3}>
                <CardProfesor clase={x}></CardProfesor>
                </Grid>
                ))
            )}
            </Grid>
          </Box>
        </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}