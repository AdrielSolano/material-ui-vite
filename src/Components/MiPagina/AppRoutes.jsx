import { Route, Routes } from 'react-router-dom'

// Importar componentes
import PageHome from './Home/Home'
import PageContact from './Contact/Contact'
import PageAbout from './About/About'
import HomePage from "../pages/HomePage.jsx";
import NotFound from './NotFound'
import PageDash from './dash/PageDash.jsx';


export default function AppRoutes () {
    return (

        <Routes>

            <Route path='/' element={<PageHome/>} />

            <Route path='/recetas' element={<HomePage/>} />

            <Route path='/about' element={<PageAbout/>} />

            <Route path='/contact' element={<PageContact/>} />
            
            <Route path='*' element={<NotFound/>}/>

            <Route patch='/detallesdash' element={<DetallesDash/>} />

            <Route patch='pagedash' element={<PageDash/>} />

            <Route patch='pagetrading' element={<PageTrading/>} />

        </Routes>
    )
}