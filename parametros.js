

let num1 = 0
let num2 = 0

function soma(num1,num2) {
    return num1 + num2
}

//console.log(soma())

function nomeIdade (nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;

}

console.log(nomeIdade(40,'Samuel'))

function multiplica (numero1 = 1,numero2 = 1){
    return numero1 * numero2
}

console.log(multiplica(soma(2,5),soma(3,3)))
