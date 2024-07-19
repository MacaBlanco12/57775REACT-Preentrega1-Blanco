import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Finalizar = () => {

  const { cart, precioTotal, vaciar } = useContext(Context);

  const [pedidoId, setPedidoId] = useState("")
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: precioTotal()
    }
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id)
        vaciar();

      })
  }

  if (pedidoId){
    return  (
      <div className="containerPedido">
        <h1>¡GRACIAS POR TU COMPRA!</h1>
        <h5>Numero de pedido:{pedidoId}</h5>
      </div>
      
    )
  }

  return (
    <div className='containerDatos'>
      <h1>Datos de compra</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
        <input type="phone" placeholder='Ingresa tu telefono'{...register("telefono")} />
        <input type="email" placeholder='Ingresa tu e-mail'{...register("e-mail")} />
        <input type="text" placeholder='Ingresa tu direccion'{...register("direccion")} />
        <input type="text" placeholder='Ingresa una descrpcion (opcional)'{...register("descripcion")} />
        <input type="text" placeholder='Pedido especial'{...register("pedidoespecial")} />

        <button className='boton-item' type='submit'> Pedir </button>
      </form>


      
      <Link to="/" className='boton-item'>Ir al inicio</Link>
    </div>
  )
}

export default Finalizar