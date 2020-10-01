import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoDiretivaDirective } from './curso-diretiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,

    CursoCadastroComponent,
    CursoDiretivaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
