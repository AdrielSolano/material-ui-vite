import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function ListaLibros({ mostrarLista }) {
  const [selectedCategoria, setSelectedCategoria] = useState('');

  const data = {
    store: {
      book: [
        { id: '1', category: 'reference', author: 'Nigel Rees', title: 'Sayings of the Century', price: 8.95, 'in-stock': true, sold: false },
        { id: '2', category: 'fiction', author: 'Evelyn Waugh', title: 'Sword of Honour', price: 12.99, 'in-stock': false, sold: true },
        { id: '3', category: 'fiction', author: 'Herman Melville', title: 'Moby Dick', price: 8.99, 'in-stock': true, sold: false },
        { id: '4', category: 'fiction', author: 'J. R. R. Tolkien', title: 'The Lord of the Rings', price: 22.99, 'in-stock': false, sold: true }
      ],
      bicycle: {
        id: '1',
        color: 'red',
        price: 19.95,
        'in-stock': true,
        sold: false
      }
    }
  };

  const handleChange = (event) => {
    setSelectedCategoria(event.target.value);
  };

  return (
    <div>
      <h2>
        Lista de {selectedCategoria === 'books' ? 'Libros' : selectedCategoria === 'bicycle' ? 'Bicicleta' : 'Biblioteca'}
      </h2>

      <FormControl fullWidth variant="standard">
        <InputLabel id="categoria-select-label">Seleccionar</InputLabel>
        <Select labelId="categoria-select-label" id="categoria-select" value={selectedCategoria} onChange={handleChange}>
          <MenuItem value="books">Libros</MenuItem>
          <MenuItem value="bicycle">Bicicleta</MenuItem>
        </Select>
      </FormControl>

      <Divider color="secondary" style={{ margin: '20px 0' }} />

      {selectedCategoria &&
        (mostrarLista ? (
          <ul>
            {selectedCategoria === 'books'
              ? data.store.book.map((book) => (
                  <li key={book.id}>
                    <strong> {book.id}</strong> - <strong>{book.title}</strong> - {book.author} (${book.price}) - {book['in-stock'] ? 'Disponible' : 'Agotado'}
                    <Button
                      onClick={() => alert(`Stock: ${book['in-stock'] ? 'Disponible' : 'Agotado'} | Vendido: ${book.sold ? 'Sí' : 'No'}`)}
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: 10 }}
                    >
                      Ver stock
                    </Button>
                  </li>
                ))
              : (
                <li key={data.store.bicycle.id}>
                  <strong>ID: {data.store.bicycle.id}</strong> - <strong>Bicicleta</strong> - {data.store.bicycle.color} (${data.store.bicycle.price}) - {data.store.bicycle['in-stock'] ? 'Disponible' : 'Agotado'}
                  <Button
                    onClick={() =>
                      alert(`Stock: ${data.store.bicycle['in-stock'] ? 'Disponible' : 'Agotado'} | Vendido: ${data.store.bicycle.sold ? 'Sí' : 'No'}`)
                    }
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 10 }}
                  >
                    Ver stock
                  </Button>
                </li>
              )}
          </ul>
        ) : (
          <table border="1" cellSpacing="0" cellPadding="10" width="100%">
            <thead>
              <tr>
                {selectedCategoria === 'books' ? (
                  <>
                    <th>ID</th>
                    <th>Categoría</th>
                    <th>Autor</th>
                    <th>Título</th>
                    <th>Precio</th>
                    <th>Acción</th>
                  </>
                ) : (
                  <>
                    <th>ID</th>
                    <th>Color</th>
                    <th>Precio</th>
                    <th>Acción</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {selectedCategoria === 'books'
                ? data.store.book.map((book) => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.category}</td>
                      <td>{book.author}</td>
                      <td>{book.title}</td>
                      <td>${book.price}</td>
                      <td>
                        <Button
                          onClick={() => alert(`Stock: ${book['in-stock'] ? 'Disponible' : 'Agotado'} | Vendido: ${book.sold ? 'Sí' : 'No'}`)}
                          variant="contained"
                          color="primary"
                        >
                          Ver stock
                        </Button>
                      </td>
                    </tr>
                  ))
                : (
                  <tr key={data.store.bicycle.id}>
                    <td>{data.store.bicycle.id}</td>
                    <td>{data.store.bicycle.color}</td>
                    <td>${data.store.bicycle.price}</td>
                    <td>
                      <Button
                        onClick={() =>
                          alert(`Stock: ${data.store.bicycle['in-stock'] ? 'Disponible' : 'Agotado'} | Vendido: ${data.store.bicycle.sold ? 'Sí' : 'No'}`)
                        }
                        variant="contained"
                        color="primary"
                      >
                        Ver stock
                      </Button>
                    </td>
                  </tr>
                )}
            </tbody>
          </table>
        ))}
    </div>
  );
}
