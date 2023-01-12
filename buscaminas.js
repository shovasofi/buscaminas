function probar(){

    
    var matriz= crear_matriz(8,8);
    introducir_bombas(matriz,15);
    asignar_valores(matriz);
    print_matriz_html(matriz);
    


}

function crear_matriz(altura, anchura){

    var matriz=[];

    //crea un array de longitud 'altura', se mete dentro y en cada posición le mete otro array de longitud 'anchura'
    //se mete dentro de este último y a cada posición le asigna un 0 como valor inicial, luego se irá cambiando.
    //Al terminar tendremos una matriz altura x anchura con todas las "casillas" en 0.

    for(let i=0;i<=altura;i++){
        let arr=[];
        matriz[i]=arr;
        for (let j=0; j<=anchura;j++){
            arr[j]=0;
        }
    }
    return matriz;

}//función crear_matriz


function introducir_bombas(matriz, bombas){
    //introduce de forma aleatoria en la matriz el número de bombas indicado como paraámetro.
    for (let i=0; i<bombas; i++){

        var random1= numero_aleatorio(matriz.length);
        var random2= numero_aleatorio(matriz[0].length);

         if(matriz[random1][random2]===0)matriz[random1][random2]=9;
         else i--;

    }

    return matriz;
}//función introducir_bombas

function asignar_valores(matriz){

    //Cambia el valor de las casillas con valor 0, para asignarles un valor según las casillas con valor 9 (bombas) colindantes
    for(let i=0;i<matriz.length;i++){
        for (let j=0; j<matriz[0].length;j++){
                       
				
          if(matriz[i][j]!=9){

            let valor=0;

            //celda libre
            if((i-1)!=-1 && (j-1)!=-1 && (i+1)!=matriz.length && (j+1)!=matriz[0].length) {
                if (matriz[i-1][j-1]==9)valor++;
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i-1][j+1]==9)valor++;
                if (matriz[i][j-1]==9)valor++;
                if (matriz[i][j+1]==9)valor++;
                if (matriz[i+1][j-1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;
                if (matriz[i+1][j+1]==9)valor++;
            }//if celda libre
            
            //esquina superior izquierda
            if((i-1)==-1 && (j-1)==-1){ 
                if (matriz[i][j+1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;
                if (matriz[i+1][j+1]==9)valor++;
            }//if esquina superior izquierda

            //esquina superior derecha
            else if((i-1)==-1 && (j+1)==matriz[0].length){ 
                if (matriz[i][j-1]==9)valor++;			
                if (matriz[i+1][j-1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;
            }//if esquina superior derecha
                         
            //esquina inferior izquierda
            else if((i+1)==matriz.length && (j-1)==-1){ 
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i-1][j+1]==9)valor++;	
                if (matriz[i][j+1]==9)valor++;
            }//if esquina inferior izquierda


            //esquina inferior derecha				
            else if((i+1)==matriz.length && (j+1)==matriz[0].length){
                 
                if (matriz[i-1][j-1]==9)valor++;
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i][j-1]==9)valor++;	
            }//if esquina inferior derecha

            
            //borde superior
            else if(i-1==-1){
                if (matriz[i][j-1]==9)valor++;
                if (matriz[i][j+1]==9)valor++;
                if (matriz[i+1][j-1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;
                if (matriz[i+1][j+1]==9)valor++;
            }//if border superior



            //borde inferior
            else if(i+1==matriz.length){
                if (matriz[i-1][j-1]==9)valor++;
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i-1][j+1]==9)valor++;
                if (matriz[i][j-1]==9)valor++;
                if (matriz[i][j+1]==9)valor++;
            }//if borde inferior  
            
            //borde derecho
            else if (j-1==-1){
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i-1][j+1]==9)valor++;
                if (matriz[i][j+1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;
                if (matriz[i+1][j+1]==9)valor++;
            }//if borde derecho


            //borde izquierdo
            else if (j+1==matriz[0].length){
                if (matriz[i-1][j-1]==9)valor++;
                if (matriz[i-1][j]==9)valor++;
                if (matriz[i][j-1]==9)valor++;
                if (matriz[i+1][j-1]==9)valor++;
                if (matriz[i+1][j]==9)valor++;;
            }//if borde izquierdo
            
            matriz[i][j]=valor;

          }//if valor !=9
        
        }//for j

    }//for i

    return matriz;

}// función asignar_valores 
    



function numero_aleatorio(numero) {
    
    let r = Math.random();
    return Math.trunc(r * numero);

}

function print_matriz_html(matriz){

    for(let i=0;i<=matriz.length-1;i++){
        for (let j=0; j<=matriz[0].length-1;j++){
            window.document.write(matriz[i][j]);
            window.document.write("    ");
        }
        window.document.write("<br>");
    } 
}