import { Component, EventEmitter, Input, Output} from '@angular/core';

import { UserModel } from 'src/app/models/user-modele/user-modele.module';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  @Input() users: UserModel[] =[];
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor() {
    
   }

   //en esta función mandamos el output al hacer click en el boton y mandamos como parametro el id del usuario
   borrar(id:number){
     //alert(`vamos a borrar el id: ${id}`);
     this.onDelete.emit(id)
   }
 

}
