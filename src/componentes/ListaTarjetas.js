
import ProductosDestacados from "./ProductosDestacados"

/* Lista de tarjetas, pasadas por props*/
const ListaTarjetas = (props) => {
    return (<div 
    style={{
      display: "flex",
      flexWrap: "wrap"
      }}>
   
   {props.lista.map(objeto => <ProductosDestacados key={objeto.id} objeto={objeto} />)}

   
    </div> 
    )
}

export default ListaTarjetas