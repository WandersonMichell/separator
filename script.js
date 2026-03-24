function processar() {

let entrada = document.getElementById("entrada").value;

let tokens = entrada
  .split(/[\n\t\s,;]+/)
  .filter(t => t.trim() !== "");

let macs = [];
let seriais = [];


let macRegex =
/^([0-9A-Fa-f]{12}|([0-9A-Fa-f]{2}[:\-]){5}[0-9A-Fa-f]{2})$/;


let serialRegex =
/^(?=.*[0-9])[A-Za-z0-9]{10,}$/;


tokens.forEach(token => {

let valor = token.trim();


if (macRegex.test(valor)) {

let macLimpo = valor
.replace(/[:\-]/g, "")
.toUpperCase();

macs.push(macLimpo);

}

else if (serialRegex.test(valor)) {

seriais.push(valor.toUpperCase());

}



});

macs = [...new Set(macs)];
seriais = [...new Set(seriais)];



document.getElementById("saida_mac").value =
macs.join(",");

document.getElementById("saida_serial").value =
seriais.join(",");


document.getElementById("contador").innerText =
tokens.length + " itens";

document.getElementById("total_mac").innerText =
"Total MAC: " + macs.length;

document.getElementById("total_serial").innerText =
"Total SERIAL: " + seriais.length;

}


function copiar(id) {

let campo = document.getElementById(id);

campo.select();
document.execCommand("copy");

}


function limpar() {

entrada.value = "";
saida_mac.value = "";
saida_serial.value = "";

contador.innerText = "0 itens";

total_mac.innerText = "Total MAC: 0";
total_serial.innerText = "Total SERIAL: 0";

}
