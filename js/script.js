function redirecionar() {
    var textoInput1 = document.getElementById('input1').value;
    var textoInput2 = document.getElementById('input2').value;

    var user1 = "furry";
    var key1 = "gaghost2815#";

    if (textoInput1 === user1 && textoInput2 === key1) {
        window.location.href = "Batata/index.html";
    } else {
        alert("Caractere escolhido incorreto!!");
    }
}


function cancelar() {
    window.location.href = "../index.html";
}