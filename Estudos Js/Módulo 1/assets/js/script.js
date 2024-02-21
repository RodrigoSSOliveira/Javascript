/*alert("Olá")

let nome= "Rodrigo";      //string
let idade= 20;            //number
let cidade= "Salvador";   //string
let estado= "Bahia";      //string

console.log("Meu nome é " + nome);
console.log("Tenho " + idade + " anos");
console.log("Moro em " + cidade);
console.log("Na " + estado);



/* let logado = true       *boolean* 
   let logado = false      *boolean* 

 let lista = [ovo, leite, acucar]  *array*
 let nomecompleto = {nome: "Rodrigo", idade: 20}  *object* 


/* Tipos de Variáveis
 let - Variável que aceita qualquer valor
 var - Variável que aceita qualquer valor
 const - Variável constante, não muda



// Operações matemáticas
let x = 2;
x = x + 20;
console.log(x)


// Concatenar
let name = "Luiz"
let sobrenome = "Santos";
let nomecompleto= (name + " " + sobrenome)

console.log(nomecompleto)


// template string
let nomes = "Julio";
let sobrenomes = "Silva";

//let nomescompleto = (nomes + " " + sobrenomes);
let nomescompleto = `${nomes} ${sobrenomes} Santos`

console.log(nomescompleto)



// If / Else
    let idades = 19; 
/*
    if( idades > 17) {
        console.log("Você é MAIOR de idade")    
    }  else{
        console.log("Você é MENOR de idade")
    }


/*if (idades >=18) {
        if (idades <60) {
            console.log("Você é um adulto")
        }
    }


if (idades >= 18 && idades <=60) {
    console.log("Você é um adulto")
}


//Média escolar
let n1 = 8;
let n2 = 6;
let n3 = 8;

let media = (n1 + n2 + n3) / 3;

if (media <= 4) {
    console.log("Média = ", media, "(Reprovado!)");
} else if (media < 7) {
    console.log("Média = ", media, "(Recuperação!)");
} else {
    console.log("Média = ", media, "(Aprovado)");
}


/*Simbolos
< Menor que
> Maior que
== Igual
=== Igual - restritivo
>= Maior ou igual
<= Menor ou igual
!= Diferente
&& E
|| Ou




//Condicional Ternario
let Prime = false;

let shipping = Prime ? "Grátis" : 20;

console.log(Prime ? 'Prime' : 'Não é Prime');
console.log ("Frete: " + shipping);



let age = 90;

let isAdult = ((age >=18) ? 'Sim' : 'Não');

console.log(isAdult);


// Switch
let profession = "bombeiro";

console.log("Profissão: " + profession);

switch (profession) {
    case "fiscal":
        console.log ("Sua camisa será VERDE");
        break;
    case "bombeiro":
        console.log ("Sua camisa será VERMELHA")
        break;
    case "policial":
        console.log ("Sua camisa será AZUL");
        break;
    default:
        console.log ("Sua Camisa será PRETA")
        break;
}

*/

//Funções
function gravidade(){
    console.log("A gravidade do planeta é:")
    console.log(9.8)
}
