//////////////////////////////////////////////////////////////////////////
//                      NULLISH COALESCING OPERATOR
//////////////////////////////////////////////////////////////////////////





//document.body.innerText = 'Testando';
//const idade = 0;
//console.log('Sua idade é ' + idade);
//document.body.innerText = 'Sua idade é ' + (idade || 'Não informado'); // Este operador possui problema, porque se a idade for "0" ele identifica como se fosse não informada também
//document.body.innerText = 'Sua idade é ' + (idade ?? 'Não informado'); // Este aqui já aceita o 0 como valor válido

// Diferença operador || e ??
// 0, '', [], false, undefined, null => falsy
// São operadores não válidos porque o Javascript identifica todos como falsos quando usamos o operador ||, como no exemplo: idade || 'Não informado'
// Já o perador "??" irá considerar os valores 0, vazio, falso ou verdadeiro... Considerando inválidos apenas null, indefined, etc.





//////////////////////////////////////////////////////////////////////////
//                              OBJETOS
//////////////////////////////////////////////////////////////////////////





const unit = {
    name: 'Baltazar',
    stamina: 18,
    power: 9,
    agility: 7,
    techniques: [],
    address: {
        street: 'Rua França',
        number: 129,
        complement: {
            zipCode: '93226-467',
            referencePoint: 'Árvore Grande',
            showZip() {
                return this.zipCode;
            }
        }
    },
    attack() {
        return 'atacou';
    }
};

//document.body.innerText = ('street' in unit.address); // verifica se existe a propriedade dentro do objeto
//document.body.innerText = Object.keys(unit); // retorna um vetor com todas as propriedades do objeto
//document.body.innerText = Object.values(unit); // retorna todos os valores
//document.body.innerText = JSON.stringify(unit); // Exibe o objeto em forma de string
//document.body.innerText = JSON.stringify(Object.values(unit));
//document.body.innerText = JSON.stringify(Object.entries(unit)); // Exibe um vetor chave/valor do objeto





//////////////////////////////////////////////////////////////////////////
//                        DESESTRUTURAÇÃO
//////////////////////////////////////////////////////////////////////////





// const { address } = unit; // o mesmo que:      const address = unit.address;
// document.body.innerText = JSON.stringify(address);

// const { address, stamina } = unit;
// document.body.innerText = JSON.stringify({address, stamina});

// const { address, stamina: vigor } = unit; // desestruturação renomeando a variável
// document.body.innerText = JSON.stringify({address, vigor});

// const { address, stamina: vigor, type = 'arqueiro' } = unit; 
// document.body.innerText = JSON.stringify({address, vigor, type});

// const { address, stamina: vigor, type: tipo = 'não possui esta propriedade' } = unit; 
// document.body.innerText = JSON.stringify({address, vigor, tipo});

// function mostraNome(unit) {
//     return unit.name;
// }

// function mostraNome({ name }) {
//     return name;
// }

// function mostraNome({ name: nome }) {
//     return nome;
// }

// function mostraNome({ name: nome = 'Sem Nome' }) {
//     return nome;
// }
// document.body.innerText = mostraNome(unit);

// // Rest Operator:
// const { name, ...rest } = unit; // captura o resto do objeto, ou seja, o objeto sem a propriedade "name"
// document.body.innerText = JSON.stringify(rest);

// // Desestruturação em Array:
// const array = [1, 2, 4, 8, 16, 32, 64, 128];
// const first = array[7];
// document.body.innerText = first;

// const array = [1, 2, 4, 8, 16, 32, 64, 128];
// const [first, second, ...rest] = array;
// document.body.innerText = JSON.stringify({ first, second, rest });

// const array = [1, 2, 4, 8, 16, 32, 64, 128];
// const [first, , third, ...rest] = array; // pulando um índice do array: neste exemplo ele pega apenas o valor do primeiro índice, do terceiro e o resto
// document.body.innerText = JSON.stringify({ first, third, rest });





//////////////////////////////////////////////////////////////////////////
//                            SHORT SYNTAX
//////////////////////////////////////////////////////////////////////////



 

// const nome = 'Felipe';
// const idade = 37;

// // const pessoa = {
// //     nome: nome,
// //     idade: idade
// // };

// // Mesma criação de objeto do exemplo acima, porém usando a short syntax
// const pessoa = {
//     nome,
//     idade
// };

