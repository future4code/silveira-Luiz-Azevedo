/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    function blackjack(){
      const boasVindas = `Boas vindas ao jogo de Blackjack!`;
      console.log(boasVindas);
      let cartasUsuario = [];
      let valoresUsuario = [];
      let pontosUsuario = 0;
      let cartasComputador = [];
      let valoresComputador = [];
      let pontosComputador = 0;
      if (confirm(`Quer iniciar uma nova rodada?`)){//confirm abre um botao com ok e cancelar
        let i =0
         while (i<=2){
         const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
         const carta1 = comprarCarta()//carta = usuario; carta1 = computador 
         cartasUsuario.push(carta.texto);
         valoresUsuario.push(carta.valor);
         cartasComputador.push(carta1.texto);
         valoresComputador.push(carta1.valor);
         pontosUsuario += valoresUsuario[i];
         pontosComputador += valoresComputador[i];
         console.log(`Usuário: cartas - ${cartasUsuario} - pontuação - ${pontosUsuario}`) // imprime o texto da carta. Nesse caso: "K♦️"// imprime o valor da carta (um número). Nesse caso: 10)
         console.log(`Computador: cartas - ${cartasComputador} - pontuação - ${pontosComputador}`);
         if (pontosComputador == 22 || pontosUsuario == 22){
            console.log(`Suas duas cartas foram A, sortearemos de novo as cartas`)
            cartasUsuario.splice(0,2)
            valoresUsuario.splice(0,2)
            cartasComputador.splice(0,2)
            valoresComputador.splice(0,2)
            while (i<=2){
            const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
         const carta1 = comprarCarta()//carta = usuario; carta1 = computador 
         cartasUsuario.push(carta.texto);
         valoresUsuario.push(carta.valor);
         cartasComputador.push(carta1.texto);
         valoresComputador.push(carta1.valor);
         pontosUsuario += valoresUsuario[i];
         pontosComputador += valoresComputador[i];}
         }else{
            return
         }
        }
        confirm(`Suas cartas são ${cartasUsuario[0, 1]}. A carta revelada do computador é ${cartasComputador[2]}." +
         "\n"+  // \n faz pular a linha  "Deseja comprar mais uma carta?`)
         for (i = 0; pontosComputador < 21 || pontosUsuario < 21; i++){
         const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
         const carta1 = comprarCarta()//carta = usuario; carta1 = computador
      //tudo dentro desse if é se o usuario clicar em OK
         cartasUsuario.push(carta.texto);
         valoresUsuario.push(carta.valor);
         cartasComputador.push(carta1.texto);
         valoresComputador.push(carta1.valor);
         somaUsuario += valoresUsuario[i];
         somaComputador += valoresComputador[i];
      }      
         console.log(`Usuário: cartas - ${cartasUsuario} - pontuação - ${pontosUsuario}`) // imprime o texto da carta. Nesse caso: "K♦️"// imprime o valor da carta (um número). Nesse caso: 10)
         console.log(`Computador: cartas - ${cartasComputador} - pontuação - ${pontosComputador}`);
      if (pontosUsuario > pontosComputador){
         console.log('O usuário ganhou!')
      } else if (pontosUsuario < pontosComputador){
         console.log("O computador ganhou!")
      } else if (pontosComputador == pontosComputador){
        console.log("Deu empate!")
      }
         return true
      }else{
      //tudo dentro do else é se clicar em cancelar
         console.log(`O jogo acabou!`);
         return false
      }
   }
   blackjack()
