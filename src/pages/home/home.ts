import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
    {
      description: "estudiar",
      done: true
    },
    {
      description: "lavar ropa",
      done: true
    },
    {
      description: "trabajar",
      done: false
    }
  ];

  botones: any[] = [
    {
      color: "secondary",
      grande: false,
      texto: "terminados"
    },

    {
      color: "danger",
      grande: false,
      texto: "pendientes"
    },

    {
      color: "dark",
      grande: true,
      texto: "todos"
    },

  ];







  constructor() {

  }

  ngOnInit() {

    this.agregarQuehacer("comer", false);
    this.agregarQuehacer("estudiar", true);
    this.agregarQuehacer("armar el cubo de rubik", false);
  }

  agregarQuehacer(nuevoquehacer: string, terminado: boolean) {
    if (nuevoquehacer !== "") {
      this.quehaceres.push({
        description: nuevoquehacer,
        done: terminado
      });
    }
    this.quehaceres.push({
      description: nuevoquehacer,
      done: terminado
    });
  }

  filtrarQuehaceres(texto: string) {
    if (texto=== "terminados"){
      this.botones[0].grande = true;
      this.botones[1].grande = false;
      this.botones[2].grande = false;
    } else if (texto==="pendientes") {
      this.botones[0].grande = false;
      this.botones[1].grande = true;
      this.botones[2].grande = false;
    } else if (texto === "todos"){
      this.botones[0].grande = false;
      this.botones[1].grande = false;
      this.botones[2].grande = true;



     }
  }


}
