import React, { useState } from "react";
import { 
  Container, TextField, Button, Typography, FormControl, 
  InputLabel, Select, MenuItem, Checkbox, FormControlLabel, 
  Radio, RadioGroup, Slider, FormLabel, Box, Paper, 
  Grid, Divider, Alert, Snackbar
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function ContactFormPage() {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        country: "",
        city: "",
        subject: "",
        contactReason: "",
        preferredContact: "email",
        subscribe: false,
        comments: "",
        satisfaction: 5,
        favoriteCocktail: "",
        experienceLevel: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'checkbox' ? checked : value 
        });
        
        // Clear error when field is updated
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
        if (!formData.lastName.trim()) newErrors.lastName = "El apellido es obligatorio";
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) newErrors.email = "Email no válido";
        
        const phoneRegex = /^\d{10}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = "Formato de teléfono inválido (10 dígitos)";
        
        if (!formData.subject) newErrors.subject = "El asunto es obligatorio";
        if (!formData.contactReason) newErrors.contactReason = "La razón de contacto es obligatoria";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (validateForm()) {
            console.log("Form Submitted", formData);
            setSubmitted(true);
            // En un caso real, aquí enviarías los datos a tu backend
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            dateOfBirth: "",
            gender: "",
            country: "",
            city: "",
            subject: "",
            contactReason: "",
            preferredContact: "email",
            subscribe: false,
            comments: "",
            satisfaction: 5,
            favoriteCocktail: "",
            experienceLevel: "",
        });
        setErrors({});
    };

    const handleCloseSnackbar = () => {
        setSubmitted(false);
    };

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: 'radial-gradient(125% 125% at 50% 10%, #000 25%, #8a8809 100%)',
            padding: '40px 20px'
        }}>
            <Container maxWidth="md">
                <Paper elevation={6} sx={{ 
                    borderRadius: 4, 
                    padding: { xs: 3, md: 5 }, 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}>
                    <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: '#8a8809', fontWeight: 'bold', mb: 4 }}>
                        Formulario de Contacto
                    </Typography>
                    
                    <Divider sx={{ mb: 4 }} />
                    
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h6" gutterBottom sx={{ color: '#8a8809' }}>
                            Información Personal
                        </Typography>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Nombre" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                    required
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Apellido" 
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                    required
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Email" 
                                    name="email" 
                                    type="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                    required
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Teléfono" 
                                    name="phone" 
                                    type="tel" 
                                    value={formData.phone} 
                                    onChange={handleChange} 
                                    margin="normal"
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    placeholder="1234567890"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Fecha de Nacimiento" 
                                    name="dateOfBirth" 
                                    type="date" 
                                    InputLabelProps={{ shrink: true }} 
                                    value={formData.dateOfBirth} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl component="fieldset" margin="normal" fullWidth>
                                    <FormLabel>Género</FormLabel>
                                    <RadioGroup 
                                        row 
                                        name="gender" 
                                        value={formData.gender} 
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                                        <FormControlLabel value="other" control={<Radio />} label="Otro" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h6" gutterBottom sx={{ color: '#8a8809' }}>
                            Ubicación
                        </Typography>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>País</InputLabel>
                                    <Select 
                                        name="country" 
                                        value={formData.country} 
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="mx">México</MenuItem>
                                        <MenuItem value="es">España</MenuItem>
                                        <MenuItem value="ar">Argentina</MenuItem>
                                        <MenuItem value="co">Colombia</MenuItem>
                                        <MenuItem value="pe">Perú</MenuItem>
                                        <MenuItem value="cl">Chile</MenuItem>
                                        <MenuItem value="us">Estados Unidos</MenuItem>
                                        <MenuItem value="other">Otro</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Ciudad" 
                                    name="city" 
                                    value={formData.city} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                />
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h6" gutterBottom sx={{ color: '#8a8809' }}>
                            Detalles de Contacto
                        </Typography>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Asunto" 
                                    name="subject" 
                                    value={formData.subject} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                    required
                                    error={!!errors.subject}
                                    helperText={errors.subject}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth margin="normal" required error={!!errors.contactReason}>
                                    <InputLabel>Razón de Contacto</InputLabel>
                                    <Select 
                                        name="contactReason" 
                                        value={formData.contactReason} 
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="question">Pregunta</MenuItem>
                                        <MenuItem value="suggestion">Sugerencia</MenuItem>
                                        <MenuItem value="complaint">Queja</MenuItem>
                                        <MenuItem value="recipe">Compartir Receta</MenuItem>
                                        <MenuItem value="business">Propuesta de Negocio</MenuItem>
                                        <MenuItem value="other">Otro</MenuItem>
                                    </Select>
                                    {errors.contactReason && (
                                        <Typography variant="caption" color="error">
                                            {errors.contactReason}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <FormControl component="fieldset" margin="normal" fullWidth>
                                    <FormLabel>Método de contacto preferido</FormLabel>
                                    <RadioGroup 
                                        row 
                                        name="preferredContact" 
                                        value={formData.preferredContact} 
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="email" control={<Radio />} label="Email" />
                                        <FormControlLabel value="phone" control={<Radio />} label="Teléfono" />
                                        <FormControlLabel value="whatsapp" control={<Radio />} label="WhatsApp" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={formData.subscribe} 
                                            onChange={handleChange} 
                                            name="subscribe" 
                                            color="primary"
                                        />
                                    }
                                    label="Deseo recibir noticias y actualizaciones sobre nuevas recetas"
                                />
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h6" gutterBottom sx={{ color: '#8a8809' }}>
                            Experiencia con Cócteles
                        </Typography>
                        
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField 
                                    fullWidth 
                                    label="Cóctel Favorito" 
                                    name="favoriteCocktail" 
                                    value={formData.favoriteCocktail} 
                                    onChange={handleChange} 
                                    margin="normal" 
                                    placeholder="Ej. Margarita, Mojito, etc."
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Nivel de Experiencia</InputLabel>
                                    <Select 
                                        name="experienceLevel" 
                                        value={formData.experienceLevel} 
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="beginner">Principiante</MenuItem>
                                        <MenuItem value="intermediate">Intermedio</MenuItem>
                                        <MenuItem value="advanced">Avanzado</MenuItem>
                                        <MenuItem value="professional">Profesional</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            
                            <Grid item xs={12}>
                                <Box sx={{ my: 2 }}>
                                    <Typography gutterBottom>
                                        Nivel de satisfacción con nuestra plataforma (1-10)
                                    </Typography>
                                    <Slider 
                                        name="satisfaction" 
                                        value={formData.satisfaction} 
                                        onChange={(e, value) => setFormData({ ...formData, satisfaction: value })} 
                                        min={1} 
                                        max={10} 
                                        valueLabelDisplay="auto"
                                        marks={[
                                            { value: 1, label: '1' },
                                            { value: 5, label: '5' },
                                            { value: 10, label: '10' }
                                        ]}
                                        sx={{
                                            color: '#8a8809',
                                            '& .MuiSlider-thumb': {
                                                borderRadius: '50%',
                                                backgroundColor: '#8a8809',
                                            }
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h6" gutterBottom sx={{ color: '#8a8809' }}>
                            Comentarios Adicionales
                        </Typography>
                        
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Escribe tus comentarios, sugerencias o preguntas aquí"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            margin="normal"
                        />
                        
                        <Box mt={4} display="flex" justifyContent="space-between">
                            <Button 
                                type="reset" 
                                variant="outlined" 
                                color="secondary" 
                                onClick={handleReset}
                                startIcon={<RestartAltIcon />}
                                sx={{
                                    borderRadius: '8px',
                                    padding: '10px 20px'
                                }}
                            >
                                Reiniciar
                            </Button>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                endIcon={<SendIcon />}
                                sx={{
                                    backgroundColor: '#8a8809',
                                    '&:hover': {
                                        backgroundColor: '#959a51',
                                    },
                                    borderRadius: '8px',
                                    padding: '10px 30px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
            
            <Snackbar 
                open={submitted} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.
                </Alert>
            </Snackbar>
        </div>
    );
}