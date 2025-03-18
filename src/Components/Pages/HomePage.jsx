import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, InputBase, Paper, Typography, Tabs, Tab } from '@mui/material';
import { Search } from '@mui/icons-material';
import ContenidoCocktail from '../Pages/ContenidoCocktail';
import CategoryFilter from './CategoryPage'; // Import the new component

export default function HomePage() {
  const [textobuscar, setTextoB] = useState('');
  const [datos, setDatos] = useState({ drinks: [] });
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const obtenerbebidapornombre = async () => {
    const buscar = textobuscar.trim();
    if (buscar === '') {
      alert('Por favor ingrese un nombre de cóctel');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscar}`);
      const result = await response.json();
      console.log(result);
      setDatos(result.drinks ? { drinks: result.drinks } : { drinks: [] });
      // Reset tab value to avoid confusion
      setTabValue(-1);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const obtenerBebidasPorTipo = async (tipo) => {
    setLoading(true);
    try {
      let url;
      if (tipo === 'alcoholic') {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
      } else if (tipo === 'non_alcoholic') {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
      } else {
        // Valor predeterminado: margaritas
        url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
      }

      const response = await fetch(url);
      const result = await response.json();
      setDatos(result.drinks ? { drinks: result.drinks } : { drinks: [] });
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const obtenerBebidasPorCategoria = async (categoria) => {
    setLoading(true);
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoria)}`;
      const response = await fetch(url);
      const result = await response.json();
      setDatos(result.drinks ? { drinks: result.drinks } : { drinks: [] });
      // Reset tab value to avoid confusion
      setTabValue(-1);
    } catch (error) {
      console.error('Error al obtener los datos por categoría:', error);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios de pestaña
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    switch (newValue) {
      case 0:
        obtenerBebidasPorTipo('default'); // Margaritas
        break;
      case 1:
        obtenerBebidasPorTipo('alcoholic');
        break;
      case 2:
        obtenerBebidasPorTipo('non_alcoholic');
        break;
      default:
        obtenerBebidasPorTipo('default');
    }
  };

  useEffect(() => {
    // Cargar margaritas por defecto al iniciar
    obtenerBebidasPorTipo('default');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        background: 'radial-gradient(125% 125% at 50% 10%, #000 25%, #8a8809 100%)',
      }}
    >
      <h2 style={{
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff', // Texto blanco para mejor contraste
        lineHeight: '1.5',
        maxWidth: '800px',
      }}>
        "Busca tu cóctel ideal y empieza a preparar algo delicioso."
      </h2>

      {/* Barra de búsqueda */}
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
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  obtenerbebidapornombre();
                }
              }}
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

      {/* Pestañas para filtrar por tipo */}
      <Paper 
        sx={{ 
          width: '80%', 
          marginBottom: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px'
        }}
      >
        <Tabs 
          value={tabValue}
          onChange={handleTabChange} 
          centered
          variant="fullWidth"
          sx={{
            '& .MuiTab-root': {
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#000',
            },
            '& .Mui-selected': {
              color: '#8a8809 !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#8a8809',
            }
          }}
        >
          <Tab label="Margaritas" />
          <Tab label="Cócteles con Alcohol" />
          <Tab label="Cócteles sin Alcohol" />
        </Tabs>
      </Paper>

      {/* Nuevo componente de filtro por categoría */}
      <CategoryFilter onCategorySelect={obtenerBebidasPorCategoria} />

      {/* Mostrar cócteles */}
      {loading ? (
        <Typography variant="h5" sx={{ color: 'white', margin: '40px 0' }}>
          Cargando cócteles...
        </Typography>
      ) : (
        <ContenidoCocktail data={datos.drinks} />
      )}
    </div>
  );
}