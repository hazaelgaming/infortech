let carrito = [];

function agregarAlCarrito(nombre, codigo, precio) {
  carrito.push({ nombre, codigo, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  let carritoHTML = '';
  carrito.forEach((producto, index) => {
    carritoHTML += `<li>${producto.nombre} - ${producto.precio}€ <button onclick="eliminarDelCarrito(${index})">Eliminar</button></li>`;
  });
  document.getElementById('listaCarrito').innerHTML = carritoHTML;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function tramitarCompra() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  window.location.href = 'tramitacion.html';
}

window.onload = function() {
  if (window.location.pathname.endsWith('tramitacion.html')) {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    let totalHTML = '';
    let total = 0;
    carrito.forEach(producto => {
      total += producto.precio;
      totalHTML += `<li>${producto.nombre} - ${producto.precio}€</li>`;
    });
    document.getElementById('carritoProductos').innerHTML = totalHTML;
    document.getElementById('total').innerText = `Total: ${total}€`;
  }
};