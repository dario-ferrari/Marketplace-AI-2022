import { RssFeed } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { listadoClases } from "../controller/clases.controller";
import {listadoUsuarios} from "../controller/usuarios.controller"
import { buscarClasePorFiltro } from "../controller/clases.controller";
import { buscarClasePorId } from "../controller/clases.controller";
import { crearClaseNueva } from "../controller/clases.controller";
import { eliminadorClases, actualizarClase } from "../controller/clases.controller";


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
            let respuesta = await buscarClasePorFiltro(nombre);
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

        const editarClase = async function(clase,id){
            console.log(clase,id)
            let respuesta = await actualizarClase(clase,id);
            if(respuesta.rdo===1){
                alert("salio mal")
            }
            if (respuesta.rdo===0){
                console.log("esta fue la respuesta del back",respuesta)
            }
        }



        const clase = {
          titulo: "TEST",
          imagen: "https://concepto.de/wp-content/uploads/2018/09/derecho-penal1-e1538147633685.jpg",
          descripcion: "Descripción TEST.",
          frecuencia: "Unica",
          duracion: 1,
          fechaLimite: new Date(),
          precio: 80,
          tipo: "Grupal",
          rating: 1,
          Usuarios_id:"635b20092f07badf94bfc03c",
          disponibilidad: true,
        };


        const claseTest = {
            titulo: "Test cambiado",
            descripcion: "Test cambiado",
            comentarios: ["635b1f8c2f07badf94bfc031"]
          
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
            //clasesPorId("635b1e862f07badf94bfc02e")
            //creadorClase(clase)
            //editarClase(claseTest,"6380c81d67f1fb4684e6c3cb")
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
