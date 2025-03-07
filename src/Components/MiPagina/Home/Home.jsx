import React from "react";
import { Link } from "react-router-dom";
import './Home.css';  // Asegúrate de importar el archivo CSS

const PageHome = () => {
  return (
    <div className="page-home">
      <div className="page-home-content">
        <h1>Bienvenido a nuestra cocina</h1>
        <p>Descubre deliciosas recetas para cada ocasión y aprende a preparar platos irresistibles <tr/> con ingredientes frescos y fáciles de conseguir</p>
        <p>¡Tu próxima comida perfecta está a solo un clic de distancia!"</p>
        <Link to="/recetas">
          <button>Conocer más</button>
        </Link>
      </div>
    </div>
  );
};

export default PageHome;