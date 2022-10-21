let x;
let y;
let z;
let zz;
const container = document.getElementById('container');
function start(){
    z = parseInt(document.getElementById('inputFirstNumber').value);
    zz = parseInt(document.getElementById('inputSecondNumber').value);
    console.log(z,zz)
    for (let i = z; i <= zz; ++i) {
    let div = document.createElement('div');
    div.setAttribute('id', i );
    div.setAttribute('class', 'cell');
    document.getElementById('container').appendChild(div);
    
  }
}
