import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>About Us</h1>
      <p style={{ fontSize: '18px', maxWidth: '800px', margin: 'auto' }}>
        Bienvenido a nuestra página de recetas de comida. Nuestro objetivo es compartir las mejores
        recetas de todo el mundo para que puedas preparar platos deliciosos en casa. Explora nuestras
        recetas y descubre nuevos sabores con ingredientes frescos y sencillos de encontrar.
      </p>
      <img 
        src="https://img.freepik.com/vector-gratis/pedir-ilustracion-comida-mexicana_1284-23715.jpg" 
        alt="Ilustración de comida mexicana" 
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }}
      />
    </div>
  );
}
