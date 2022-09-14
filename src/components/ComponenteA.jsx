import React from 'react';
import { contactoClass } from '../models/contacto.class';
import Componenteb from './ComponenteB';

const Componentea = () => {

    const defaultContacto = new contactoClass('JEAN CARLOS', 'OVIEDO', 'jeankeeoviedo@gmail.com', false)



    return (
        <div>
            <Componenteb props={defaultContacto}></Componenteb>
        </div>
    );
}

export default Componentea;
