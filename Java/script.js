const ingresotexto = document.getElementById
    ("ingresotexto");
const botonencriptar = document.getElementById
    ("botonencriptar");
const botondesencriptar = document.getElementById
    ("botondesencriptar");
const botoncopiar = document.getElementById
    ("botoncopiar");
const mensajefinal = document.getElementById
    ("mensajefinal");
const muñeco = document.getElementById
    ("muñeco");
const derechainfo = document.getElementById("derechainfo");
const derecha = document.getElementById("derecha");

let remplazar = [

    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {

    mensajefinal.innerHTML = nuevoValor;
    muñeco.classList.add("oculto");
    ingresotexto.value = "";
    derechainfo.style.display = "none";
    botoncopiar.style.display = "block";
    derecha.classList.add("ajustar");
    mensajefinal.classList.add("ajustar")
}

const reset = () => {

    mensajefinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    derechainfo.style.display = "block";
    botoncopiar.style.display = "none";
    derecha.classList.remove("ajustar");
    mensajefinal.classList.remove("ajustar");
    ingresotexto.focus();



}

botonencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase()
    if (texto != "") {
        function encriptar(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newtext
        };
    } else {
        alert("No hay ningun caracter de Texto")
    }
    remplace(encriptar(texto));

});


botondesencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newtext
        };
    } else {
        alert("No hay ningun caracter de Texto")
    }
    remplace(desencriptar(texto));

});

botoncopiar.addEventListener("click", () => {
    let texto = mensajefinal;
    texto.select();
    document.execCommand('copy')
    alert("El texto fue copiado con exito")
    reset();

})


