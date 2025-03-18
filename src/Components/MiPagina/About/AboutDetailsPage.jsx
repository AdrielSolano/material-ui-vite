import React from 'react';
import { Paper, Typography, Container, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function AboutDetailsPage() {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'radial-gradient(125% 125% at 50% 10%, #000 25%, #8a8809 100%)',
      padding: '40px 20px'
    }}>
      <Container maxWidth="lg">
        <Paper elevation={6} sx={{ 
          borderRadius: 4, 
          padding: 4, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#8a8809',
            textAlign: 'center',
            marginBottom: 4
          }}>
            Nuestra Historia
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '18px', marginBottom: 3 }}>
            Fundada en 2025, nuestra plataforma nació de la pasión por el arte de la coctelería y la mixología. 
            Lo que comenzó como un pequeño proyecto para compartir recetas entre amigos, 
            ha crecido hasta convertirse en una comunidad vibrante de entusiastas de los cócteles de todos los niveles, 
            desde principiantes hasta bartenders profesionales.
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ fontSize: '18px', marginBottom: 3 }}>
            Trabajamos en colaboración con mixólogos de todo el mundo para ofrecer recetas auténticas, 
            técnicas profesionales y consejos expertos que elevarán tus habilidades de coctelería.
          </Typography>
          
          <Divider sx={{ margin: '30px 0' }} />
          
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#8a8809',
            textAlign: 'center',
            margin: '30px 0'
          }}>
            ¿Por qué elegirnos?
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    backgroundColor: '#8a8809', 
                    margin: '0 auto 16px' 
                  }}>
                    <LocalBarIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Recetas Diversas
                  </Typography>
                  <Typography variant="body2">
                    Más de 1,000 recetas verificadas de cócteles clásicos y modernos de todo el mundo.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    backgroundColor: '#8a8809', 
                    margin: '0 auto 16px' 
                  }}>
                    <EmojiEventsIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Calidad Superior
                  </Typography>
                  <Typography variant="body2">
                    Cada receta es probada y aprobada por nuestro equipo de expertos en coctelería.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    backgroundColor: '#8a8809', 
                    margin: '0 auto 16px' 
                  }}>
                    <GroupsIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Comunidad
                  </Typography>
                  <Typography variant="body2">
                    Únete a miles de entusiastas que comparten su pasión por los cócteles cada día.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
                <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                  <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    backgroundColor: '#8a8809', 
                    margin: '0 auto 16px' 
                  }}>
                    <AutoAwesomeIcon fontSize="large" />
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    Innovación
                  </Typography>
                  <Typography variant="body2">
                    Constantemente agregamos nuevas recetas y funcionalidades para mejorar tu experiencia.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          <Divider sx={{ margin: '30px 0' }} />
          
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 'bold', 
            color: '#8a8809',
            textAlign: 'center',
            margin: '30px 0'
          }}>
            Nuestro Equipo
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '18px', 
            marginBottom: 3,
            textAlign: 'center'
          }}>
            Somos un grupo de apasionados por la mixología, con experiencia en bares de todo el mundo.
            Nuestro objetivo es democratizar el conocimiento sobre cócteles y hacer que el arte de 
            preparar bebidas deliciosas sea accesible para todos.
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}