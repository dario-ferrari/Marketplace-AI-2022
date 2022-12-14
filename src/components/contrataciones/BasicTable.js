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
import Swal from "sweetalert2";





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
