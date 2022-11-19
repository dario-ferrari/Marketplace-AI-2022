import { RssFeed } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { listadoClases } from "../controller/clases.controller";
import {listadoUsuarios} from "../controller/usuarios.controller"
import { buscarClasePorNombre } from "../controller/clases.controller";
import { buscarClasePorId } from "../controller/clases.controller";
import { crearClaseNueva } from "../controller/clases.controller";
import { eliminadorClases } from "../controller/clases.controller";


const TestConexion = ()=>{

    
        const listado = async function (){
            console.log("aca llego")
            let respuesta = await listadoUsuarios();
            console.log("aca llego 2")
            if (respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }

        const clases = async function(){
            let respuesta = await listadoClases();
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }

        const clasesPorNombre = async function(nombre){
            console.log(nombre)
            let respuesta = await buscarClasePorNombre(nombre);
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }


        const clasesPorId = async function(id){
            console.log(id)
            let respuesta = await buscarClasePorId(id);
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }

        const creadorClase = async function(clase){
            console.log(clase)
            let respuesta = await crearClaseNueva(clase);
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }



        const clase = {
          titulo: "Analisis Matematico I",
          imagen: "https://gaceta.cch.unam.mx/sites/default/files/styles/imagen_articulos_1920x1080/public/2021-04/jurgen-klopp-y-liverpool.jpg?h=ac2d463f&itok=NicaPj4v",
          descripcion: "Descripción breve de la clase. fdjskalfjdsñfjdsa fkdslañdfkjfkdslajflñdsajf fjdksalfjdñs fdjskal.",
          frecuencia: "Semanal",
          duracion: 3,
          fechaLimite: new Date(),
          precio: 55,
          tipo: "Grupal",
          rating: 4,
          Usuarios_id:"635b20092f07badf94bfc03c",
          disponibilidad: true,
          comentarios: []
        };


        const eliminator = async function(id){
            console.log(id)
            let respuesta = await eliminadorClases(id);
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }

        const handleClick = ()=>{
            //listado()
            //clases()
            //clasesPorNombre("Base")
            clasesPorId("635b1e862f07badf94bfc02e")
            //creadorClase(clase)
            //eliminator("6378422f86cbfc59c8cdd968")
            
        }

    return (
        <>
        <Typography variant="body 1">
            Pagina para probar si funciona correctamente la conexion al back end
        </Typography>
        <Button variant="contained" onClick={handleClick}>Llamar al back</Button>
        </>
    )
}

export default TestConexion;
