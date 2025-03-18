import React from 'react';
import { Paper, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AboutPage() {
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
          padding: 4, 
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#8a8809'
          }}>
            Sobre Nosotros
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '18px', marginBottom: 4 }}>
            Somos una plataforma dedicada a la exploración y descubrimiento de cócteles de todo el mundo. 
            Nuestra misión es ayudarte a encontrar la bebida perfecta para cada ocasión, 
            ya sea una reunión con amigos, una cena especial o simplemente para disfrutar en casa.
          </Typography>
          
          <Button 
            component={Link} 
            to="/about/details" 
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
            Conocer Más
          </Button>
        </Paper>
      </Container>
    </div>
  );
}