import { Component} from '@angular/core';
import { UserModel } from 'src/app/models/user-modele/user-modele.module';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {


// objeto users de tipado UserModel[]
  users: UserModel[] = [
    {
      id:1,
      name: 'Constanza Pérez',
      age: 3
    },
    {
      id:2,
      name: 'Israel Pérez',
      age: 25
    },
    {
      id: 3,
      name: 'Cecilia Vilchis',
      age: 26
    },
    {
      id: 4,
      name: 'Susana Vargas',
      age: 53
    },
    {
      id: 5,
      name: 'Ruben Pérez',
      age: 22
    }

  ]

  constructor() { }


  // esta funcion es la que definimos en la llamada del output con el id como parametro
  deleteUser(id:any){ 

    // con un foureach recorreremos todo nuestro objeto
    this.users.forEach(element => {

      // si el id de algun elemento del objeto coincide con el id que viene de valor haremos algo
      if(element.id == id){
        // con el método splice eliminamos el elemento desde la posición en que se encuentra y recorriendo solo 1 posición
        this.users.splice( this.users.indexOf(element), 1);
        
      }
    })
  }

 

}
