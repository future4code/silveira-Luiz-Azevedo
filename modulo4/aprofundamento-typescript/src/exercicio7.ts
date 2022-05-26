enum Classificacao {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Íntimas"
}

type Produto = {
    nome: string,
    classificacao: string
    preco: number
}

const listaDeProdutos: Produto[] = [
    { nome: "Regata", classificacao: Classificacao.VERAO, preco: 80 },
    { nome: "Casaco", classificacao: Classificacao.INVERNO, preco: 100 },
    { nome: "Sunga", classificacao: Classificacao.BANHO, preco: 30 },
    { nome: "Cueca", classificacao: Classificacao.INTIMAS, preco: 100 }
]
//a)
type novoProduto = {
    nome: string,
    classificacao: string
    preco: number,
    desconto: number,
    precoDesconto:number
}
// function descontos(listaDeProdutos: Produto[]): novoProduto[] {
//         for (let i = 0; i < listaDeProdutos.length; i++) {
//         switch (listaDeProdutos[i].classificacao) {
//             case Classificacao.VERAO:
//                 const desconto:number = listaDeProdutos[i].preco * 0.05;
//                 const novoPreco:number = listaDeProdutos[i].preco * 0.95;
//                 return { ...listaDeProdutos[i], desconto: desconto, precoDesconto: novoPreco }
//             case Classificacao.INVERNO:
//                 const desconto1 = listaDeProdutos[i].preco * 0.1;
//                 const novoPreco1 = listaDeProdutos[i].preco * 0.9;
//                 return { ...listaDeProdutos[i], desconto: desconto1, precoDesconto: novoPreco1 }
//                 case Classificacao.BANHO:
//                 const desconto2 = listaDeProdutos[i].preco * 0.04;
//                 const novoPreco2 = listaDeProdutos[i].preco * 0.96;
//                 return { ...listaDeProdutos[i], desconto: desconto2, precoDesconto: novoPreco2 }
//              case Classificacao.INTIMAS:
//                 const desconto3 = listaDeProdutos[i].preco * 0.07;
//                 const novoPreco3 = listaDeProdutos[i].preco * 0.93;
//                 return { ...listaDeProdutos[i], desconto: desconto3, precoDesconto: novoPreco3 }
//         }
//     }
// }