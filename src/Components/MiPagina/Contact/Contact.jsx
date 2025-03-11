import React, { useState } from "react";
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Radio, RadioGroup, Slider, FormLabel, TextareaAutosize, Box } from "@mui/material";

export default function Formulario() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        country: "",
        comments: "",
        satisfaction: 5,
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Nombre" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Teléfono" name="phone" type="tel" value={formData.phone} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Fecha de Nacimiento" name="dateOfBirth" type="date" InputLabelProps={{ shrink: true }} value={formData.dateOfBirth} onChange={handleChange} margin="normal" />

                <FormControl fullWidth margin="normal">
                    <InputLabel>País</InputLabel>
                    <Select name="country" value={formData.country} onChange={handleChange}>
                        <MenuItem value="mx">México</MenuItem>
                        <MenuItem value="es">España</MenuItem>
                        <MenuItem value="ar">Argentina</MenuItem>
                        <MenuItem value="co">Colombia</MenuItem>
                        <MenuItem value="pe">Perú</MenuItem>
                    </Select>
                </FormControl>

                <FormControl component="fieldset" margin="normal">
                    <FormLabel>Género</FormLabel>
                    <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                        <FormControlLabel value="other" control={<Radio />} label="Otro" />
                    </RadioGroup>
                </FormControl>

                <Typography gutterBottom>Nivel de satisfacción (1-10)</Typography>
                <Slider name="satisfaction" value={formData.satisfaction} onChange={(e, value) => setFormData({ ...formData, satisfaction: value })} min={1} max={10} valueLabelDisplay="auto" />

                <TextareaAutosize minRows={4} placeholder="Comentarios" style={{ width: "100%", marginTop: 16 }} name="comments" value={formData.comments} onChange={handleChange} />

                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button type="submit" variant="contained" color="primary">Enviar</Button>
                    <Button type="reset" variant="outlined" color="secondary" onClick={() => setFormData({})}>Reiniciar</Button>
                </Box>
            </form>
        </Container>
    );
}