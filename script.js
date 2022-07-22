function generarColor() {
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";
    for (var i = 0; i < 6; i++) {
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.getElementById("hexadecimal").innerHTML = color;
    document.getElementById("text").innerHTML = "Copiar Color";
}
function copiarAlPortapapel(hexadecimal) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("text").innerHTML = "Copiado!";
}
