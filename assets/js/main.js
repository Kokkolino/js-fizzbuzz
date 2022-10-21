let x;
let z;
let zz;
let check3;
let check5;
const container = document.getElementById('container');
function start(){
    z = parseInt(document.getElementById('inputFirstNumber').value);
    zz = parseInt(document.getElementById('inputSecondNumber').value);
    if (z <= 0){
        z=1;
    }
    if (z>zz){
    x=z;
    z=zz;
    zz=x;
    alert("lo sapevo che avresti provato a trovare il pelo nell'uovo :D");
    }
    for (let i = z; i <= zz; ++i) {
        let div = document.createElement('div');
        div.setAttribute('id', i );
        div.setAttribute('class', 'cell');
        check3 = i % 3;
        check5 = i % 5;
        if (check3 === 0 && check5 === 0) {
            div.setAttribute('class', 'multipleBoth cell')
            document.getElementById('container').appendChild(div);
            document.getElementById(i).innerHTML = `<span>FizzBuzz</span>`;
        }
        else if (check3 === 0 && check5 != 0) {
            div.setAttribute('class','multiple3 cell')
            document.getElementById('container').appendChild(div);
            document.getElementById(i).innerHTML = `<span>Fizz</span>`;
        }
        else if (check3 != 0 && check5 === 0) {
            div.setAttribute('class','multiple5 cell')
            document.getElementById('container').appendChild(div);
            document.getElementById(i).innerHTML = `<span>Buzz</span>`;

        }
        else{
            div.setAttribute('class','noMultiple cell')
            document.getElementById('container').appendChild(div);
            document.getElementById(i).innerHTML = `<span>${i}</span>`;

        }
        
    }

}

function clearBox(){
    document.getElementById('container').innerHTML = "";
}
