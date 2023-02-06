import ProductosDestacados from "./ProductosDestacados"


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