const cards = document.querySelectorAll('.card');

cards.forEach(function(card,index) {
    card.addEventListener("click", function(){
        
        //const recipeId = card.getAttribute('id');
        window.location.href = `/recipes/${index}`;        
    });
});

function showHide(event) {
    let button = event.target
    button.innerHTML = "Funcionou"
}