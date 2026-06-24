const CACHE_NAME = "milton-store-v1";

const urlsToCache = [
    "./",
    "manifest.json",

    "css/style.css",

    "js/app.js",
    "js/carrito.js",
    "js/productos.js",

    "img/banner.png",

    "img/camisa_adidas.webp",
    "img/camisa_nike.jpg",
    "img/chaqueta_underarmour.jpg",
    "img/pantalon_levis.jfif",
    "img/reloj_deportivo.jfif",
    "img/zapatos_nike.jfif",
    "img/zapatos_pumas.jpg",

    "img/icon-192.png",
    "img/icon-512.png"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request);

            })

    );

});
