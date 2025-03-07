import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function PageDash() {
  return (
    <div>
      Soy dashboard
      <br />
      <Link to=''>Click para ver mas detalles de mexico</Link> <br />
      <Link to=''>Click para ver mas detalles de usa</Link> <br />
      <Link to=''>Click para ver mas detalles de honduras</Link> <br />

      <Button LinkComponent={Link} variant="container" color="success">
        ver mas detalles Irak
      </Button>
    </div>
  );
}