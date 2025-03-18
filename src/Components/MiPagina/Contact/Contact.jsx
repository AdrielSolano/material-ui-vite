import React from 'react';
import { Paper, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
  return (
    <div style={{
      width: '100%',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(125% 125% at 50% 10%, #000 25%, #8a8809 100%)',
      padding: '20px'
    }}>
      <Container maxWidth="md">
        <Paper elevation={6} sx={{ 
          borderRadius: 4, 
          padding: 5, 
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}>
          <EmailIcon sx={{ fontSize: 60, color: '#8a8809', mb: 2 }} />
          
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#8a8809'
          }}>
            Contáctanos
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '18px', marginBottom: 4 }}>
            ¿Tienes preguntas, sugerencias o quieres compartir tu receta favorita? 
            Nos encantaría escucharte. Nuestro equipo está listo para ayudarte 
            con cualquier consulta relacionada con cócteles y mixología.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
            <Button 
              component={Link} 
              to="/contact/form" 
              variant="contained" 
              size="large"
              sx={{
                backgroundColor: '#8a8809',
                '&:hover': {
                  backgroundColor: '#959a51',
                },
                padding: '10px 30px',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              Formulario de Contacto
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}