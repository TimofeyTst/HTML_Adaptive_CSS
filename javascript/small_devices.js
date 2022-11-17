document.addEventListener('DOMContentLoaded', () =>{ 
    if (window.matchMedia("(max-width: 600px)").matches) {
        let images = document.querySelectorAll("div.container .cards .card .content img");
        images.forEach(image=>{
            image.parentNode.classList = "header";
            image.parentNode.innerHTML = "<p>Header</p><a class=\"button\" href=\"#\"><img src=\"src/close.png\"></a>";
        });

        let buttons = document.querySelectorAll("div.container .cards .card .header a");
        buttons.forEach(button => {
            button.addEventListener("click", openCard.bind(button));
        });
    }
})


function openCard(button) {
    button.path[3].classList.toggle('open');
    if (button.path[0].src.indexOf("src/open.png") != -1){
        button.path[0].src = "src/close.png";
    } else {
        button.path[0].src = "src/open.png";
    }
}