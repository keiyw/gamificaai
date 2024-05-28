let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    //Menu fechado -  tem a classe menu-fechado
    //Menu aberto - não tem a classe menu-fechado 

    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //Abrir o menu - remover a classe menu-fechado 
        menu.classList.remove("menu-fechado")

        //mostrar icone barras 
        //esconder o icone do x 

        iconeBarras.style.display = "none"

        iconeX.style.display = "inline"


    } else {
        //fechar o menu - adicionar a classe menu-fechado 
        menu.classList.add("menu-fechado")


        iconeBarras.style.display = "inline"

        iconeX.style.display = "none"
        //mostrar o icone do x 
        //esconder o icone barras 

    }
}

onreset = () => {
    menu.classList.contains("menu-fechado")

    //Abrir o menu - remover a classe menu-fechado 
    menu.classList.remove("menu-fechado")

    //mostrar icone barras 
    iconeBarras.style.display = "none"

    //esconder o icone do x 
    iconeX.style.display = "inline"

}

let banner = document.querySelector(".banner")
//let slides = [0, 1, 2]
//slides[0] -> primeiro-banner
//slides[1] -> segundo-banner
//slides[2] -> terceiro-banner

let slides = [
    "primeiro-banner", // 0
    "segundo-banner", //1
    "terceiro-banner" //2
]
let slideAtual = 0

banner.classList.add(slides[slideAtual])



function mostrarProximoSlide(){
    //somar 1 na variavel slideAtual
    banner.classList.remove(slides[slideAtual])
    
    
    if (slideAtual < 2) {
        //somar 1 na variavel alideAtual
        slideAtual++
    }else {
        //voltar para o primeiro banner
        slideAtual = 0
        // slideAtual++
        
        // mostrar slide de acordo com o slide atual 
    }

    console.log(slideAtual);
    //remover o slide anterior 
    banner.classList.add(slides[slideAtual])
   
}

function mostrarSlideAnterior() {  
    //remover o slide anterior 
    banner.classList.remove(slides[slideAtual])
    
    if(slideAtual > 0) {

        //subtrair 1 na variavel slideAtual
        slideAtual --

    }else{

        //voltar para o ultimo slide 
        slideAtual = 2
    }

     //somar 1 na variavel slideAtual
     banner.classList.add(slides[slideAtual])
    
}

function selecionarSlide(indiceSlide) {

    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide 

    banner.classList.add(slider[slideAtual])
}