import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
/**import Link from '@mui/material/Link';**/
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { loggOut } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import usuarios from '../data/usuarios';
import { Link } from 'react-router-dom';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header (props) {
  const { onDrawerToggle } = props;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(loggOut());
  };

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.logged) {
      return navigate("/login");
    }
  }, [auth.logged]);

  const us = usuarios.find((u) => u.email === user.email);

  const vistas = [
        { id: 'Dashboard', path: "/alumno/menu" },
        { id: 'Perfil', path: "/alumno/perfil" }, 
        { id: 'Inscripciones', path:"/alumno/inscripciones"},
        { id: 'Clases', path:"/alumno/clases"},
        { id: 'Historial', path:"/alumno/historial"},
        { id: 'Búsqueda de Perfiles', path: "/alumno/busqueda"},
  ]
  const location=useLocation();

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Button onClick={() => logout()}
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
                >
                Cerrar Sesión
                </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Link to="/alumno/perfil"><Avatar/></Link>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
               Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={0} textColor="inherit">
        {/**
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" /> */}
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;