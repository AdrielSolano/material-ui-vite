import React, {useState} from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListadeVerduras from './Productos/ListadeVerduras'

const ListaProductos = () => {

    const [home, setHome] = useState(false);
    const changestate = () => {
        setHome(!home);
    }
console.log('Tu switch esta:', home)
  return (
    <div>
      <h1>Lista de productos</h1>
      <Switch
        value={home}
        checked={home}
        onChange={ changestate }
        inputProps={{ "aria-label": '' }}
      />
      
        <Typography variant={home ? "h2":"h3"} color={home ? "success":"error"}>{home ? "Encedido":"Apagado"}</Typography>
        
      <Divider color='secondary'/>
      <ListadeVerduras/>
      

    </div>
  )
}

export default ListaProductos