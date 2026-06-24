const CACHE_NAME = "milton-store-v1";

const urlsToCache = [
    "./",
    "index.html",
    "manifest.json",

    "style.css",

    "app.js",
    "carrito.js",
    "productos.js",

    "banner.png",

    "camisa_adidas.webp",
    "camisa_nike.jpg",
    "chaqueta_underarmour.jpg",
    "pantalon_levis.jfif",
    "reloj_deportivo.jfif",
    "zapatos_nike.jfif",
    "zapatos_pumas.jpg",

    "icon-192.png",
    "icon-512.png"
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
