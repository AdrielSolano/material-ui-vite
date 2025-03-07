import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListaLibros from './Biblioteca/ListaLibros';

const ListaBiblioteca = () => {
  const [home, setHome] = useState(false);

  const changeState = () => {
    setHome(!home);
  };

  console.log('Tu switch está:', home);

  return (
    <div>
      <h1>Lista Biblioteca</h1>
      <Switch checked={home} onChange={changeState} inputProps={{ 'aria-label': 'toggle' }} />

      <Typography variant={home ? 'h2' : 'h3'} color={home ? 'success' : 'error'}>
        {home ? 'Vista en Lista' : 'Vista en Tabla'}
      </Typography>

      <Divider color="secondary" />
          <ListaLibros mostrarLista={home} />
    </div>
  );
};

export default ListaBiblioteca;
