function crearTablero(filas,columnas){
    let tab=window.document.getElementById("tablero");

    for (let index = 0; index < filas; index++) {
        let tr= window.document.createElement("tr");
        tab.append(tr);
        for (let index = 0; index < columnas; index++){
            let td= window.document.createElement("td");        
            tab.append(td);
        }
}//CREAR LAS FILAS Y COLUMNAS INTRODUCIDAS POR EL USUARIO
}
