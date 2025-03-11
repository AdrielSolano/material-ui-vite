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

export default function DetalleComida() {
  let { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result = await response.json();
        if (result.meals && result.meals.length > 0) {
          setMeal(result.meals[0]);
        }
      } catch (error) {
        console.error("Error al obtener los detalles de la comida:", error);
      }
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) {
    return <Typography sx={{ textAlign: "center", marginTop: 4 }}>Cargando los datos...</Typography>;
  }

  return (
    <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
      <br />
      <Grid container padding={4} spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 10 }}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: '50%', borderRadius: '8px' }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>
              {meal.strMeal}
            </Typography>
            <Typography variant="body1">Categoría: {meal.strCategory}</Typography>
            <Typography variant="body1">País: {meal.strArea}</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "10px", fontSize: "20px" }}>
              <strong>Id_Comida:</strong> {meal.idMeal}
            </Typography>
            
            <Accordion sx={{ marginTop: 2 }} defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Ingredientes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {Array.from({ length: 20 }).map((_, i) => {
                    const ingrediente = meal[`strIngredient${i + 1}`];
                    const cantidad = meal[`strMeasure${i + 1}`];
                    return (
                      ingrediente && ingrediente.trim() ? (
                        <ListItem key={i}>
                          <ListItemText primary={`• ${cantidad} ${ingrediente}`} />
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
                  {meal.strInstructions}
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            {meal.strYoutube && (
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
                  Ver video en YouTube
                </a>
              </Typography>
            )}
            
            {meal.strSource && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <a href={meal.strSource} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'green' }}>
                  Fuente de la receta
                </a>
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
