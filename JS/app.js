console.log('Prato Fiorito')

let colonne = parseInt(prompt('Inserisci il numero di colonne!'))
let righe = parseInt(prompt('Inserisci il numero di righe!'))
let numeroCelle = colonne * righe

console.log(colonne, righe, numeroCelle)

const grigliaEl = document.getElementById('grid')
console.log(grigliaEl)

for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1
    console.log(num)

    let cellaEl = document.createElement ('div')
    
    // CELLAELEMENT STYLE
    // cellaEl.style.border = '2px solid black'
    // cellaEl.style.display ='flex'
    // cellaEl.style.justifyContent ='center'
    // cellaEl.style.alignItems= 'center'
    // cellaEl.style.padding= '20px'

    console.log(cellaEl)

}