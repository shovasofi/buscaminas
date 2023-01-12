function crear_tabla(matriz){    

    let tabla = window.document.getElementById("tabla_tablero");    
    

    for (let i=0;i<matriz.length;i++){
        let fila = window.document.createElement("tr");
        tabla.append(fila);

        for (let j=0;j<matriz[0].length;j++){
        let celda = window.document.createElement("td");
        celda.textContent=matriz[i][j];
        fila.append(celda);
        }       

    }



}