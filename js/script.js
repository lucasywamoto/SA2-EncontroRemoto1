$(document).ready(function() {

    let slideAtual = 1;
        let listaSlides = ["banner-1", "banner-2", "banner-3"];
        
        setInterval(mudarSlide, 2000);

        function mudarSlide() {
            console.log(slideAtual);
            
            if(slideAtual > 0) {
                $("#carrossel").removeClass(listaSlides[slideAtual - 1])
            } else if (slideAtual == 0) {
                $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
            } 
            
            $("#carrossel").addClass(listaSlides[slideAtual]);

            slideAtual++;

            if (slideAtual > listaSlides.length -1) {
                slideAtual = 0;
            }
        }

    $("#menu-icon").click(function() {

        $("#menu").toggleClass("menu-ativo");

        // if($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo");
        // } else {
        //     $("#menu").addClass("menu-ativo");
        // }

    })
})

// function mostrarMenu() {
//     let menu = document.getElementById("menu");

//     if (getComputedStyle(menu).display == 'none') {
//         menu.style.display = 'flex';
//     } else {
//         menu.style.display = 'none';
//     }
// }

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value;
    console.log(email);
    alert(email);
}