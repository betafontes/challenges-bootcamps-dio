
let input = gets().split(" ")
let distancia, dPSauron, dPSaruman; 

distancia =  parseInt(input[0]);
diamPSauron =  parseInt(input[1]); 
diamPSaruman =  parseInt(input[2]); 


let resultado = distancia / (diamPSauron + diamPSaruman ); 
print(resultado.toFixed(2));