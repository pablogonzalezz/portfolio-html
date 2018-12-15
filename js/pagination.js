//----------------------Mudando de página----------------------

var pag1 = document.getElementById("pag1")
var pag2 = document.getElementById("pag2")
var pag2Container = document.getElementById("pag2-container")
var pag1Container = document.getElementById("pag1-container")  


pag1.addEventListener("click", function(){
    pag2Container.classList.add("invisivel")
    pag1Container.classList.remove("invisivel")
    pag2.classList.remove("w3-black")
    pag1.classList.add("w3-black")
})

pag2.addEventListener("click", function(){
    pag1Container.classList.add("invisivel")
    pag2Container.classList.remove("invisivel")
    pag2.classList.add("w3-black")
    pag1.classList.remove("w3-black")

})


//---------------------Mudando de Abas---------------------

var tabPortfolio = document.getElementById("portfolio-btn")
var tabAbout = document.getElementById("about-btn")
var tabContact = document.getElementById("contact-btn")

tabPortfolio.addEventListener("click", function(){
    tabPortfolio.classList.add("w3-text-teal")
    tabAbout.classList.remove("w3-text-teal")
    tabContact.classList.remove("w3-text-teal")
})

tabAbout.addEventListener("click", function(){
    tabPortfolio.classList.remove("w3-text-teal")
    tabAbout.classList.add("w3-text-teal")
    tabContact.classList.remove("w3-text-teal")
})

tabContact.addEventListener("click", function(){
    tabPortfolio.classList.remove("w3-text-teal")
    tabAbout.classList.remove("w3-text-teal")
    tabContact.classList.add("w3-text-teal")
})

////---------------------Mudando de Filtros---------------------
