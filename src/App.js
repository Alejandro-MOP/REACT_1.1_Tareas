import React, { Fragment, useState, useEffect} from 'react';
import Formulario  from './components/Formulario';
import Tarea  from './components/Tarea';
import Footer from './components/Footer'



function App() {

  //tarea en local storage
  let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
    if(!tareasIniciales){
      tareasIniciales = [];
    }
    


  //Arreglo de tareas
  const [tareas, guardarTareas] = useState(tareasIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  //Podemos asociarlo al DOMloadContent JS || va estar escuchando los eventos que sucedan con [tarea]
  useEffect( () => {
     if (tareasIniciales){
        localStorage.setItem('tareas',JSON.stringify(tareas));
      } else {
        localStorage.setItem('tareas',JSON.stringify([]));
      }
  }, [tareas] );
  // eslint-disable-next-line
  
  //Funcion que toma las tarea actuales y agrega la nueva tarea
  const crearTarea = tarea => {
    guardarTareas([
      ...tareas,//guarda una copia del arreglo
      tarea//guarda la información de la nueva tarea
    ]);
  }

  //Función que elimina una tarea por su id
  const eliminarTarea = id => {
    const nuevasTareas = tareas.filter( tarea => tarea.id !== id );
    guardarTareas(nuevasTareas);
  }
  
  //Mensaje condicional
  const titulo = tareas.length === 0  ? 'No hay tarea'   : 'Administra tus tareas'
  
  return (
    <Fragment>
      <h1>Administrador de Tareas</h1>

            

      <div className="container">

        <div className="row">
          
          <div className="one-half column">
            
            <Formulario 
            crearTarea={crearTarea}
            />

          </div>

          <div className="one-half column">
            
            <h2>{titulo}</h2>            
            
            {tareas.map(tarea => (
              
              <Tarea 
                key={tarea.id}    
                tarea={tarea}
                eliminarTarea={eliminarTarea}
              />
              
            ))}
          </div>

        </div>
      </div>
        
      <Footer />
     

    </Fragment>
  );
}

export default App;
