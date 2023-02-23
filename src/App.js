import './App.css';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Boton from "./componentes/Boton";
import ListaTarjetas from "./componentes/ListaTarjetas";
import ProductosDestacados from "./componentes/ProductosDestacados";
import Seccion from "./componentes/Seccion"; 
import { lista } from './utilidades/Index';
import NavBar from './components/NavBar.jsx';
import Fondo from './componentes/Fondo';
import Footer from './componentes/Footer';



function App() {
  return (
    <>  
    <NavBar/>
    <Fondo />
    <div> 
   <h1 className= "w-full bg-amber-100 text-2xl font-bold p-2 text-center p-3" > Nuestros Productos</h1>
     </div>  
    <div className="w-full bg-amber-100">
    <Seccion lista ={lista}/>
    <Footer />
    </div>
    
  
  
  </>
    
  );
}

export default App;
