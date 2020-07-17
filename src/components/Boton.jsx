import React from 'react';
import Button from '@material-ui/core/Button';

const Boton = ({ accionContador, name }) => (
  <Button className="Boton-espaciado" variant="contained" color="primary" onClick={accionContador}>
    {name}
  </Button>
);
 
export default Boton;