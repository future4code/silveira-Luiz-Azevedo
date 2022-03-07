// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a,b) {
      return a - b;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((item) =>{
      return item % 2 === 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((item) =>{
        return item % 2 === 0
    }).map((item) =>{
        return item * item
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
    for (let num of array) {
        if (maiorNumero < num) {
            maiorNumero = num
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = 0
  let menor = 0
  if (num1 > num2) {
    maior = num1;
    menor = num2
  } 
  else if (num2 > num1) {
    maior = num2;
    menor = num1
  } else {
    maior = num1
    menor = num2
  }
  const objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: maior % menor === 0,
    diferenca: maior - menor
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = [] 
  for (let i = 0; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i)
    }
  }
  return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  } else if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoB !== ladoA || ladoC === ladoA && ladoC !== ladoB) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
  }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = [];
  let arrayEmOrdem = array.sort(function(a,b) {
    return a - b
  })
novoArray.push(arrayEmOrdem[arrayEmOrdem.length-2], arrayEmOrdem[1]);
return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  // return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}