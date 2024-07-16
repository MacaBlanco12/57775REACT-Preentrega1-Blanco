import { createContext, useEffect, useState } from "react";



export const Context = createContext();

const carritoInicial =JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const Agregar = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito]
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)


        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
        
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciar = () => {
        setCarrito([])

    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    return (
        <Context.Provider value={{
            carrito,
            Agregar,
            precioTotal,
            cantidadEnCarrito,
            vaciar
        }}>
            {children}
        </Context.Provider>
    )
}