// document.body.innerText = JSON.stringify(pessoa);





//////////////////////////////////////////////////////////////////////////
//                        OPTIONAL CHAINING
//////////////////////////////////////////////////////////////////////////





// // Evita erros por conta de objetos ou propriedades que não existem
// // Também funciona com funções

// document.body.innerText = unit.job?.name;
// document.body.innerText = unit.job?.name ?? 'Não possui esta propriedade';
// document.body.innerText = unit.address?.complement?.showZip() ?? 'Não existe';
// document.body.innerText = unit.address?.complement?.showZop?.() ?? 'Não existe';

// // Tudo a mesma coisa:
// document.body.innerText = unit.name;
// document.body.innerText = unit['name'];
// const key = 'name';
// document.body.innerText = unit[key];

// document.body.innerText = unit.address?.['street'];
// document.body.innerText = unit.capiroto?.['street'];
// document.body.innerText = unit['capiroto']?.['street'];
// document.body.innerText = unit['address']?.['street'];





//////////////////////////////////////////////////////////////////////////
//                        MÉTODOS DE ARRAYS
//////////////////////////////////////////////////////////////////////////





const array = [1, 2, 3, 4, 5];

// for(let i = 0; i < array.length; i++){
//     document.body.innerText += array[i];
// }
// for(const i of array){
//     document.body.innerText += i;
// }
// array.forEach(item => {
//     document.body.innerText += item;
// });
// array.forEach(function(item){
//     document.body.innerText += item;
// });

// // Exemplo nada prático de geração de array a partir de outro
// let novoArray = [];
// for(var i = 0; i < array.length; i++) {
//     novoArray[i] = array[i] * 2;
// }
// document.body.innerText = JSON.stringify(novoArray);

// // Mesmo exemplo, usando foreach: (continua não sendo tão prático)
// let novoArray = [];
// array.forEach(item => {
//     novoArray.push(item * 2);
// });
// document.body.innerText = JSON.stringify(novoArray);

// // Exemplo pior ainda que criei:
// let novoArray = [];
// let cont = 0;
// array.forEach(value => {
//     novoArray[cont] = value * 2;
//     cont++;
// });
// document.body.innerText = JSON.stringify(novoArray);





//////////////////////////////////////////////////////////////////////////
//                               MAP
//////////////////////////////////////////////////////////////////////////





// O map sempre retornará um array com o mesmo número de posições do original. Por isso deve ser usado apenas para gerar outro array modificando os dados do original, não para retornar valores para um array de tamanho diferente ou algum objeto.
// const novoArray = array.map(item => {
//     return item * 2;
// });
// document.body.innerText = novoArray;

// const novoArray = array.map(item => {
//     if(item % 2 === 0) return item * 2;    
//     return 0;
// });
// document.body.innerText = novoArray;





//////////////////////////////////////////////////////////////////////////
//                             FILTER
//////////////////////////////////////////////////////////////////////////





// const novoArray = array.filter(item => item % 2 !== 0);
// document.body.innerHTML = novoArray;

// Neste exemplo o "map" não está escrito da forma mais enxuta possível.
// const novoArray = array
//     .filter(item => item % 2 !== 0)
//     .map(item => {
//         return item * 3;
//     });
// document.body.innerHTML = novoArray;

// const novoArray = array
//     .filter(item => item % 2 !== 0)
//     .map(item => item * 3);
// document.body.innerHTML = novoArray;





//////////////////////////////////////////////////////////////////////////
//                             EVERY
//////////////////////////////////////////////////////////////////////////





// Retorna true apenas se todos os itens do array estiverem de acordo com a condição.

// const todosOsItensSaoNumeros = array.every(item => typeof item === 'number');
// document.body.innerHTML = todosOsItensSaoNumeros;





//////////////////////////////////////////////////////////////////////////
//                             SOME
//////////////////////////////////////////////////////////////////////////





// Retorna true se pelo menos um dos itens estiver de acordo com a condição.

// const peloMenosUmItemNaoENumero = array.some(item => typeof item !== 'number');
// document.body.innerHTML = peloMenosUmItemNaoENumero;





//////////////////////////////////////////////////////////////////////////
//                             FIND
//////////////////////////////////////////////////////////////////////////





// Retorna o primeiro item encotrado que corresponde à condição definida.

