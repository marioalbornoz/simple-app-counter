import React from 'react';

const Button = ({accionContador, name}) => (
    <button
        onClick = { accionContador }
    >
        {name}
    </button>
);
 
export default Button;