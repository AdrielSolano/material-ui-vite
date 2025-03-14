import { Route, Routes } from 'react-router-dom'

// Importar componentes
import PageHome from './Home/Home'
import PageContact from './Contact/Contact'
import PageAbout from './About/About'
import HomePage from "../pages/HomePage.jsx";
import NotFound from './NotFound'
import PageDash from './dash/PageDash.jsx';
import DetallesDash from './dash/DetallesDash.jsx';
import PageTrading from './dash/PageTrading.jsx';
import DetalleCocktail from "../Pages/DetalleCocktail.jsx";



export default function AppRoutes () {
    return (

        <Routes>

            <Route path='/' element={<PageHome/>} />

            <Route path='/recetas' element={<HomePage/>} />

            <Route path='/about' element={<PageAbout/>} />

            <Route path='/contact' element={<PageContact/>} />

            <Route path="/dash">
                <Route index element={<PageDash/>}/>

                <Route path=':id' element={<DetallesDash/>}/>

                <Route path='trading' element={<PageTrading/>}/>

            </Route>

            <Route path='/recetas'>
                {/* Ruta principal de recetas */}
                <Route index element={<HomePage/>}/>
                {/* Ruta dinámica para mostrar el detalle de una receta */}
                <Route path=':id' element={<DetalleCocktail/>}/>
            </Route>
            
            <Route path='*' element={<NotFound/>}/>
        </Routes>

    )
}