document.addEventListener("DOMContentLoaded", () => {

    mostrarProductos(productos);

    // BOTÓN VER PRODUCTOS
    const btnProductos = document.getElementById("btn-productos");

    btnProductos.addEventListener("click", () => {

        document.querySelector(".productos").scrollIntoView({
            behavior: "smooth"
        });

    });

    // BUSCADOR
    const buscador = document.getElementById("buscador");

    buscador.addEventListener("keyup", () => {

        const texto = buscador.value.toLowerCase();

        const resultado = productos.filter(producto =>

            producto.nombre.toLowerCase().includes(texto) ||
            producto.marca.toLowerCase().includes(texto) ||
            producto.categoria.toLowerCase().includes(texto)

        );

        mostrarProductos(resultado);

    });

    // FILTRO MARCAS
    const botonesMarca = document.querySelectorAll(".marca-btn");

    botonesMarca.forEach(boton => {

        boton.addEventListener("click", () => {

            const marca = boton.dataset.marca;

            if(marca === "Todos"){
                mostrarProductos(productos);
                return;
            }

            const filtrados = productos.filter(
                producto => producto.marca === marca
            );

            mostrarProductos(filtrados);

        });

    });

    // FILTRO CATEGORÍAS
    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach(categoria => {

        categoria.addEventListener("click", () => {

            const tipo = categoria.dataset.categoria;

            if(tipo === "Todos"){
                mostrarProductos(productos);
                return;
            }

            const filtrados = productos.filter(
                producto => producto.categoria === tipo
            );

            mostrarProductos(filtrados);

        });

    });

});

function mostrarProductos(listaProductos){

    const contenedor = document.getElementById(
        "contenedor-productos"
    );

    contenedor.innerHTML = "";

    if(listaProductos.length === 0){

        contenedor.innerHTML =
        "<h3>No se encontraron productos</h3>";

        return;
    }

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio}</p>

                <button onclick="agregarCarrito(${producto.id})">
                    Agregar al carrito
                </button>

            </div>
        `;

    });

}