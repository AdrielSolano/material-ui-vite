import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetallesDash() {

    let { id } = useParams();
React.useEffect(() => {
    const darbienvenida = () =>{
        alert('Bienvenido a la pagina de detalles de dashboard');
    }
    darbienvenida();
    return () => {
        alert('Adios a la pagina de detalles de dashboard');
    }
}, [])

    return (
        <div>
            <h1>Detalles del dashboard</h1> <br />
            <h2>ID obtendida desde URL:{id}</h2>
        </div>
    );
}