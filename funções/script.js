//Funções
/*
    function NomeDaFunção (parâmetros){
        Ações
    }
*/

var a = 7
var b= 8
var total = a+b
console.log(total)

function soma(c,d){
    var total = c+d
    return console.log(total)
}
soma(10,50)
soma(7,5)

//Calculo da área de um quadrado

function AreaDeUmQuadrado(lado){
    var area = lado*lado 
    return console.log(area)
}

AreaDeUmQuadrado(4)

//Faça uma função que calcule a área de retângulo de lados diferentes.

function AreaDoRetangulo(L1,L2){
    var Area = L1 * L2
    return console.log(Area)
}
AreaDoRetangulo (5,3)

//Função

function pi(){
    return 3.1415
}

function CorFavorita (cor){
    if(cor === 'azul'){
        return 'Gosta Do Céu'
    } else if (cor === 'verde'){
        return 'É Palmeirense'
    }else{
        return 'Você gosta de nada'
    }
}

//Crie uma função matematica que retorne o perimetro de um quadrado *lembrando: perimetro é a soma de todos os lados

function PerimetroDoQuadrado (LADO){
    var Perimetro = LADO+LADO+LADO+LADO
    return console.log(Perimetro)
}

PerimetroDoQuadrado (5)

//Crie uma função que retorne o seu nome completo *ela deve possuir os parametros: nome e sobrenome

function Nome (nome, sobrenome){
    var NomeCompleto = nome+sobrenome
    return console.log(NomeCompleto)
}

Nome('Eduarda ', 'Bernardes')

//Crie uma função que verifica se um número é par

function ImparOuPar (numero){
    if(numero %2 == 0 ){
        return 'Número par!'
    }
    else if (numero %2 != 0){
        return 'Número ímpar'
    }

    return console.log(numero)
}