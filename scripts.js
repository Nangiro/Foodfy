const modalOverlay = document.querySelector('.ModalOverlay')

const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const imgsource = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imgsource}`
        modalOverlay.querySelector("h1").innerHTML = card.querySelector("h1").textContent;
        modalOverlay.querySelector("p").innerHTML = card.querySelector("p").textContent;
    })
}

document.querySelector(".CloseModal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})