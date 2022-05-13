

function tabuada() {
    let num = Number(document.getElementById('num').value)
    let seltab = document.getElementById('seltab')


    if (num == '') {
        alert('Verifique os dados e tente novamente')
    } else {
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`

            seltab.appendChild(item)
        }
    }

}


let btn = document.getElementById('btn')
btn.addEventListener('click', tabuada)
