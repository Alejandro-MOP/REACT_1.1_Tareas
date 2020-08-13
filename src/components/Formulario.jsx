import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4' ;
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const Boton = styled.button`
  background-color: #1565c0;
  color:#fff;
  transition: 1s all ease;
  font-size:1.5rem;
  
  &:hover{
    border-radius:3rem;
    color:#fff;
  }
`;


/*=====================================
      Formulario
===================================== */

const Formulario = ({crearTarea}) => {

    //Crear State de tareas
    const [tarea, actualizarTarea] = useState({
        materia: '',
        titulo: '',
        fecha: '',
        hora: '',
        descripcion: ''
    });

    //State para validación de formulario vacio
    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cada que se escribe en el input
    const actualizarState = e => {
        actualizarTarea({
            ...tarea,//creamos la copia del objeto
            [e.target.name]: e.target.value//[evento.etiqueta.nombre]:evento.etiqueta.valor
        })
    }    

    //Extraer valores
    //Generamos destructuring para eficiencia y pasar los valores a los inputs
    const {materia, titulo, fecha, hora, descripcion} = tarea;
    
    //Cuando usuario agregue la tarea
    const submitTarea = e => {
        e.preventDefault();//evita la accion por default en la url "../?mascota=&propietario=&fecha=&hora=&sintomas="
        
      //Validar inputs no vacios
      if(materia.trim() === '' || titulo.trim() === '' || fecha.trim() === '' || hora.trim() === '' || descripcion.trim() === ''){
          actualizarError(true);
          return;//salir de la funcion y mostrar mensaje de validacion
      }

      //Eliminar mensaje de error
      actualizarError(false);

      //Asignar id
      tarea.id = uuid();//|npm i uuid| intala este paquete de id's
      
      //Crear la tarea
      crearTarea(tarea);

      //Reiniciar el Form
      actualizarTarea({
          materia: '',
          titulo: '',
          fecha: '',
          hora: '',
          descripcion: ''
      });

    }
    

  return (
    <Fragment>
      <h2>Crear tarea</h2>

        { 
          (error)
            ? <p className="alerta-error">Todos los campos son obligatorios</p>
            : null
        }

      <form
        onSubmit={submitTarea}
      >
        <label>Materia</label>
        <input
          type="text"
          name="materia"
          className="u-full-width"
          placeholder="Nombre Materia"
          onChange={actualizarState}
          value={materia}
        />

        <label>Nombre de Tarea</label>
        <input
          type="text"
          name="titulo"
          className="u-full-width"
          placeholder="Nombre Tarea"
          onChange={actualizarState}
          value={titulo}
        />

        <label>Fecha</label>
        <input 
            type="date" 
            name="fecha" 
            className="u-full-width"
            onChange={actualizarState} 
            value={fecha}
        />

        <label>Hora</label>
            <input 
                type="time" 
                name="hora" 
                className="u-full-width"
                onChange={actualizarState} 
                value={hora}
            />

        <label>Descripción</label>
        <textarea 
            className="u-full-width" 
            name="descripcion"
            onChange={actualizarState}
            value={descripcion}
        ></textarea>

        <Boton
            type="submit"
            className="u-full-width"
        >Agregar tarea</Boton>

      </form>

    </Fragment>
  );
};

Formulario.propTypes = {
  crearTarea: PropTypes.func.isRequired
}


export default Formulario;
