// Manipulação do DOM
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_nao').addEventListener("change", atualizarOrcamento)


function atualizarOrcamento(){
    let qtde = inputQtde.value 
    let preco = qtde * 45
    

    let layout = document.querySelector("#layout_sim").checked
    if(layout) preco = preco/2

    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML = "R$ " + preco.toFixed(2)

}
document.querySelector("#hamburguer").addEventListener("click", () => 
    document.querySelector("nav").classList.toggle("menu-show")
)