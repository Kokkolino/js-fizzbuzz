let x;
let y;
let z;
let zz;
function start(){
    z = parseInt(document.getElementById('inputFirstNumber').value);
    zz = parseInt(document.getElementById('inputSecondNumber').value);
    if (z < zz && ((zz - z) % 10) === 0){

        for (i=1; i<=y; i++) {
            for (j=1; j<=x; j++) {
                z = z + 1;
                let div = document.createElement('div');
                div.setAttribute('id', z );
                div.setAttribute('class', 'cell');
                
            }
        }
    }
    else{
        alert('il primo numero deve essere maggiore del secondo e la differenza tra i due deve essere multiplo di 10')
    }
}