/**1.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Vai ser impresso:
10
10 5

2. 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
Vai ser impresso:
10 10 10

3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
Sugestão:
let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasDeTrabalho} por hora`)*/

/*const nome = "";
let idade = "";

console.log(typeof nome, typeof idade);
/** Não defini se idade precisa ser number, então ele reconheceu como string, que pode ser qualquer caractere

 const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
console.log(nome, idade);
console.log(typeof nome, typeof idade);

Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu */

/*const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
console.log("Olá,", nome,"você tem", idade, "anos.");
console.log(typeof nome, typeof idade);*/

/**Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?".
 
const clima = "Hoje fez calor?";
const calçado = "Hoje você saiu de casa de tênis?";
const transporte = "Hoje você usou transporte público?";
a = "- SIM";
b = "- NÃO";
c = "- SIM";
console.log(clima, a);
console.log(calçado, b);
console.log(transporte, c);

3.Suponha que temos duas variáveis a e b, cada uma com um valor inicial
Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a. 
Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente
(ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). */
/**let a = 10
let b = 25
let c = 0
c = a
a = b
b = c
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);
 começar com c=a fez com que "salvasse" o valor de a em c, para acessar depois, com o b; independente do valor de c a vira 25 depois com a =b; e agora com c = 10 b pode ser 10 também com b = c. */
 
 /**Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
  * O primeiro número somado ao segundo número resulta em: x
  * O primeiro número multiplicado pelo segundo número resulta em: y.*/
 let numFav = prompt("Qual o seu número de favorito?");
 let diaDoMes = prompt("Hoje é qual dia do mês?");
 let numFavNumero = Number(numFav);
 let diaDoMesNumero = Number(diaDoMes);
 console.log("x:", numFavNumero+diaDoMesNumero);
 console.log("y:", numFavNumero*diaDoMesNumero);