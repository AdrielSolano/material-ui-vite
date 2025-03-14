import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid2";

export default function DetalleCocktail() {
  let { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result = await response.json();
        if (result.drinks && result.drinks.length > 0) {
          setCocktail(result.drinks[0]);
        }
      } catch (error) {
        console.error("Error al obtener los detalles del cóctel:", error);
      }
    };

    fetchCocktailDetails();
  }, [id]);

  if (!cocktail) {
    return <Typography sx={{ textAlign: "center", marginTop: 4 }}>Cargando los datos...</Typography>;
  }

  return (
    <div style={{ width: '95%', margin: 'auto', textAlign: 'center' }}>
      <br />
      <Grid container spacing={2} justifyContent="center">
        {/* Columna para la imagen */}
        <Grid size={{sm:12, md: 6}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 10 }}>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              style={{ width: '80%', borderRadius: '8px' }}
            />
          </Paper>
        </Grid>
        
        <Grid size={{sm:12, md: 6}}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 10 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              {cocktail.strDrink}
            </Typography>
            <Typography variant="body1">Categoría: {cocktail.strCategory}</Typography>
            <Typography variant="body1">Tipo: {cocktail.strAlcoholic}</Typography>
            <Typography variant="body1">Vaso: {cocktail.strGlass}</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "10px", fontSize: "20px" }}>
              <strong>Id_Cocktail:</strong> {cocktail.idDrink}
            </Typography>
            
            <Accordion sx={{ marginTop: 2 }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Ingredientes</Typography>
              </AccordionSummary>
              <AccordionDetails>
          <List dense>
            {Array.from({ length: 15 }).map((_, i) => {
              const ingrediente = cocktail[`strIngredient${i + 1}`];
              const cantidad = cocktail[`strMeasure${i + 1}`];
              return (
                ingrediente && ingrediente.trim() ? (
            <ListItem key={i}>
              <ListItemText primary={`• ${cantidad || ''} ${ingrediente}`} />
            </ListItem>
                ) : null
              );
            })}
          </List>
              </AccordionDetails>
            </Accordion>
            
            <Accordion sx={{ marginTop: 2 }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Instrucciones</Typography>
              </AccordionSummary>
              <AccordionDetails>
          <Typography variant="body2" sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
            {cocktail.strInstructions}
          </Typography>
              </AccordionDetails>
            </Accordion>
            
            {cocktail.strVideo && (
              <Typography variant="body2" sx={{ marginTop: 2 }}>
          <a href={cocktail.strVideo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
            Ver video en YouTube
          </a>
              </Typography>
            )}
            
            {cocktail.strImageSource && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
          <a href={cocktail.strImageSource} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'green' }}>
            Fuente de la imagen
          </a>
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
