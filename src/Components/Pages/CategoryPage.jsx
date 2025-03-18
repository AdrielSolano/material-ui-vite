import React, { useState, useEffect } from 'react';
import { Paper, Typography, Chip, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function CategoryPage({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        
        if (data && data.drinks) {
          setCategories(data.drinks);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    const categoryName = category.strCategory;
    setSelectedCategory(categoryName);
    
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <Paper 
      sx={{ 
        width: '80%', 
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px'
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          marginBottom: '15px', 
          fontWeight: 'bold',
          color: '#8a8809'
        }}
      >
        Filtrar por Categoría
      </Typography>
      
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <CircularProgress sx={{ color: '#8a8809' }} />
        </Box>
      ) : (
        <Grid container spacing={1}>
          {categories.map((category, index) => (
            <Grid key={index} item>
              <Chip
                label={category.strCategory}
                onClick={() => handleCategoryClick(category)}
                sx={{
                  margin: '4px',
                  backgroundColor: selectedCategory === category.strCategory ? '#8a8809' : '#f0f0f0',
                  color: selectedCategory === category.strCategory ? 'white' : 'black',
                  fontWeight: selectedCategory === category.strCategory ? 'bold' : 'normal',
                  '&:hover': {
                    backgroundColor: selectedCategory === category.strCategory ? '#959a51' : '#e0e0e0',
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
}