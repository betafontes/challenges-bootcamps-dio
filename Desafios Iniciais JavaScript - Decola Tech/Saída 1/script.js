
print('---------------------------------------');

print('|                   |');

print('|                   |');

print('|                   |');

print('|                   |');

print('|                   |');



var resultado = "";

  for (i = 1; i <= 7; i++) {

    for (p = 1; p <= 39; p++) {

      if (i == 1 || i == 7)

        resultado += "-";

      else if (p == 1 || p == 39)

        resultado += "|";

      else 

        resultado += " ";

    }

    resultado += "\n";

  }

   

print('---------------------------------------');