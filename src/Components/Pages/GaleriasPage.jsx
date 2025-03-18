import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography, Tabs, Tab, Box, CircularProgress } from '@mui/material';

export default function GaleriasPage() {
  const [tabValue, setTabValue] = useState(0);
  const [cocktailImages, setCocktailImages] = useState([]);
  const [ingredientImages, setIngredientImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lista de IDs de cócteles populares para mostrar en la galería
  const popularCocktailIds = [
    '11007', '11001', '11000', '11006', '11003', '11004', '11005', '11008', 
    '11009', '11010', '11011', '11012', '11013', '11014', '11015', '11016'
  ];

  // Lista de ingredientes comunes para mostrar en la galería
  const commonIngredients = [
    'Gin', 'Vodka', 'Rum', 'Tequila', 'Whiskey', 'Bourbon', 'Brandy', 'Cognac',
    'Triple Sec', 'Lime', 'Lemon', 'Orange', 'Mint', 'Sugar', 'Salt', 'Ice'
  ];

  useEffect(() => {
    const fetchDrinkData = async () => {
      setLoading(true);
      try {
        // Obtener datos de cócteles para crear la galería
        const drinkPromises = popularCocktailIds.map(async (id) => {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
          const data = await response.json();
          return data.drinks ? data.drinks[0] : null;
        });

        const drinks = await Promise.all(drinkPromises);
        const validDrinks = drinks.filter(drink => drink !== null);
        setCocktailImages(validDrinks);
        
        // Para ingredientes, solo necesitamos los nombres ya que la URL sigue un patrón
        setIngredientImages(commonIngredients);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrinkData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getIngredientImageUrl = (ingredient) => {
    // Formato de la URL para imágenes de ingredientes
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient.toLowerCase()}-medium.png`;
  };

  const getDrinkImageUrl = (drink) => {
    // Para las bebidas, usamos la URL de imagen mediana proporcionada por la API
    const urlBase = 'https://www.thecocktaildb.com/images/media/drink/';
    const imageName = drink.strDrinkThumb.split('/').pop();
    return `${urlBase}${imageName}/medium`;
  };

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
        color: '#fff',
        lineHeight: '1.5',
        maxWidth: '800px',
      }}>
        "Galería de Cócteles e Ingredientes"
      </h2>

      {/* Pestañas para cambiar entre galerías */}
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
          <Tab label="Cócteles" />
          <Tab label="Ingredientes" />
        </Tabs>
      </Paper>

      {/* Contenido de la galería */}
      <Box sx={{ width: '80%', mb: 4 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress sx={{ color: '#8a8809' }} />
          </Box>
        ) : (
          <>
            {/* Galería de cócteles */}
            {tabValue === 0 && (
              <Grid container spacing={3}>
                {cocktailImages.map((drink) => (
                  <Grid key={drink.idDrink} xs={12} sm={6} md={4} lg={3}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        padding: 2, 
                        borderRadius: 4, 
                        textAlign: 'center',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.03)',
                        }
                      }}
                    >
                      <img
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        style={{ 
                          width: '100%', 
                          height: '250px', 
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '8px'
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        {drink.strDrink}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {drink.strCategory}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Galería de ingredientes */}
            {tabValue === 1 && (
              <Grid container spacing={3}>
                {ingredientImages.map((ingredient, index) => (
                  <Grid key={index} xs={12} sm={6} md={4} lg={3}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        padding: 2, 
                        borderRadius: 4, 
                        textAlign: 'center',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.03)',
                        }
                      }}
                    >
                      <img
                        src={getIngredientImageUrl(ingredient)}
                        alt={ingredient}
                        style={{ 
                          width: '100%', 
                          height: '250px', 
                          objectFit: 'contain',
                          borderRadius: '8px',
                          marginBottom: '8px',
                          backgroundColor: 'rgba(138, 136, 9, 0.1)'
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                        {ingredient}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </Box>
    </div>
  );
}