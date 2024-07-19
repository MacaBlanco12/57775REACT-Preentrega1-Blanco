import React from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ListaValoraciones from './ListaValoraciones';
import { Link } from 'react-router-dom';

const Valoraciones = () => {
  const { register, handleSubmit, reset } = useForm();

  // Función para enviar los datos del formulario
  const enviar = async (data) => {
    const valoracion = {
      cliente: data
    };
    const valoracionesRef = collection(db, "valoraciones");

    try {
      await addDoc(valoracionesRef, valoracion);
      console.log('Formulario enviado, reseteando...');
      reset(); // Restablece el formulario después de enviar
    } catch (error) {
      console.error("Error al agregar la valoración:", error);
    }
  };

  return (
    <div className='container'>
      <h1>Compartí tu experiencia en Motley!</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder='Ingresa tu nombre'
          {...register("nombre", { required: true })}
        />
        <input
          type="text"
          placeholder='Contanos tu experiencia'
          {...register("experiencia", { required: true })}
        />
        <button className='enviar' type='submit'>Valorar</button>
      </form>
      <ListaValoraciones />
      <Link to="/">Ir al inicio</Link>
    </div>
  );
};

export default Valoraciones;
