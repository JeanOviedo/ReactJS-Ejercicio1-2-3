import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { contactoClass } from '../models/contacto.class';
import Logo from '../logo.svg';
const Componenteb = ({props}) => {

    const [estado, ActualizarEstado] = useState(props.conectado);

    return (
        <div>
            <img src={Logo} alt="Logo.."></img>
            <h4>Nombre : { props.nombre }</h4>
            <h4>Apellido : { props.apellido }</h4>
            <h4>Email : { props.email }</h4>
            <h4>{estado?"Contacto En Línea":"Contacto No Disponible"}</h4>
            <button onClick={() => ActualizarEstado(!estado)}>Actualizar Estado</button>
        </div>
    );
};


Componenteb.propTypes = {
    props: PropTypes.instanceOf(contactoClass )
};


export default Componenteb;
