import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL
  url = "http://localhost/api/ProjectCurso/php/";

  //Vetor
  vetor: Curso[] = [];

  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos(): Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res:any) => {
        this.vetor = res;
        return this.vetor;
      })
    )
  }

  //Cadastrar Curso
  cadastrarCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.url+'cadastrar', curso)
  }

  //Remover curso
  removerCurso(id: any): Observable<Curso>{
    const url = `${this.url}excluir?idCurso=${id}`
    console.log(url);
    return this.http.delete<Curso>(url);
  }

  //Atulaizar curso
  atualizarCurso(curso:Curso): Observable<Curso[]>{
    return this.http.put(this.url+'alterar', {cursos: curso}).pipe(
      map((res) => {
      const cursoAlterado = this.vetor.find((item) => {
        return +item['idCurso'] === +['idCurso'];
      });
      if(cursoAlterado){
        cursoAlterado['nomeCurso'] = curso['nomeCurso'];
        cursoAlterado['valorCurso'] = curso['valorCurso'];
      }
      return this.vetor;
  }))
  }
}
