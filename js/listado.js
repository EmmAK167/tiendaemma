//fetch

const listaProductos = document.querySelector("#lista-productos");

//con el async

const mostrarProductos = async () => {
  const resp = await fetch("./js/productos.json");
  const data = await resp.json();
  
  data.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${producto.nombre}</h2>
      <h5>$ ${producto.precio}</h5>
      <h5>${producto.categoria}</h5>
      `;
    listaProductos.append(li);
  });
}

mostrarProductos();

//sin el async
/*
fetch("./js/productos.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h2>${producto.nombre}</h2>
        <h5>$ ${producto.precio}</h5>
        <h5>${producto.categoria}</h5>
        `;
      listaProductos.append(li);
    });
  });
*/
//******************************************
/*
fetch("./js/productos.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = producto.nombre + " - $" + producto.precio;
        listaProductos.append(li);
    });
  })
*/

//*********************************************************************************** 
/*
const listaPokemon = document.querySelector("#lista-pokemon");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(data => {
        const pokemons = data.results;

        pokemons.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerText = pokemon.name;
            listaPokemon.append(li);
        });
    })
*/

//**********************************************************************************
/*
const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector("#lista-usuarios");

fetch(urlUsuarios)
    .then( (response) => response.json() )
    .then( (data) => {
        data.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = usuario.name;
            listaUsuarios.append(li);
        })
    } )
*/