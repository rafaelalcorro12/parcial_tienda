Descripción del parcial

Esta aplicación es un catálogo de productos desarrollado con Ionic, que permite a los usuarios explorar una lista de productos, filtrar por categorías, visualizar detalles y realizar compras a través de un carrito de compras.

Funcionalidades Principales

1. Pantalla de Inicio

Muestra un catálogo de productos obtenidos desde una API.

Incluye una lista desplegable para seleccionar categorías.

Permite ordenar los productos en orden ascendente o descendente.

Al seleccionar un producto, se redirige a su pantalla de detalles.

2. Pantalla de Detalles del Producto

Muestra información detallada del producto seleccionado.

Incluye un botón para agregar el producto al carrito de compras.

Muestra un mensaje tipo toast cuando se agrega un producto al carrito.

3. Carrito de Compras

Muestra los productos agregados al carrito.

Incluye un botón para eliminar productos del carrito.

Actualiza automáticamente el contador de productos.

Muestra un mensaje tipo toast al eliminar un producto.

4. Proceso de Compra (Checkout)

Permite ingresar datos del cliente y tarjeta de pago.

Muestra un mensaje toast indicando que el pago está en proceso.

Incluye un loader de 3 segundos antes de mostrar el resumen de la transacción.

Muestra un resumen de la compra con la factura generada.

Limpia el localStorage después de finalizar la compra.

Nota: Se intentó establecer una conexión que permitiera realizar la simulación de pago y generar la factura. Sin embargo, tras varios intentos y pruebas, no se encontró una solución rápida y efectiva para integrar esta funcionalidad de manera óptima dentro del tiempo disponible. Por esta razón, la simulación de pago no funciona y, por lo tanto, no se genera la factura, pero todas las demás funcionalidades de la aplicación están correctamente implementadas.
