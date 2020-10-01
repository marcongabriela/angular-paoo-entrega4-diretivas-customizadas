import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent  {

  @Output() cursoAdicionado = new EventEmitter();

  adicionar (nome,horario){
    const curso = {nome:nome, horario:horario};
    this.cursoAdicionado.emit(curso);

  }
}
