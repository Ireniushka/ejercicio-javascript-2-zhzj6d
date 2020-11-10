window.addEventListener("load", onLoad);

function onLoad() {
  /*Primera lista*/

  ///Añadir class:"element-n" en la lista 1:

  let elementInicial = document.getElementsByClassName('selected').item(0);
  
  elementInicial.classList.add("element-3");
  elementInicial.parentNode.previousElementSibling.firstChild.classList.add("element-2");
  elementInicial.parentNode.previousElementSibling.previousElementSibling.firstChild.classList.add("element-1");
  elementInicial.parentNode.nextElementSibling.firstChild.classList.add("element-4");
  elementInicial.parentNode.nextElementSibling.nextElementSibling.firstChild.classList.add("element-5");

  ///Eliminar elementos pares:

  //Se declara lista con los elementos
  let lista = document.querySelectorAll("li")
  //Se recorre la lista
  for(let i = 0; i<lista.length ;i++){
    //Si es un elemento par, se elimina
    if(i%2==1){
      lista[i].remove();
    }
  }

  /*Segunda lista*/
  //Se crean dos listas, una guarda los elementos de la lista 1 y la otra la lista 2
  let lista2 = document.getElementById("list1").children;  
  let lista2copiada = document.getElementById("list2");

  //Se recorre la primera lisa y se va copiando cada elemento en la segunda lista
  for(let i = 0; i<lista2.length; i++){
    let copia = lista2[i].cloneNode(true)
    lista2copiada.append(copia);
  }

  //Se recorre la lista 2 para modificarla
  for(let i = 0; i<lista2copiada.children.length; i++){
    //Se guarda las clases y textos que contengan los span
    let clases = lista2copiada.children.item(i).firstChild.classList;
    let texto = lista2copiada.children.item(i).firstChild.textContent;
  
    //Se eliminan los span
    let eliminar = lista2copiada.children.item(i).firstChild;
    eliminar.parentNode.removeChild(eliminar);

    //Se crea botón que sustituye a cada span
    let boton = document.createElement("button");
    //Se le atribuye las caracteristicas del span al botón
    boton.classList = clases;
    boton.innerText = texto;
    //Si es el último botón, se le agrega atributo disabled
    if(i==lista2copiada.children.length-1){
      boton.setAttribute("disabled", true);
    }

    //Se agrega en la lista el botón creado
    lista2copiada.children.item(i).appendChild(boton);
  }

  console.log("--FIN--");
}




// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!


