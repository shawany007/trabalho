const btnSim = document .getElementById("btnSim")
const btnNão = document .getElementById("btnNão")

function aceitar(){
   alert ("Você aceitou namorar comigo! :)")
   location.href ="https://youtu.be/6kz-sHVEejk?si=PmDd33aCY3xd3eum"
}

function desviar(){
    btnNão.style.position = "absolute";
}
 
function geraPosicao(min,max){
    return (Math .random() * (max-min) + min) + "%";
}