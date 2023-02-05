//console.log(document.body);

//nodes ou childnodes
//console.log(document.body.childNodes)

// Gera uma lista com todos os elementos filhos do body
//console.log(document.body.childNodes);

//Acessando o primeiro filho do elemento body
//console.log(document.body.childNodes[1]);

//Acessando os childNodes que estão no div
//console.log(document.body.childNodes[1].childNodes);
//Acessando um dos nós que estão na div
//console.log(document.body.childNodes[1].childNodes[1]);

//console.log(document.body.childNodes[1].childNodes[1].textContent);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Pegando elementos pela tag

//const h1 = document.getElementsByTagName('h1');

//console.log(h1[0]);

//const ul = document.getElementsByTagName('ul');
//console.log(ul[0]);
/*
const principal = document.getElementById('titulo-principal');

console.log(principal);

const p = document.querySelector('.paragrafo');

console.log(p);

*/

// Selecionando a tag
//console.log(document.querySelector('h1'));

// Selecionando um id
//console.log(document.querySelector('#titulo-principal'));

// Selecionando uma class
//console.log(document.querySelector('.paragrafo'));



//function clicou(){
//    console.log(p.innerHTML);
//    p.innerHTML = 'Voce alterou o <i> meu conteudo</i>';
//}

/*
function clicou(){
    // Trazer todo conteudo de texto seja ele visivel ou não
    console.log(p.textContent);
    p.textContent = '<i>Você fez uma </i> <b>Alteração</b>'
}

*/
/*
function clicou(){

    //innerText -> Trás apenas o texto visivel
    console.log(p.innerText);
    let texto = prompt("Digite um texto:");
    p.innerText = 'Texto digitado =' + texto;
}

clicou()
*/
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//1. Leia dois números (utilize prompt) e exiba dentro do paragrafo (utilize innerText) o resultado da soma dos dois números.
/*
const p = document.querySelector('.paragrafo');

console.log(p);


console.log(p.innerText);
    let n1 =Number( prompt("Digite o primeiro numero:"));
    let n2 = Number(prompt("Digite o segundo numero:"));
    let soma = n1+n2
    p.innerText = 'A soma dos dois Numeros é =' + soma;


/*
 function clicou(){
    const p = document.querySelector('.paragrafo');
    const valor1 = document.querySelector('#valor1');
    const valor2 = document.querySelector('#valor2');
    let resultado = Number(valor1.value)+ Number(valor2.value);

    p.innerText= "Resultado=" + resultado
 }
 */

 //const h3 = document.createElement('h3');
 //h3.innerText = 'Acabei de ser criado';
// console.log(h3);

 /*
 Inserindo elementos com insertBefore
 -> Elemento Pai
 -> Elemento filho onde desejamos adicionar o elemento antes
 -> Elemento a ser adicionado

 */
/*
 function clicou(){
    //Pegando o elemento pai (onde irei inserir o h3)
    const pai = document.querySelector('.box');

    //Pegando o filho de referencia (onde o h3 será inserido antes)
    const filho = document.querySelector('.paragrafo');

    //Adicionando o elemento criado dentro do elemento 

    pai.insertBefore(h3,filho);
 }

*/

//function Adicionar(){

   // const item = document.querySelector('#item');
   // const carrinho = document.querySelector('.carrinho')
  //  const produto = document.createElement('li')
  //  produto.innerText= item.value ;
   // carrinho.appendChild (produto);
//}

//--------------------------------------------------------------------------------------------
/*
function inserirProduto() {
    const produto = document.querySelector('#produto');
    const p = document.querySelector('p');
    // Pegando o ul se ele existir
    const ul = document.querySelector('ul');

    // Verificando se um elemento existe dentro do body
    // função contains(<elemento>)
    if (document.body.contains(p)) {
        // Removendo o paragrafo do body 
        p.remove();
    }
    // Criando a lista que vai possuir o texto digitado pelo input
    const li = document.createElement('li');
    // Inserindo conteúdo dentro do li através da prop innerText
    li.innerText = produto.value;

    // Inserindo o li dentro do ul
    ul.appendChild(li);
    // Pegando o elemento pai
    const pai = document.querySelector('.carrinho');
    // Inserindo a lista no carrinho/div
    pai.appendChild(ul);
}
*/

