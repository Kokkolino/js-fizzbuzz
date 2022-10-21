let x;
let y;
let z;
let zz;
const container = document.getElementById('container');
// creazione elemento
let div = document.createElement('div');
function start(){
    z = parseInt(document.getElementById('inputFirstNumber').value);
    zz = parseInt(document.getElementById('inputSecondNumber').value);
    console.log(z,zz)
    if (z < zz && ((zz - z) % 10) === 0){
        y=(zz - z) / 10;

        for (i=1; i<=y; i++) {
            for (j=1; j<=x; j++) {
                // attributi per l'elemento creato
                div.setAttribute('id', z );
                div.setAttribute('class', 'cell');
                // lo si fa apparire cosi?
                document.getElementById('container').append(div);
                z = z + 1;
                
            }
        }
    }
    else{
        alert('il primo numero deve essere maggiore del secondo e la differenza tra i due deve essere multiplo di 10')
    }
    console.log(start())
}