// const primeiroPar = array.find(item => item % 2 ===0);
// document.body.innerText = primeiroPar;





//////////////////////////////////////////////////////////////////////////
//                             FINDINDEX
//////////////////////////////////////////////////////////////////////////





// Retorna o índice do primeiro item que corresponder à condição definida.

// const indicePrimeiroPar = array.findIndex(item => item % 2 === 0);
// document.body.innerText = indicePrimeiroPar;





//////////////////////////////////////////////////////////////////////////
//                             REDUCE
//////////////////////////////////////////////////////////////////////////





// Retorna uma outra estrutura qualquer de dados com base em um array

// Verificando cada iteração da função para entendê-la
// const soma = array.reduce((acc, item) => {
//     document.body.innerText += acc + ', ' + item + ' ';
//     return acc;
// }, 0);

// Realizando a soma dos itens do array
// const soma = array.reduce((acc, item) => {    
//     return acc + item;
// }, 0);
// document.body.innerText = soma;

// Realizando a soma dos itens do array (simplificado)
// const soma = array.reduce((acc, item) => acc + item, 0);
// document.body.innerText = soma;





//////////////////////////////////////////////////////////////////////////
//                       OUTROS MÉTODOS DE ARRAY
//////////////////////////////////////////////////////////////////////////





// Alguns métodos que "mutam" os arrays: (mudam o valor do array original, em vez de criar outro array)

// .push()      adiciona um elemento no final do array
// .pop()       remove o último elemento do array
// .unshift()   adiciona um elemento no início do array
// .shift()     remove o primeiro elemento do array
// .reverse()   reverte a ordem dos elementos do array
// .splice()
// .sort()
// .copyWithin()
// .fill()





//////////////////////////////////////////////////////////////////////////
//                             ESPALHAMENTO
//////////////////////////////////////////////////////////////////////////





// Espalhamento desmembra um array ou objeto, ou seja, ao usar o operador "..." antes do array ou objeto, estaremos nos referindo a todos os itens dele.

// Exemplo dentro do projeto TicTacToe:
//Aqui, [...history, nextSquares] cria um novo array que contêm todos os items em history, seguido de nextSquares. (Você pode ler a sintaxe espalhada ...history como “enumere todos os items em history”.)
// setHistory([...history, nextSquares]);





//////////////////////////////////////////////////////////////////////////
//                        TEMPLATE LITERALS
//////////////////////////////////////////////////////////////////////////





// const name = 'Felipe';
// const message = 'Bem vindo, ' + name;
// document.body.innerText = message;

// const name = 'Felipe';
// const message = `Bem vindo, ${name}`;
// document.body.innerText = message;

// const name = null;
// const message = `Bem vindo, ${name ?? 'Visitante'}`;
// document.body.innerText = message;




//////////////////////////////////////////////////////////////////////////
//                     TAGGED TEMPLATE LITERALS
//////////////////////////////////////////////////////////////////////////





// Pesquisar sobre isso. O professor do vídeo falou que não é prioridade e nem tão importante para quem vai usar o React.





//////////////////////////////////////////////////////////////////////////
//                            PROMISES
//////////////////////////////////////////////////////////////////////////





// Função normal, síncrona, sem usar a promise
// const somaDoisNumeros = (a, b) => {
//     return a + b;
// };
// document.body.innerText = somaDoisNumeros(3, 4);

// Utilizando a promise (sem tratar o erro com "reject" e "catch")
// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// };

// somaDoisNumeros(3, 6).then(soma => {
//     document.body.innerText = soma;
// });

// Utilizando a promise (tratando o erro)
// const somaDoisNumeros = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const erro = true;
//             if(erro) reject('Ocorreu um erro');
//             resolve(a + b);
//         }, 2000);
//     });
// };

// somaDoisNumeros(3, 6)
//     .then(soma => {
//         document.body.innerText = soma;
//     })
//     .catch(err => {
//         document.body.innerText = err;
//     });

// document.body.innerText += 'Fluxo segue enquanto a promise fica executando em background';

// Exemplo de uso mais comum, para acessar dados de uma API: ("fetch" é uma função moderna para acessar API, e ela retorna uma promise)
// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Tratando o retorno da requisição (usando "text"):
// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         response.text().then(body => {
//             console.log(body);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });    

// Tratando o retorno da requisição (usando "json"):
// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         response.json().then(body => {
//             console.log(body);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });      

