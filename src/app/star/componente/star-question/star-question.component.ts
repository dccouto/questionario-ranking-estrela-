import { Component, OnInit } from '@angular/core';
import { Pergunta, Resposta } from '../../modelo/star-question.modelo';

@Component({
  selector: 'app-star-question',
  templateUrl: './star-question.component.html',
  styleUrls: ['./star-question.component.css']
})
export class StarQuestionComponent implements OnInit {
  estrelaSelecionada: string = '0';
  listaResposta: Resposta [] = [];
  pergunta: Pergunta = new Pergunta();
  resposta: Resposta = new Resposta();

  constructor() { }

  ngOnInit() {
    this.inicializaRespostas();
    this.inicializaPergunta();
  }
  private inicializaPergunta(){
    this.pergunta.id = 1;
    this.pergunta.descricao = 'Como você classifica esse exemplo feito pelo dev Diego Couto?';
    this.pergunta.respostas = this.listaResposta;
  }
 
  private inicializaRespostas() {
    this.resposta.id = 1;
    this.resposta.descricao = 'Bom';
    this.listaResposta.push(this.resposta);

    this.resposta = new Resposta;
    this.resposta.id = 2;
    this.resposta.descricao = 'Muito Bom';
    this.listaResposta.push(this.resposta);

    this.resposta = new Resposta;
    this.resposta.id = 3;
    this.resposta.descricao = 'Excelente';
    this.listaResposta.push(this.resposta);

  }

  mudarEstrela(index: number, quantidadeRespostas:number){
        
    while(quantidadeRespostas > 0){
      if(document.getElementById('star'+(quantidadeRespostas - 1).toString()).classList.contains('fa-star')){

        document.getElementById('star'+(quantidadeRespostas - 1).toString()).classList.remove('fa-star');
        document.getElementById('star'+(quantidadeRespostas - 1).toString()).classList.add('fa-star-o');
      }
      quantidadeRespostas--;
    }

    while(index >= 0){

      if(document.getElementById('star'+index.toString()).classList.contains('fa-star-o')){
        document.getElementById('star'+index.toString()).classList.remove('fa-star-o');
        document.getElementById('star'+index.toString()).classList.add('fa-star');
      }
      index--;
    }
    
  }

}
