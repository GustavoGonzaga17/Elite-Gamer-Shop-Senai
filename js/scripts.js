let linkPerifericos = document.querySelector('#perifericos')
let linkGames = document.querySelector('#games')
let linkComputador = document.querySelector('#computadores')
let linkHardware = document.querySelector('#hardware')

let sectionPerifericos = document.querySelector('#sectionPerifericos')
let sectionGames = document.querySelector('#sectionGames')
let sectionComputadores = document.querySelector('#sectionComputadores')
let sectionHardware = document.querySelector('#sectionHardware')

linkPerifericos.addEventListener('click', function (e) {
    e.preventDefault()
    sectionPerifericos.style.display='flex'
    sectionGames.style.display='none'
    sectionComputadores.style.display='none'
    sectionHardware.style.display='none'
})

linkGames.addEventListener('click', function (e) {
    e.preventDefault()
    sectionGames.style.display='flex'
    sectionPerifericos.style.display='none'
    sectionComputadores.style.display='none'
    sectionHardware.style.display='none'
})

linkComputador.addEventListener('click', function (e) {
    e.preventDefault()
    sectionComputadores.style.display='flex'
    sectionPerifericos.style.display='none'
    sectionGames.style.display='none'
    sectionHardware.style.display='none'
})

linkHardware.addEventListener('click', function (e) {
    e.preventDefault()
    sectionHardware.style.display='flex'
    sectionPerifericos.style.display='none'
    sectionGames.style.display='none'
    sectionComputadores.style.display='none'
})