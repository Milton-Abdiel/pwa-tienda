let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", () => {

    actualizarCarrito();

    const iconoCarrito = document.querySelector(".carrito");

    document
        .getElementById("cerrar-carrito")
        .addEventListener("click", cerrarCarrito);

    document
        .getElementById("vaciar-carrito")
        .addEventListener("click", vaciarCarrito);

    iconoCarrito.addEventListener("click", abrirCarrito);

});

function agregarCarrito(idProducto){

    const producto = productos.find(
        p => p.id === idProducto
    );

    carrito.push(producto);

    guardarCarrito();

    actualizarCarrito();
}

function actualizarCarrito(){

    document.getElementById(
        "contador-carrito"
    ).textContent = carrito.length;

    const lista = document.getElementById(
        "lista-carrito"
    );

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {

        total += producto.precio;

        lista.innerHTML += `
            <div class="item-carrito">
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio}</p>
            </div>
        `;

    });

    document.getElementById(
        "total-carrito"
    ).textContent = total.toFixed(2);
}

function abrirCarrito(){

    document
        .getElementById("panel-carrito")
        .classList.add("activo");
}

function cerrarCarrito(){

    document
        .getElementById("panel-carrito")
        .classList.remove("activo");
}

function vaciarCarrito(){

    carrito = [];

    guardarCarrito();

    actualizarCarrito();
}

function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}