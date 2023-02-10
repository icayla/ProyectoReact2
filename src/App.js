import './App.css';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Boton from "./componentes/Boton";
import ListaTarjetas from "./componentes/ListaTarjetas";
import ProductosDestacados from "./componentes/ProductosDestacados";
import Seccion from "./componentes/Seccion"; 
import { lista } from './utilidades/Index';
import NavBar from './components/NavBar.jsx';


function App() {
  return (
    <div className="w-full bg-amber-100">
    <h1 className= "text-2x1 font-bold bg-lime-100 p-2 text-center" > Productos Destacados</h1>
    <Seccion lista ={lista}/>
    </div>
    <NavBar/>
  );
}

export default App;
