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

import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';

import HistoryIcon from '@mui/icons-material/History';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { useNavigate , useLocation, Link } from "react-router-dom";
import { Button } from '@mui/material';

const categories = [
  {
    id: 'Alumno',
    children: [
      {
        id: 'Clases',
        icon: <DashboardIcon />,
        path: "/alumno/menu",
        active: true, 
      },
      { id: 'Perfil', icon: <PersonIcon/>, path: "/alumno/perfil" }, 
      { id: 'Inscripciones', icon: <LocalGroceryStoreIcon />, path:"/alumno/inscripciones"},
      { id: 'Historial', icon: <HistoryIcon />, path:"/alumno/historial"},
    ],
  }/**,
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  }, */
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

export default function Navigator(props) {
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
          <ListItemText>¡Bievenido Alumno!</ListItemText>
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
      <Link to={'/login'}>
      <Button
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  '&:hover': {
                    color: 'white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
                >
                Cerrar Sesión
                </Button>
                </Link>
    </Drawer>
  );
}
