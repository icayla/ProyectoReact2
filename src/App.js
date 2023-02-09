import logo from './logo.svg';
import './App.css';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Boton from "./componentes/Boton";
import ListaTarjetas from "./componentes/ListaTarjetas";
import ProductosDestacados from "./componentes/ProductosDestacados";
import Seccion from "./componentes/Seccion"; 



/* Datos de las tarjetas */
const lista = [
  {
    id: 1,
    nombre: "Anteojos De Sol Brooklyn",
    precio: "9344$" ,
    urlimg: "https://img.freepik.com/fotos-premium/gafas-sol-redondas-reflejo-espejo-arena-playa-soleada-verano-concepto-vacaciones-viaje_367870-955.jpg?size=626&ext=jpg"


  },
  {
    id: 2,
    nombre: "Anteojos De Sol Moonshine Premium ",
    precio: "10000$",
    urlimg:"https://img.freepik.com/foto-gratis/gafas-sol-arena_1169-59.jpg?size=626&ext=jpg"
   
  },

  {
    id: 3,
    nombre: "Anteojos De Sol Baker",
    precio: "8000$",
    urlimg:"https://img.freepik.com/foto-gratis/gafas-sol_1203-7994.jpg?size=626&ext=jpg"
  },
  {
    id: 4,
    nombre: "Anteojos De Sol White",
    precio: "10000$",
    urlimg: "https://img.freepik.com/foto-gratis/anteojos-desgaste_1203-2604.jpg?size=626&ext=jpg"
  },
  {
    id: 5,
    nombre: "Anteojos De Sol Back",
    precio: "11000$",
    urlimg:"https://img.freepik.com/fotos-premium/gafas-sol-negras-mar_42534-93.jpg?size=626&ext=jpg"
   
    
  },
  {
    id: 6,
    nombre: "Anteojos De Sol Rolon",
    precio: "4000$",
    urlimg: "https://img.freepik.com/foto-gratis/par-gafas-sobre-superficie-blanca-fondo-azul_181624-21477.jpg?size=626&ext=jpg"
  },
  {
    id: 7,
    nombre: "Anteojos De Sol Peker",
    precio: "6000$",
    urlimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EakeITzeQd8hu_Y9QfyFQrXZi0486TakyA&usqp=CAU"
  },
  {
    id: 8,
    nombre: "Anteojos De Sol Dama Italianos",
    precio: "9100$",
    urlimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kSOhAUi7pKwjTnItuio9XjvSCRRSzFZkhQ&usqp=CAU"
   
  },


] 

function App() {
  return (
    <div className="w-full bg-amber-100">
    <h1 className= "text-2x1 font-bold bg-lime-100 p-2 text-center" > Productos Destacados</h1>
    <Seccion lista ={lista}/>
    </div>
  );
}

export default App;
