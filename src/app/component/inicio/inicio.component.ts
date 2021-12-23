import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContaService, Transferencia } from 'src/app/service/conta.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isModal:boolean = false
  transfs!:Transferencia[]

  idTransf!: any

  constructor(private service:ContaService, private router:Router) {
  }



  ngOnInit() {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.service.getTransf().subscribe(res=>{
      console.log(res)
      this.transfs = res
    })
  }

  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }

  confirm(){
    this.service.deleteTransf(this.idTransf).subscribe({
      next: (res) => console.log(res),
      error: (e) => console.error(e),
      complete: () => {console.info('complete'); this.listarTransferencias(); this.isModal = false}
    })
  }

  cancel(){
    this.isModal = false
  }

  mostrarModal(id:any){
    this.isModal = true
    this.idTransf = id
  }

}
