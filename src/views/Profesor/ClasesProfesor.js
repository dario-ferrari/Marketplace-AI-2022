import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Content from '../../components/Content';
import { useParams } from "react-router-dom";
import NavigatorProfesor from '../../components/NavigatorProfesor';
import {useLoaderData } from "react-router-dom";
import ClaseDetalladaProfesor from '../../components/ClaseDetalladaProfesor';
import { useSelector } from "react-redux";
import usuarios from '../../data/usuarios';
import { Typography } from '@mui/material';
import { UserContext } from '../../Contexts/UserContext';
import { buscarClasePorId } from '../../controller/clases.controller';
import { buscarUsuarioPorId } from "../../controller/usuarios.controller";

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

export default function ClasesProfesor() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  
  const currentUser = React.useContext(UserContext)
  const [user,setUser]=React.useState(null); 
  const [clase, setClase]= React.useState(null); 


  const idClase = useParams().clasesprofesorId

  console.log("id de la calse en clases para encontrarr la caslaes",idClase)

  React.useEffect(()=>{
    const getClase = async function(){
    const respuestaClase = await buscarClasePorId(idClase);
      console.log("Lpara saber que clase traje ", respuestaClase);
      if (respuestaClase.rdo === 1) {
        alert("Error al obtener Clase");
      } else {
        console.log("Clase obtenida: ", respuestaClase.clase);
        setClase(respuestaClase.clase);
    } 
  }
  getClase()

  const getUser = async function () {
    const respuestaUsuario = await buscarUsuarioPorId(currentUser)
    console.log("comentario traido ", respuestaUsuario);
    if (respuestaUsuario.rdo === 1) {
      alert("Error al obtener Usuario");
    } else {
      setUser(respuestaUsuario.user)
      console.log('Usuario traido', respuestaUsuario.user)
    }
  }
  getUser()
},[])

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
          <Box component="main" sx={{ flex: 1, bgcolor: '#eaeff1' }}>
            <Content />
            {
            (clase===null) ? (
              <Typography>CARGANDO</Typography>
            ): (user===null)? (
            <Typography>CARGANDO</Typography>
            ):(
              <ClaseDetalladaProfesor
              clase={clase}
              user={user}
              ></ClaseDetalladaProfesor>
            )}
            
          </Box>
          {/**<Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>**/}
        </Box>
      </Box>
    </ThemeProvider>
  );
}