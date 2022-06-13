
const pi = 3.14159;

let r = parseFloat(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)

var volume = (4/3.0)* pi * Math.pow(r, 3);

print("VOLUME =  "  + volume.toFixed(3));