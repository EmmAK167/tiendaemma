// JUEGOS
const productos = [
    // Carrera
    {
        id: "carrera-01",
        titulo: "Forza Horizon 5",
        imagen: "./img/carrera/01.jpg",
        categoria: {
            nombre: "Carrera",
            id: "carrera"
        },
        precio: 1000
    },
    {
        id: "carrera-02",
        titulo: "Need for Speed Heat",
        imagen: "./img/carrera/02.jpg",
        categoria: {
            nombre: "Carrera",
            id: "carrera"
        },
        precio: 1000
    },
    {
        id: "carrera-03",
        titulo: "Hot Wheels Unleash",
        imagen: "./img/carrera/03.jpg",
        categoria: {
            nombre: "Carrera",
            id: "carrera"
        },
        precio: 1000
    },
    {
        id: "carrera-04",
        titulo: "Assetto Corsa Competizione",
        imagen: "./img/carrera/04.jpg",
        categoria: {
            nombre: "Carrera",
            id: "carrera"
        },
        precio: 1000
    },
    {
        id: "carrera-05",
        titulo: "Ride 4",
        imagen: "./img/carrera/05.jpg",
        categoria: {
            nombre: "Carrera",
            id: "carrera"
        },
        precio: 1000
    },
    // Rol
    {
        id: "rol-01",
        titulo: "Elder Ring",
        imagen: "./img/rol/01.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-02",
        titulo: "God of War",
        imagen: "./img/rol/02.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-03",
        titulo: "Persona 5 Royal",
        imagen: "./img/rol/03.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-04",
        titulo: "Assassins Creed Valhalla",
        imagen: "./img/rol/04.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-05",
        titulo: "Dying Light",
        imagen: "./img/rol/05.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-06",
        titulo: "Monster Hunter Rise",
        imagen: "./img/rol/06.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-07",
        titulo: "Crusader Kings III",
        imagen: "./img/rol/07.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    {
        id: "rol-08",
        titulo: "Lost Ark",
        imagen: "./img/rol/08.jpg",
        categoria: {
            nombre: "Rol",
            id: "rol"
        },
        precio: 1000
    },
    // Lucha
    {
        id: "lucha-01",
        titulo: "Naraka",
        imagen: "./img/lucha/01.jpg",
        categoria: {
            nombre: "Lucha",
            id: "lucha"
        },
        precio: 1000
    },
    {
        id: "lucha-02",
        titulo: "Guilty Gear Strive",
        imagen: "./img/lucha/02.jpg",
        categoria: {
            nombre: "Lucha",
            id: "lucha"
        },
        precio: 1000
    },
    {
        id: "lucha-03",
        titulo: "Dragon Ball Z Kakarot",
        imagen: "./img/lucha/03.jpg",
        categoria: {
            nombre: "Lucha",
            id: "lucha"
        },
        precio: 1000
    },
    {
        id: "lucha-04",
        titulo: "Street Fighter V",
        imagen: "./img/lucha/04.jpg",
        categoria: {
            nombre: "Lucha",
            id: "lucha"
        },
        precio: 1000
    },
    {
        id: "lucha-05",
        titulo: "Tekken 7",
        imagen: "./img/lucha/05.jpg",
        categoria: {
            nombre: "Lucha",
            id: "lucha"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
let botonAlert = document.querySelector(".alert-btn"); //libreria

//libreria
botonAlert.addEventListener("click", function () {
    Swal.fire({
        title: 'Ingresa tu usuario',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Listo',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Por favor ingresa un usuario y contraseña validos`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Usuario: ${result.value.login}
          Contraseña: ${result.value.password}
        `.trim())
      })
})


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}