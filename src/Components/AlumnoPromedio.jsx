import React from 'react'
import { ContenedorAprobado } from './AlumnosProm/ContenedorAprobado';
import { ContenedorReprobado } from './AlumnosProm/ContenedorReprobado';


export const AlumnoPromedio = () => {

    const materia1 = 7;
    const materia2 = 8;
    const resultado = (materia1 + materia2) / 2;

    if(resultado >= 8){
        return(
            <>
                <ContenedorAprobado/>
                <h1>Resultado: {resultado}</h1>
            </>
        )
    } else {
        return (
            <>
                <ContenedorReprobado/>
                <h1>Resultado: {resultado}</h1>
            </>
        )
    }
}
