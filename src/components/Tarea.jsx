import React from 'react';
import PropTypes from 'prop-types';

const  Tarea = ({tarea,eliminarTarea}) => {
    
    const {materia, titulo, fecha, hora, descripcion} = tarea; //Destructuring
    
    return(

        <div className="tarea">
            <p>Materia: <span>{materia}</span></p>
            <p>Nombre de Tarea: <span>{titulo}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Descripción: <span>{descripcion}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarTarea(tarea.id) }
            >Eliminar &times;
            </button>
        </div>
    );
};
 
Tarea.propTypes = {
    tarea: PropTypes.object.isRequired,
    eliminarTareaa: PropTypes.func.isRequired
}
export default Tarea;