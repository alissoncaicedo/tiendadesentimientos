import {Link} from 'react-router-dom'
import Logo from './Logo'
const Navegador = () =>{
    return(
        <section>
            <section className="nav" >
                <ul className="btn-nav">
                    <Logo/>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/Dulces'}>Dulces</Link>
                    <Link to={'/Peluches'}>Peluches</Link>
                
                </ul>
            </section>
        </section>
)
}
export default Navegador