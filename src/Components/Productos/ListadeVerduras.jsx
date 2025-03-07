import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ListaProductosDialo from './ListaProductoDialo';

export default function ListadeVerduras() {
  const [selectedVerdura, setSelectedVerdura] = useState('');

  const data = {
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95,
                "instock": true,
                "sold": true
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99,
                "instock": false,
                "sold": true
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99,
                "instock": true,
                "sold": false
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99,
                "instock": false,
                "sold": false
            }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95,
            "instock": true,
            "sold": false
        }
        }
    }
  
  const verduras = [
    
    { id: '1', nombre: 'Lechuga', descripcion: 'Verdura romanita 100% mexicano...', precio: 23, cantidad: 12 },
    { id: '2', nombre: 'Tomate', descripcion: 'Verdura 100% mexicano...', precio: 34, cantidad: 20 },
    { id: '3', nombre: 'Papa', descripcion: 'Verdura 100% mexicano...', precio: 13, cantidad: 36 },
    { id: '4', nombre: 'Zanahoria', descripcion: 'Verdura 100% mexicano...', precio: 10, cantidad: 100 },
    { id: '5', nombre: 'Cebolla', descripcion: 'Verdura 100% mexicano...', precio: 36, cantidad: 50 },
    { id: '6', nombre: 'Espinaca', descripcion: 'Verdura 100% mexicano...', precio: 19, cantidad: 95 }
  ];

  const handleChange = (event) => {
    setSelectedVerdura(event.target.value);
  };

  return (
    <div>
      <h2>Lista de Verduras</h2>
      {verduras.length > 0 ? (
        verduras.map((data) => (
          <div key={data.id}>
            <ul>
              <li>
                {data.id} | {data.nombre} | {data.descripcion} | ${data.precio}{' '}
                <Button
                  onClick={() => alert(data.cantidad)}
                  variant="contained"
                  color="primary"
                >
                  Ver stock
                </Button>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}

      <Divider color='secondary' />

      <h2>Tabla de Verduras</h2>
      {verduras.length > 0 ? (
        <table border="1" cellSpacing="0" cellPadding="10" width="100%"> 
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {verduras.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.nombre}</td>
                <td>{data.descripcion}</td>
                <td>${data.precio}</td>
                <td>
                  <Button
                    onClick={() => alert(data.cantidad)}
                    variant="contained"
                    color="primary"
                  >
                    Ver stock
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (  
        <p>No hay datos disponibles</p>
      )}

      <Divider color='secondary' style={{ margin: '20px 0' }} />
      
      <h2>Seleccionar Verdura</h2>
      <FormControl fullWidth variant="standard">
        <InputLabel id="verdura-select-label">Verdura</InputLabel>
        <Select
          labelId="verdura-select-label"
          id="verdura-select"
          value={selectedVerdura}
          onChange={handleChange}
        >
          {verduras.map((verdura) => (
            <MenuItem key={verdura.id} value={verdura.id}>{verdura.nombre}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider color='primary' style={{ margin: '20px 0' }} />

      <ListaProductosDialo
      data={data.store}
      />

    </div>
  );
}
