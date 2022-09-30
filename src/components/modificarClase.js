import * as React from "react";
import { Image } from "mui-image";
import {useLoaderData } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Content from './Content';
import Header from './Header';
import NavigatorProfesor from './NavigatorProfesor';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Swal from "sweetalert2";

export default function modificarClase(props) {
    const handleChange = (event) => {
        /**setValues({
          ...values,
          [event.target.name]: event.target.value
        }); */
      };
      
    const handleClassCreation = () => {
        Swal.fire({
          title: '¡Clase Creada!',
          text: "¿Quieres publicarla?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, publicar!',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Publicada!',
              'La clase ha sido creada y publicada.',
              'success'
            )
          }
        })
      }
    

    return (
      <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1', display: 'flex', flexDirection: 'row'}}>
      <Content />

        <form
          autoComplete="off"
          noValidate
        >
          <Card>
            <CardHeader
              title="Crear una Nueva Clase"
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
                    value={props.nombre}
                    onChange={handleChange}
                    variant="standard"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Materia"
                    name="lastName"
                    value={props.nombre}
                    onChange={handleChange}
                    variant="standard"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    label="Duración"
                    name="email"
                    value={props.duracion}
                    onChange={handleChange}
                    variant="standard"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    id="standard-select-frequency-native"
                    fullWidth
                    label="Frecuencia"
                    value={props.frecuencia}
                    select
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="Por favor elige la frecuencia"
                    variant="standard"
                  >
                  </TextField>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Costo</InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      onChange={handleChange('amount')}
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      value={props.precio}
                    />
                  </FormControl>

                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  
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
                onClick={() => handleClassCreation()}
              >
                Crear
              </Button>
            </Box>
          </Card>
        </form>
      </Box>
    );
}
  