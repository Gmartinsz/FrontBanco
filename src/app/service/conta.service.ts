import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  url = 'http://localhost:3000/transferencias'
  constructor(private http:HttpClient) { }

  getTransf():Observable<any>{
    return this.http.get<any>(this.url)
  }

  addTransf(transferencia:Transferencia){
    return this.http.post(this.url, transferencia)
  }

  getOneTransf(id:any){
    return this.http.get(this.url + '/' + id)
  }

  editTransf(id:any, transferencia:Transferencia){
    return this.http.put(this.url + '/' + id, transferencia)
  }

  deleteTransf(id:any){
    return this.http.delete(this.url + '/' + id)
  }
}

export interface Transferencia{
  id_transf:string
  nomeCliente:string
  valor:string
  contaCliente:string
  }

