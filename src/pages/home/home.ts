import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable }        from 'rxjs/Observable';

import { Todo } from '../../shared/Todo';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  quehaceres: Todo[] = [
     {
       description:"estudiar",
       done:true
     },
     {
       description:"lavar ropa",
       done:true
     },
     {
       description:"trabajar",
       done:false
     }
  ];


  buttons = [
    {
      type: 'done',
      class: ''
    }, {
      type: 'pending',
      class: ''
    }, {
      type: 'all',
      class: ''
    }
  ];

  constructor() {

  }

  ngOnInit() {

    this.agregarQuehacer("comer", false);
    this.agregarQuehacer("estudiar", true);
    this.agregarQuehacer("armar el cubo de rubik", false);
  }

  agregarQuehacer(nuevoquehacer: string, terminado: boolean){
    if(nuevoquehacer !=="") {
      this.quehaceres.push({
        description:nuevoquehacer,
        done: terminado
      });
    }
    this.quehaceres.push({
    description: nuevoquehacer,
    done: terminado
    });
  }


}
