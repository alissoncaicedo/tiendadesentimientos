import Navegador from "./Navegador"
import dulces from "./Dulces.json"

 
  
const Dulces = () => {
    
    return(
        
        <section className="contenedor-principal">
            <section className="contenedor-nav">
            <Navegador/>
            </section>
            
            <section className="contenedorcard-dulces">
                {
                dulces.map((dulce)=>(

                <section className="card"  key={dulce.id}>
                    <img className="img-card" src="https://acortar.link/8teMWZ"/>
                    <h1>{dulce.nombre}</h1>
                    <p>{dulce.descripcion}</p>
                    <p>{dulce.precio}</p>
                    <p>{dulce.cantidad}</p>
                    <p>{dulce.imagen}</p>
                    
                
                


                </section>

                ))
                }
            </section>

        </section>
       
    )
}
 export default Dulces