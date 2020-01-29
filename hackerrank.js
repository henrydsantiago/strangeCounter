
let time = 1000000000000;
let value = counterDown(time); 


function counterDown(t){

    let factor = Math.ceil( ( ( Math.log( ( t/3 ) + 1 ) ) /( Math.log( 2 ) ) ) -1 );

    if ( ( t >= 1) && ( t <= Math.pow( 10,12 ) ) ) {

        let numb = ( 6 * ( Math.pow( 2,factor ) ) ) - t - 2;
        
        return( numb );
    }
}

console.log("Time: " + time + "  Valor: "+ value)

// Made by Henry D'Santiago for DPARADIG