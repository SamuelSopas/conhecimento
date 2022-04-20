// tipo arrow - usa-se com =>
// arrow com uma linha
const apresenta = nome => `meu nome é ${nome}`
const soma = (num1,num2) => num1 + num2;


// arrow com duas linhas ou mais



function somaNum(numero1, numero2) {
    if ( numero1 >= 5 || numero2 >= 5) {
        return numero1;
    }   else {
        return numero1 + numero2;
    }
}


console.log(somaNum(1,5))
