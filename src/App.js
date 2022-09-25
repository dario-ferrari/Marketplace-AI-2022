import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./views/Alumno/Menu";
import ForgotPassword from "./views/Login/ForgotPassword";
import SignIn from "./views/Login/SignIn";
import Perfil from "./views/Alumno/Perfil";
import Inscripciones from "./views/Alumno/Inscripciones";
import Clases from "./views/Alumno/Clases";
import Historial from "./views/Alumno/Historial";
import Busqueda from "./views/Alumno/Busqueda";
import clasesInscriptas from "./data/clasesInscriptas.json";

function App() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary w-screen h-screen">
      
      <Routes>
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/login" element={<SignIn />} />

        <Route path="alumno">
            <Route path="menu" element={<Menu/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="inscripciones" element={<Inscripciones/>}/>
            <Route path="clases" element={<Clases/>}>
              <Route path=":clasesId"
                loader={({params}) => clasesInscriptas.clasesI.find(clases => clases.id === Number(params.clasesId))}/>
            </Route>
            <Route path="historial" element={<Historial/>}/>
            <Route path="busqueda" element={<Busqueda/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;