import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navegador from "./componentes/Navegador"
import Home from './componentes/Home'
import Peluches from './componentes/Peluches'
import Dulces from './componentes/Dulces'
const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/Navegador',
    element:<Navegador/>,
  },
  {
    path:'/Dulces',
    element:<Dulces/>,
  },
  {
    path:'/Peluches',
    element:<Peluches/>,
  },
  

 ])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
