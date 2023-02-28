// console.log('Prato Fiorito')


const btnEl = document.getElementById('play-button')
const colInput = document.getElementById('col-input')
const rowInput = document.getElementById('row-input')
const gridEl = document.getElementById('grid')

btnEl.addEventListener('click', startGame)


function startGame() {
    // btnEl.classList.add('d-none')
    // colInput.classList.add('d-none')
    // rowInput.classList.add('d-none')
    gridEl.classList.remove('flex-column', 'gap-3')

    let colonne = colInput.value
    let righe = rowInput.value
    // let colonne = parseInt(prompt('Inserisci il numero di colonne!'))
    // let righe = parseInt(prompt('Inserisci il numero di righe!'))
    let numeroCelle = colonne * righe

    console.log(colonne, righe, numeroCelle)

    const grigliaEl = document.getElementById('grid')
    console.log(grigliaEl)

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
        console.log(num)

        let cellaEl = document.createElement('div')
        cellaEl.innerHTML = num
        cellaEl.classList.add('cella')
        grigliaEl.append(cellaEl)

        // CELLAELEMENT STYLE
        cellaEl.style.width = 'calc(100% / ' + colonne + ')'
        cellaEl.style.height = 'calc(100% / ' + righe + ')'


        console.log(cellaEl)

    }

}



// // // // // btnEl.addEventListener('click', function () {

// // // // //     btnEl.classList.add('d-none')
// // // // //     colInput.classList.add('d-none')
// // // // //     rowInput.classList.add('d-none')
// // // // //     gridEl.classList.remove('flex-column', 'gap-3')

// // // // //     let colonne = colInput.value
// // // // //     let righe = rowInput.value
// // // // //     // let colonne = parseInt(prompt('Inserisci il numero di colonne!'))
// // // // //     // let righe = parseInt(prompt('Inserisci il numero di righe!'))
// // // // //     let numeroCelle = colonne * righe

// // // // //     console.log(colonne, righe, numeroCelle)

// // // // //     const grigliaEl = document.getElementById('grid')
// // // // //     console.log(grigliaEl)

// // // // //     for (let i = 0; i < numeroCelle; i++) {
// // // // //         let num = i + 1
// // // // //         console.log(num)

// // // // //         let cellaEl = document.createElement('div')
// // // // //         cellaEl.innerHTML = num
// // // // //         cellaEl.classList.add('cella')
// // // // //         grigliaEl.append(cellaEl)

// // // // //         // CELLAELEMENT STYLE
// // // // //         cellaEl.style.width = 'calc(100% / ' + colonne + ')'
// // // // //         cellaEl.style.height = 'calc(100% / ' + righe + ')'


// // // // //         console.log(cellaEl)

// // // // //     }

// // // // // })

// console.log(cellaEl)



// const cellaClickElement = document.querySelectorAll('.cella')
// console.log (cellaClickElement)

// for (let i=0; i < cellaClickElement.length; i++){
//     const cella = cellaClickElement[i]

//     cella.addEventListener('click', function(){
//         console.log (i)
//         cellaClickElement.classList.add ('bg')
//     })

// }

