# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Hola! Soy Maca y este es mi proyecto de e-commerce desarrollado en REACT, es parte de mi curso de REACT de la carrera de Front end en Coderhouse.
La aplicación esta inspirada en la hamburguesería de mi familia. 

Permite a los usuarios navegar por los productos, ver sus detalles, agregarlos y eliminarlos del carrito, y finalizar la compra


Características:

Navegación:Los usuarios pueden navegar entre diferentes categorías de productos.
Detalles del producto: Los usuarios pueden ver los detalles de productos individuales.

Carrito de compras: Los usuarios pueden agregar productos al carrito, ver el contenido del carrito, eliminar uno, varios o todos los productos.
Finalización de compra: Los usuarios pueden proceder a la página de finalización de compra para completar su pedido.

Componentes
NavBar: Barra de navegación principal.
ItemListContainer: Contenedor para la lista de productos.
ItemDetailContainer: Contenedor para los detalles de un producto específico.
Carrito: Página del carrito de compras.
Finalizar: Página para finalizar la compra.
CartWidget: Widget del carrito, incluido en el NavBar.
Item: Componente para mostrar un producto individual.
ItemCount: Componente para seleccionar la cantidad de productos a comprar.
ItemList: Componente para mostrar una lista de productos.
ItemDetail: Componente para mostrar los detalles de un producto específico.
Footer: Pie de página de la aplicación.

Rutas
/: Página principal con el componente ItemListContainer.
/item/
: Detalles de un producto específico con el componente ItemDetailContainer.
/category/
: Lista de productos de una categoría específica con el componente ItemListContainer.
/carrito/
: Detalles de un producto en el carrito con el componente ItemDetailContainer.
/carrito: Página del carrito de compras con el componente Carrito.
/checkout: Página de finalización de compra con el componente Finalizar.
<Route path="/valoraciones" element={<Valoraciones />} />

Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Para manejo de rutas.
Context API: Para manejo del estado global de la aplicación (CartProvider).
React Hook Form: Biblioteca para el manejo de formularios.
useState: Hook para el manejo del estado local.
useEffect: Hook para manejar efectos secundarios en componentes funcionales.
Firebase: Para la autenticación de usuarios y la base de datos.
- Netlify: Para el despliegue y alojamiento de la aplicación.

Mejoras:
mostrar si hay stock - condicionar cantidad por stock
Filtrado y búsqueda: Autenticación de usuarios: Responsive Design: 

Inspiración
Esta aplicación está inspirada en la hamburguesería de mi familia. Refleja todo el esfuerzo y la dedicación que hemos puesto en nuestro negocio. Queremos llevar la esencia de nuestra hamburguesería a un formato digital accesible para todos. ¡Esperamos que la disfrutes tanto como nosotros disfrutamos crearla!

Contribución
¡Las contribuciones son más que bienvenidas! Si tienes alguna idea o mejora, no dudes en abrir un issue o un pull request para discutir cualquier cambio que quieras realizar.









autor:
macarena blanco

