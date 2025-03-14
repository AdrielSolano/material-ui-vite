import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

export default function ContenidoCocktail({ data }) {
    console.log('Datos desde API', data);

    return (
        <div style={{ width: '80%', textAlign: 'center' }}>
            <br />
            {
                !data || data.length === 0 ? (
                    <Typography variant='h4' color='initial'>No hay datos</Typography>
                ) : (
                    <Grid container padding={4} spacing={3} >
                        {data.map((cocktail, index) => (
                            <Grid key={index} size={{ xs: 6, md: 4 }}>
                                <Paper elevation={3} sx={{ padding: 2, borderRadius: 10 }}>
                                    <img
                                        src={cocktail.strDrinkThumb}
                                        alt={cocktail.strDrink}
                                        style={{ width: '100%', borderRadius: '8px' }}
                                    />
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                                        {cocktail.strDrink}
                                    </Typography>
                                    <Typography variant="body1">Categoría: {cocktail.strCategory}</Typography>
                                    <Typography variant="body1">Tipo: {cocktail.strAlcoholic}</Typography>
                                    <Typography variant="body1">Vaso: {cocktail.strGlass}</Typography>
                                    <Typography variant="body1" sx={{ textAlign: "center", marginBottom: "10px", fontSize: "12px" }}>
                                        <strong>Id_Bebida:</strong> {cocktail.idDrink}
                                    </Typography>
                                    <Accordion sx={{ marginTop: 2 }}>
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

                                    <Accordion sx={{ marginTop: 2 }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="h6">Instrucciones</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="body2" sx={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                                {cocktail.strInstructions}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    {cocktail.strImageSource && (
                                        <Typography variant="body2" sx={{ marginTop: 1 }}>
                                            <a href={cocktail.strImageSource} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'green' }}>
                                                Fuente de la imagen
                                            </a>
                                        </Typography>
                                    )}
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#8a8809',
                                            marginTop: "15px",
                                            width: "100%",
                                            fontSize: "16px"
                                        }}
                                        LinkComponent={Link}
                                        to={`/recetas/${cocktail.idDrink}`}
                                    >
                                        Ver más
                                    </Button>


                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
}
