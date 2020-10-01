import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  variavelBorda: "dotted";


   cursos = [
    {nome: 'análise e desenvolvimento de sistemas', horario: 'Noturno 19H00 as 22H40'},
    {nome: 'análise e desenvolvimento de sistemas', horario: 'Vespertino 13H00 as 18H30'},
    {nome:'eventos', horario: 'Manhã 8H00 as 13H30'},
  {nome:'gestão comercial', horario:  'Noturno 19H00 as 22H40' },
    {nome:'gestão comercial', horario: 'Manhã 8H00 as 13H30'},
    {nome:'recursos humanos', horario: 'Noturno 19H00 as 22H40'},
    {nome:'gestão comercial' , horario: 'EAD – Ensino distância'}

 ];

  onAdicionarCurso(curso){
     this.cursos = [curso,...this.cursos];
      console.log(curso);

     }


}
