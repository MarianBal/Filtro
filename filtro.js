
var productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listado = document.getElementById("lista-de-productos")

function filtrar(producto){

      const divContenedor = document.createElement('div');
      divContenedor.classList.add('contenedorProducto');

      const contenedorFoto = document.createElement('div');
      contenedorFoto.classList.add('foto')

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);

      contenedorFoto.appendChild(imagen)
      divContenedor.appendChild(contenedorFoto)

      const titulo = document.createElement('div');
      titulo.classList.add('titulo')
      titulo.textContent = producto.nombre;

      divContenedor.appendChild(titulo);
      listado.appendChild(divContenedor);

}


for (let i = 0; i < productos.length; i++) {
 
  filtrar(productos[i]);

}

const botonDeFiltro = document.querySelector("button")

botonDeFiltro.onclick = function() {

  while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }

  const input = document.getElementsByTagName('input');
  const busqueda = input[0].value.toLowerCase();

  productos.map(function(cadaProducto){

    if(busqueda === cadaProducto.tipo || busqueda === cadaProducto.color || busqueda === cadaProducto.nombre.toLowerCase()){
      
      filtrar(cadaProducto);

    }
  })

}

//Me aburre tener que ir con el mouse a hacer click sobre el botón.

document.onkeydown = function (e){
  if(e.keyCode === 13){

    while (listado.firstChild) {
      listado.removeChild(listado.firstChild);
    }
  
    const input = document.getElementsByTagName('input');
    const busqueda = input[0].value.toLowerCase();
  
    productos.map(function(cadaProducto){
  
      if(busqueda === cadaProducto.tipo || busqueda === cadaProducto.color || busqueda === cadaProducto.nombre.toLowerCase()){
        
        filtrar(cadaProducto);
  
      }
    })
  }
}



// Tarea: 
// Si el usuario escribe "zapato", mostrar los zapatos
// Si el usuario escribe "bota", mostrar las botas
// Si el usuario escribe "negro", mostrar el zapato y la bota negros
// Si el usuario escribe "azul", mostrar el zapato y la bota azules


// Para puntos extra:
// Dejar la pagina mas linda con CSS 
  