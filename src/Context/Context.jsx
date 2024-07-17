import React, { createContext, useEffect, useState } from 'react';

export const Context = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || {
  items: [],
  total: 0,
  qty: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);

  const Agregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...cart.items];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    const total = nuevoCarrito.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0);
    const qty = nuevoCarrito.reduce((acc, curr) => acc + curr.cantidad, 0);

    setCart({
      items: nuevoCarrito,
      total,
      qty
    });
  };

  const precioTotal = () => {
    return cart.items.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  };

  const vaciar = () => {
    setCart({
      items: [],
      total: 0,
      qty: 0
    });
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider value={{ cart, Agregar, precioTotal, vaciar }}>
      {children}
    </Context.Provider>
  );
};
