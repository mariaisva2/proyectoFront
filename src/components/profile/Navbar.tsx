import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Cambiamos a Button

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#013B58' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        
        </Typography>
        <Button href="/perfil"
          variant="contained" 
          style={{ 
            backgroundColor: '#D2DEEC', 
            color: '#000', 
            borderRadius: '4px',  // Rectángulo con bordes mínimos
            padding: '5px 30px',  // Ajusta el padding para forma rectangular
            textTransform: 'none'  // Evita que el texto esté en mayúsculas
          }}
        >
          Crear
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