// Desestruturando a resposta em json
// fetch('https://api.github.com/users/diego3g')
// .then(response => {
//     response.json().then(({ login }) => {
//         document.body.innerText = login;
//     });
// })
// .catch(err => {
//     console.log(err);
// });      

// Melhorando a estrutura no uso de promises aninhadas. Para isso, uma promisse pode retornar outra promise.
// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         return response.json();
//     })
//     .then(jsonBody => {
//         console.log(jsonBody);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// Exemplo de promises aninhadas utilizando o método "finaly":
// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         return response.json();
//     })
//     .then(response => {
//         const { login: usuario } = response;
//         document.body.innerText = usuario;
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         document.body.innerText += ' - Vai mostrar isso de qualquer jeito:';
//     });

// Exemplo para não entrar em várias funções aninhadas
// async function buscaDadosGitHub() {
//     const response = await fetch('https://api.github.com/users/diego3g');
//     const body = await response.json();
//     console.log(body);
// }    
// buscaDadosGitHub();

// // Usando função imediata (não sei ainda em que contextos usar função imediata, parece meio inútil)
// (async () => {
//     const response = await fetch('https://api.github.com/users/diego3g');
//     const body = await response.json();
//     console.log(body);
// })();

// Adicionando catch e finally na forma não aninhada de trabalhar com promises
// async function buscaDadosGitHub() {
//     try {
//         const response = await fetch('https://api.github.com/users/diego3g');
//         const body = await response.json();
//         console.log(body);
//     } catch(err) {
//         console.log(err);
//     } finally {
//         console.log('Fim da execução.');
//     }
// }
// buscaDadosGitHub();

// async function buscaDadosGitHub() {
//     try {
//         const response = await fetch('https://api.github.com/users/diego3g');
//         const body = await response.json();
//         return body.name;
//     } catch(err) {
//         console.log(err);
//     } finally {
//         console.log('Fim da execução.');
//     }
// }
// const resposta = await buscaDadosGitHub();
// console.log(resposta);

// async function buscaDadosGitHub() {
//     try {
//         const response = await fetch('https://api.github.com/users/diego3g');
//         const body = await response.json();
//         return body.name;
//     } catch(err) {
//         console.log(err);
//     } finally {
//         console.log('Fim da execução.');
//     }
// }
// const resposta = buscaDadosGitHub().then(response => {
//     console.log(response);
// });





//////////////////////////////////////////////////////////////////////////
//                            ES Modules
//////////////////////////////////////////////////////////////////////////





// import { soma, subtrai, somaAsync, PI } from './lib/felipeFunctions';
// import soma from './lib/functionExportDefault';
// import somaComOutroNome from './lib/functionExportDefault';
// import * as math from './lib/felipeFunctions';
// import { soma as sum } from './lib/felipeFunctions';
import { soma } from './lib/sum';

// //document.body.innerText = soma(4, 6);
// //document.body.innerText = subtrai(4, 6);
// // somaAsync(4, 6).then(response => {
// //     document.body.innerText = response;
// // });

// // const resposta = await somaAsync(3, 2);
// // document.body.innerText = resposta;
// //document.body.innerText = PI;

// document.body.innerText = soma(2, 2);
// document.body.innerText = somaComOutroNome(2, 2);
// console.log(math);
// document.body.innerText = math.soma(3, 2);

// document.body.innerText = sum(3, 4);
// document.body.innerText = soma(5, 4);






//////////////////////////////////////////////////////////////////////////
//                       Espaço para meus testes
//////////////////////////////////////////////////////////////////////////





// Testando função assíncrona e formas de interromper a execução do código antes do comando seguinte executar
// // Exemplo 1
// function soma(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// }

// async function somando() {
//     const resultado = await soma(8, 8);
//     document.body.innerText = resultado;
// }

// somando();
// document.body.innerText = 'Após tudo';

// // Exemplo 2
// function soma(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// }

// async function somando() {
//     const resultado = await soma(8, 8);
//     //document.body.innerText = resultado;
//     return resultado;
// }

// const final = await somando();
// document.body.innerText = final;

// Exemplo 3 (igual ao 2 mas sem dar voltas desnecessárias)
// function soma(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b);
//         }, 2000);
//     });
// }

// const final = await soma(8, 8);
// document.body.innerText = final;

