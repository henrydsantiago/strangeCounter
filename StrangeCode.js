
var button = document.getElementById( "calcNumber" );

button.addEventListener( "click", main );

function main(){
    let place = document.getElementById( "timeValue" );         // Lugar donde mostrar la salida
    let message = document.getElementById( "invalidNumber" );   // Lugar para mostrar advertencia

    let init = document.getElementById( "init" ).value;         // El valor de inicio por defecto
    let t = document.getElementById( "tNumber" ).value;         // El valor del tiempo a calcular
    let factor = document.getElementById( "factor" ).value;     // 2 por defecto


    if ((t >= 1) && (t <= Math.pow(10,12))){
        message.hidden = true;
        result = counterDown(t, init, factor);                  // Realiza los cálculos
        printer(place, t, result);                                 // Imprime los resultados
    }else{
        message.hidden= false;
    }
}

function counterDown(t, i, f){
    // Indica el valor de los ciclos en la secuencia exponencial
    let n = Math.ceil( ( ( Math.log( ( t/3 ) + 1 ) ) / ( Math.log( 2 ) ) ) -1 );

    if ( ( t >= 1) && ( t <= Math.pow( 10,12 ) ) ) {

        let numb = ( i * f * ( Math.pow( 2,n ) ) ) - t - 2;
        
        return( numb );
    }
}


function printer(where, t, result){
    where.innerHTML = "Time: " + t + " Value: " + result;
}

/*          --- Explicación --- 
Fórmula de Suma de Potencia:
S = 1+a^0+a^1+...+a^n         
S = (1-f^(n+1))/1-f
S = i(f^(1+2+...+n))
S = 3(2^(1+2+...+n))

Fórmula despejada: 
S/3=(1-2^(n+1))/1-2

Donde n se calcula a través de una función logarítmica y S es la variable t a ser evaluada: 
n = log((S/3)+1)/(log(2))-1;

Una vez que se obtenga n, se calcula se sustituye en la fórmula:

numb = 3(2^(n) - (t - ((3(2^(n))- 6)) + 4)

Resolviendo:

numb = (6(2^n)) - t - 2
 
Donde numb es el valor final.


                Programado por Henry D'Santiago para DParadig Chile 28/01/2020

*/

