import Navegador from "./Navegador"
import peluches from "./Peluches.json"


const Peluches = () => {
    return(
        <section className="contenedor-principal">
            <section className="contenedor-nav">
            <Navegador/>
            </section>
            
            <section className="contenedorcard-dulces">
                {
                peluches.map((peluche)=>(

                <section className="card"  key={peluche.id}>
                    <img className="img-card" src="https://acortar.link/jFSmWU"/>
                    <section className="titulo-card">
                    <h1>{peluche.nombre}</h1>
                    </section>
                    <p>{peluche.personaje}</p>
                    <p>{peluche.pelicula}</p>
                    <p>{peluche.tamaño}</p>
                    <p>{peluche.material}</p>
                    <p>{peluche.especie}</p>
                    <p>{peluche.color}</p>
                </section>

                ))
                }
            </section>
           

        </section>
    )
}
export default Peluches