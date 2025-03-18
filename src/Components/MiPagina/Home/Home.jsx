import React from "react";
import { Link } from "react-router-dom";
import './Home.css';  // Asegúrate de importar el archivo CSS

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="page-home-content">
        <h1>"Bienvenido a Mixología Express.</h1>
        <p>Sumérgete en el mundo de los cócteles y descubre recetas únicas para cada ocasión.</p> 
        <p>Aprende a preparar bebidas irresistibles, utilizando ingredientes frescos y técnicas fáciles de seguir.</p>
        <p>¡Conviértete en el alma de la fiesta y eleva tus habilidades detrás de la barra, un cóctel a la vez!"</p>
        <Link to="/recetas">
          <button>Conocer más</button>
        </Link>
      </div>
    </div>
  );
};

export default PageHome;