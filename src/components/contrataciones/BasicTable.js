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
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CheckIcon from "@material-ui/icons/Check";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import FilterListIcon from "@material-ui/icons/FilterList";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import RemoveIcon from "@material-ui/icons/Remove";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import SearchIcon from "@material-ui/icons/Search";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import { updateContratacion } from "../../controller/contratacion.controller";





export default function BasicTable(props) {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    EditIcon: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAltIcon {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} />),
    FirstPageIcon: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
    LastPageIcon: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
    ResetSearchIcon: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    SearchIcon: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownwardIcon {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <RemoveIcon {...props} ref={ref} />),
    ViewColumnIcon: forwardRef((props, ref) => <ViewColumnIcon {...props} ref={ref} />)
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
    title: 'Calificacion',
    field: 'rating'
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
