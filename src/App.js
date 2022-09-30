import React from "react";
import { Navigate, Route, Routes,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "./views/Alumno/Menu";
import ForgotPassword from "./views/Login/ForgotPassword";
import SignIn from "./views/Login/SignIn";
import Perfil from "./views/Alumno/Perfil";
import clasesInscriptas from "./data/clasesInscriptas.json";
import ClasesCompradas from "./views/Alumno/ClasesCompradas";
import Inscripciones from "./views/Alumno/Inscripciones";
import Clases from "./views/Alumno/Clases";
import Historial from "./views/Alumno/Historial";
import Busqueda from "./views/Alumno/Busqueda";
import inscripciones from "./data/inscripciones.json";
import ClasesPublicadas from "./views/Profesor/ClasesPublicadas";
import BusquedaProfesor from "./views/Profesor/BusquedaProfesor";
import Contrataciones from "./views/Profesor/Contrataciones";
import CrearClase from "./views/Profesor/CrearClase";
import GestionarClase from "./views/Profesor/GestionarClase";
import PerfilProfesor from "./views/Profesor/PerfilProfesor";
import ClasesProfesor from "./views/Profesor/ClasesProfesor";
import clasesCreadas from "./data/clasesCreadas.json";


const router = createBrowserRouter(
  createRoutesFromElements(
      <>
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/login" element={<SignIn />} />

          <Route path="alumno">
            <Route path="menu" element={<Menu/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="inscripciones" element={<Inscripciones/>}/>
            <Route path="clases/:clasesId" element={<Clases/>}
                loader={({params}) => inscripciones.clasesI.find(clases => clases.id === Number(params.clasesId))}/>
            <Route path="clasesCompradas/:clasesId" element={<ClasesCompradas/>}
                loader={({params}) => clasesInscriptas.clasesInscriptas.find(clases => clases.id === Number(params.clasesId))}/>    
            <Route path="historial" element={<Historial/>}/>
            <Route path="busqueda" element={<Busqueda/>}/>
          </Route>

          <Route path="profesor">
            <Route path="clasespublicadas" element={<ClasesPublicadas/>}/>
              {/**loader={({params}) => inscripciones.clasesI.find(clases=>clases.id===Number(params.clasespublicadasId))}/>**/}
            <Route path="perfilprofesor" element={<PerfilProfesor/>}/>
            <Route path="busquedaprofesor" element={<BusquedaProfesor/>}/>
            <Route path="crearclase" element={<CrearClase/>}/>
            <Route path="clasesProfesor/:clasesprofesorId" element={<ClasesProfesor/>}
                loader={({params}) => clasesInscriptas.clasesInscriptas.find(clases => clases.id === Number(params.clasesprofesorId))}/>
            <Route path="gestionarclase" element={<GestionarClase/>}/>
            <Route path="contrataciones" element={<Contrataciones/>}/>
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
      </>
  )
);



function App() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary w-screen h-screen">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
