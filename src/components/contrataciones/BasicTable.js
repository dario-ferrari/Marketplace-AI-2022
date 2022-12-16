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
import Swal from "sweetalert2";





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
    title: 'Estado',
    field: 'estado',
    
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
            contratacion["estado"]="ACEPTADA"
            console.log('que locura', contratacion)
            const cambiarEstado = async function(){
              const respuestaActualizacion = await updateContratacion(contratacion)
              console.log(
                "Console log de respuesta de back ",
                JSON.stringify(respuestaActualizacion)
              );
              if (respuestaActualizacion.rdo === 1) {
                alert("Ocurrio un error al guardar");
              }else{
                Swal.fire(
                'Aceptada',
                'La solicitud ha sido aceptada!',
                'success')
              }
            }
            cambiarEstado()
            }
        },
        {
          icon: CloseIcon,
          tooltip:'Cancelar',
          onClick:(event,contratacion)=>{
            contratacion["estado"]="CANCELADA"
            console.log('que locura', contratacion)
            const cambiarEstado = async function(){
              const respuestaActualizacion = await updateContratacion(contratacion)
              console.log(
                "Console log de respuesta de back ",
                JSON.stringify(respuestaActualizacion)
              );
              if (respuestaActualizacion.rdo === 1) {
                alert("Ocurrio un error al guardar");
              }else{
                Swal.fire(
                'Cancelada',
                'La solicitud ha sido cancelada!',
                'success')
              }
            }
            cambiarEstado()
            }
        },
        {
          icon: DoneAllIcon,
          tooltip:'Finalizar',
          onClick:(event,contratacion)=>{
            contratacion["estado"]="FINALIZADA"
            console.log('que locura', contratacion)
            const cambiarEstado = async function(){
              const respuestaActualizacion = await updateContratacion(contratacion)
              console.log(
                "Console log de respuesta de back ",
                JSON.stringify(respuestaActualizacion)
              );
              if (respuestaActualizacion.rdo === 1) {
                alert("Ocurrio un error al guardar");
              }else{
                Swal.fire(
                'Finalizada',
                'La solicitud ha sido finalizada!',
                'success')
              }
            }
            cambiarEstado()
            }
        },
        {
          icon: EmailIcon,
          tooltip:'Enviar Mail',
          onClick:(event,rowData)=>{
            alert("se ha enviado el mail")
          }
        }
      ]}
    />
  )
}
