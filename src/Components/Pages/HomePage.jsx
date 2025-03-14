import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, InputBase, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';
import ContenidoCocktail from '../Pages/ContenidoCocktail';

export default function HomePage() {
  const [textobuscar, setTextoB] = useState('');
  const [datos, setDatos] = useState({ drinks: [] });

  const obtenerbebidapornombre = async () => {
    const buscar = textobuscar.trim();
    if (buscar === '') {
      alert('Por favor ingrese un nombre de cóctel');
      return;
    }

    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscar}`);
      const result = await response.json();
      console.log(result);
      setDatos(result.drinks ? { drinks: result.drinks } : { drinks: [] });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    const obtenerdata = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const result = await response.json();
        setDatos(result);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    obtenerdata();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <h2 style={{
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        lineHeight: '1.5',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
      >
        "Busca tu cóctel ideal y empieza a preparar algo delicioso."
      </h2>
      <Grid container spacing={2} padding={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10}>
          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: '60px',
              padding: '8px 16px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            <InputBase
              sx={{
                flex: 1,
                fontSize: '18px',
                padding: '10px',
                marginRight: '8px',
              }}
              placeholder="Pon nombre de cóctel"
              inputProps={{ 'aria-label': 'buscar cóctel' }}
              onChange={(e) => setTextoB(e.target.value)}
            />
            <Button
              onClick={obtenerbebidapornombre}
              variant="contained"
              color="primary"
              startIcon={<Search />}
              sx={{
                height: '50px',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                borderRadius: '8px',
                backgroundColor: '#8a8809',
                '&:hover': {
                  backgroundColor: '#959a51',
                },
                padding: '8px 20px',
                minWidth: '120px',
              }}
            >
              Buscar
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <ContenidoCocktail data={datos.drinks} />
    </div>
  );
}
