const li    = document.querySelectorAll(".buttons__li");
const block = document.querySelectorAll(".block");

// click en LI quitar clase ACTIVATE
// click en block quitar clase ACTIVATE
// li añadimos la clase activo


// recorriendo todos los li
li.forEach( (cadaLi , i) =>{
    // asignando un click a cada li
    li[i].addEventListener("click", ()=>{

        // recorrer todos los LI
        li.forEach( (cadaLi , i) =>{
            // quitar la clase activate de cada li
            li[i].classList.remove("activate");
            // quitar la clase activate de cada block
            block[i].classList.remove("activate");
        })

        // añadir la clase activate de cada li

        li[i].classList.add("activate");
        // añadir la clase activate de cada block
        block[i].classList.add("activate");
    })
})