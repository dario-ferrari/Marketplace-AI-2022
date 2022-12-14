import React from "react";
import { forwardRef } from 'react';
import { Rating } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EmailIcon from "@mui/icons-material/Email";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { updateContratacion } from "../../controller/contratacion.controller";





export default function BasicTable(props) {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const columnas=[
    {
    title: 'Clase',
    field: 'clase.titulo'
  },{
    title: 'Telefono',
    field: 'telefono'  
  },{
    title: 'Email',
    field: 'email'
  },{
    title: 'Mensaje',
    field: 'mensaje'
  },{
    title: 'Calificacion',
    field: 'rating',
    render: rowData => <Rating
    name="half-rating-read"
    defaultValue={Number(rowData.rating)}
    precision={1}
    readOnly
  />
  }]

  const data = props.contrataciones


  return (
    <MaterialTable
      icons={tableIcons}
      columns={columnas}
      title="Contrataciones"
      data={data} 
      actions={[
        {
          icon: DoneIcon,
          tooltip:'Aceptar',
          onClick:(event,contratacion)=>{
            console.log('que locura', contratacion)
            contratacion["Estado"]='ACEPTADA'
            
          }
        },
        {
          icon: CloseIcon,
          tooltip:'Cancelar',
          onClick:(rowData)=>{
            console.log('que locura', rowData)
          }
        },
        {
          icon: DoneAllIcon,
          tooltip:'Finalizar',
          onClick:(event,rowData)=>{
            console.log('que locura', rowData)
          }
        },
        {
          icon: EmailIcon,
          tooltip:'Enviar Mail',
          onClick:(event,rowData)=>{
            console.log('que locura', rowData)
          
          const cambiarEstado = async function(){
            const respuestaActualizacion = await updateContratacion()
            console.log(
              "Console log de respuesta de back ",
              JSON.stringify(respuestaActualizacion)
            );
            if (respuestaActualizacion.rdo === 1) {
              alert("Ocurrio un error al guardar");
            }
          }
          cambiarEstado()
          }
        }
      ]}
    />
  )
    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clase</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Calificación</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.contrataciones.map((row) => (
            <TableRow
              key={row.clase.titulo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.clase.titulo}
              </TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Rating value={row.rating} readOnly />
              </TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              <TableCell align="right">
                  <IconButton aria-label="acept" onClick={handleAcept(rowData)}>
                    <DoneIcon />
                  </IconButton>
                  <IconButton aria-label="cancel" disabled color="primary">
                    <CloseIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="add an alarm">
                    <DoneAllIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <EmailIcon />
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
}
