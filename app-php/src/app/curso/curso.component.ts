import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']

})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/ProjectCurso/php/";

  //Vetor de Cursos
  vetor: Curso[] = [];
  
  //Objeto da classe curso
  curso = new Curso();

  //Construtor
  constructor(private curso_service: CursoService) {}

  //Inicializador
  ngOnInit() {
    //Ao iniciar, deverá listar os cursos
    this.selecao();    
  }

  //Cadastrar
  cadastrar(){
    this.curso_service.cadastrarCurso(this.curso).subscribe(
      (res: Curso) => {
        //limpar atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        //atualizando listagem com novo cadastro
        this.selecao();
      }
    )
  }

  //Seleção
  selecao(){
    console.log('call selecao component');
    this.curso_service.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
      } 

  //Alterar
  alterar(){
    this.curso_service.atualizarCurso(this.curso).subscribe(
      (res) => {
        //Atualizar vetor
        this.vetor = res;
        //Limpar campos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        //Atualizar listagem
        this.selecao();
      }
    )
  }

  //Remover
  remover(){
   this.curso_service.removerCurso(this.curso.idCurso).subscribe(
    (res: Curso) => {
      //Limpar campos
      this.curso.nomeCurso = "";
      this.curso.valorCurso = 0;
      //Atualizar listagem
      this.selecao();
    }
   );
  }

  //selecionador de curso
  selecionarCurso(curso:Curso){
    this.curso.idCurso = curso.idCurso;
    this.curso.nomeCurso = curso.nomeCurso;
    this.curso.valorCurso = curso.valorCurso;
  }
}
