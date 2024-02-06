let menu = document.getElementById(`menu`)
let secaoCard = document.getElementById(`cardTrailer`)
let card = document.getElementById(`card`)


function menuShow() {
    menu.classList.toggle(`ativo`)
}

function trailerShow() {
    secaoCard.classList.toggle(`ativo`)
    card.classList.toggle(`ativo`)
}