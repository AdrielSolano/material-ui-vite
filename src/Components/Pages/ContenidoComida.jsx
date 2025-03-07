import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ContenidoComida({ data }) {
    console.log('Datos desde Padre', data);

    return (
        <div style={{ width: '80%', textAlign: 'center' }}>
            <br />
            {
                !data || data.length === 0 ? (
                    <Typography variant='h4' color='initial'>No hay datos</Typography>
                ) : (
                    <Grid container padding={4} spacing={3} >
                        {data.map((receta, index) => (
                            <Grid key={index} size={{ xs: 6, md: 4 }}>
                                <Paper elevation={3} sx={{ padding: 2, borderRadius: 10 }}>
                                    <img
                                        src={receta.strMealThumb}
                                        alt={receta.strMeal}
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                                        {receta.strMeal}
                                    </Typography>
                                    <Typography variant="body1">Categoría: {receta.strCategory}</Typography>
                                    <Typography variant="body1">País: {receta.strArea}</Typography>

                                    <Accordion sx={{ marginTop: 2 }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="h6">Ingredientes</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List dense>
                                                {Array.from({ length: 20 }).map((_, i) => {
                                                    const ingrediente = receta[`strIngredient${i + 1}`];
                                                    const cantidad = receta[`strMeasure${i + 1}`];
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


                                    <Accordion sx={{ marginTop: 2 }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="h6">Instrucciones</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="body2" sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                                {receta.strInstructions}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    {receta.strYoutube && (
                                        <Typography variant="body2" sx={{ marginTop: 2 }}>
                                            <a href={receta.strYoutube} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
                                                Ver video en YouTube
                                            </a>
                                        </Typography>
                                    )}

                                    {receta.strSource && (
                                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                                            <a href={receta.strSource} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'green' }}>
                                                Fuente de la receta
                                            </a>
                                        </Typography>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
}
