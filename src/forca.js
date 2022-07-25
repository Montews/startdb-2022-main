class Forca {

  letrasChutadas
  vidas
  palavra 
  desafio
  estado

  constructor(desafio) {
    this.desafio = desafio
    this.letrasChutadas = []
    this.letrasChutada = []
    this.vidas = 6
    this.palavra = []
    this.teste = 6
    this.estado = "aguardando chute"
  }

  chutar(letra) {
    if(this.vidas === 1){
      this.estado = "perdeu"
    }

   this.palavra = this.desafio.split("");//separa a resposta


    if(letra.length!=1){
      console.log(" • Escreva apenas uma letra • ")
    }
    if(!this.letrasChutadas.includes(letra) && letra.length==1){
      this.letrasChutadas.push(letra)

      if(!this.desafio.includes(letra)){ //resposta errada
        this.diminuiVida();
        return;
      }
      this.addPalavra(letra);
      return;
   }
  }

  addLetra(letra){
    this.letrasChutadas.push(letra)
  }

  addPalavra(letra){
    this.palavra.push(letra)
  }

  diminuiVida(){
    return this.vidas--
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

   
  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
     // teste: this.teste
    }
    
  }
  
  
}

module.exports = Forca;
