import { Component, OnInit } from '@angular/core';
import { Transferencia, ContaService } from 'src/app/service/conta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  form!:FormGroup

  verifyStatus:boolean = true

  transf:any

  constructor(private fb:FormBuilder, private service:ContaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      id_transf:[null],
      nomeCliente:[null],
      valor:[null],
      contaCliente:[null]
    })
    const id_ = <any>this.route.snapshot.params['id']
    console.log('id_: ' + id_)
    this.service.getOneTransf(id_).subscribe({
      next:(res)=>{console.log(res);this.transf = res;this.updateForm(res);this.verifyStatus = false},
      error:(e)=>console.error(e),
      complete:()=>console.info('Transf encontrada')
    })
  }



  saveTransf(){
    console.log(this.form.value)
    if(this.form.value.id){
      this.service.editTransf(this.form.value.id, this.form.value).subscribe({
        next:(res)=>console.log('Transf editada'),
        error:(e)=> console.error(e),
        complete:()=>{console.info('Edição completa');this.router.navigate(['/inicio'])}
      })
    }else{
      this.service.addTransf(this.form.value).subscribe({
        next:(res)=> console.log('Transf cadastrada corretamente'),
        error:(e)=> console.error(e),
        complete:() => {console.info('Cadastro completo'); this.router.navigate(['/inicio'])}
      })
    }
  }

  updateForm(transf:any){
    this.form.patchValue({
      id_transf:transf.id_transf,
      nomeCliente:transf.nomeCliente,
      valor:transf.valor,
      contaCliente:transf.contaCliente
    })
  }

}
