
/* seccion, utilizada para el pasaje de props*/

import ListaTarjetas from "./ListaTarjetas"

const Seccion = (props) => {
  return (
<ListaTarjetas lista={props.lista}/>
  )
}

export default Seccion