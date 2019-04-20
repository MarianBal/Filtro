
var productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

var listado = document.getElementById("lista-de-productos")


for (let i = 0; i < productos.length; i++) {
 
  var div = document.createElement("div")
  div.classList.add("producto")

  var titulo = document.createElement("p")
  titulo.classList.add("titulo")
  titulo.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(titulo)
  div.appendChild(imagen)

  listado.appendChild(div)
}


var botonDeFiltro = document.querySelector("button")

botonDeFiltro.onclick = function() {

  while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }

  var input = document.getElementsByTagName('input');
  var busqueda = input[0].value.toLowerCase();

  productos.map(function(cadaProducto){

    if(busqueda === cadaProducto.tipo || busqueda === cadaProducto.color || busqueda === cadaProducto.nombre.toLowerCase()){
      
      var div = document.createElement("div")
      div.classList.add("producto")

      var titulo = document.createElement("p")
      titulo.classList.add("titulo")
      titulo.textContent = cadaProducto.nombre
      
      var imagen = document.createElement("img");
      imagen.setAttribute('src', cadaProducto.img);

      div.appendChild(titulo)
      div.appendChild(imagen)

      listado.appendChild(div)


    }
  })

}


// Tarea: 
// Si el usuario escribe "zapato", mostrar los zapatos
// Si el usuario escribe "bota", mostrar las botas
// Si el usuario escribe "negro", mostrar el zapato y la bota negros
// Si el usuario escribe "azul", mostrar el zapato y la bota azules


// Para puntos extra:
// Dejar la pagina mas linda con CSS 
  