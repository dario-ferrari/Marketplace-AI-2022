import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate , useLocation } from "react-router-dom";


const categories = [
  {
    id: 'Profesor',
    children: [
      {
        id: 'Clases Publicadas',
        icon: <SchoolIcon />,
        path: "/profesor/clasespublicadas",
        active: true, 
      },
      { id: 'Perfil', icon: <PersonIcon/>, path: "/profesor/perfilprofesor" }, 
      {
        id: 'Búsqueda de Perfiles',
        icon: <PersonSearchIcon />,
        path: "/profesor/busquedaprofesor",
      },
    ],
  },
  {
    id: 'Gestión de Clases',
    children: [
      { id: 'Crear Clase', icon: <SettingsIcon />, path: "/profesor/crearclase" },
      { id: 'Modificar/Eliminar Clase', icon: <TimerIcon />, path: "/profesor/gestionarclase" },
      { id: 'Contrataciones', icon: <PhonelinkSetupIcon />, path: "/profesor/contrataciones" },
    ],
  },
];

const itemC = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function NavigatorProfesor(props) {
  const { ...other } = props;
  const navigate=useNavigate();
  const location=useLocation();



  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding> {/**Componente que contiene la lista*/}
        <ListItem sx={{ ...itemC, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Marketplace 
        </ListItem>
        <ListItem sx={{ ...itemC, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>¡Bienvenido Profesor!</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }} >
            <ListItem sx={{ py: 2, px: 3 }} >
              <ListItemText sx={{ color: '#FFF' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, path, active }) => ( /**Acá arranca la lista con las distintas vistas accesibles */
              <ListItem disablePadding key={childId} onClick={()=>navigate(path)}> {/**Método navigate que recibe como parámetro la variable path con la ruta */}
                <ListItemButton selected={location.pathname===path ? active=true : false} sx={itemC}> {/**Si coincide la ruta con el path la variable active pasa a true y se marca el item */}
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}


            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}