// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets().split(" ")
let distancia, dPSauron, dPSaruman; 

distancia =  parseInt(input[0]);
diamPSauron =  parseInt(input[1]); 
diamPSaruman =  parseInt(input[2]); 

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let resultado = distancia / (diamPSauron + diamPSaruman ); 
print(resultado.toFixed(2));