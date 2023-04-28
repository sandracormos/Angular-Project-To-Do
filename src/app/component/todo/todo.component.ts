import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TodosService } from 'src/app/Services/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  newTask: string ='';
  todos! : Todo[];
  inputTodo: string='';
  showSecondRow: boolean=false;
  tasksFromDB: Todo[]=[];
  constructor(private TodosService: TodosService){}

  ngOnInit(): void{
    this.todos=[
      {
        content:' first content ',
        completed:  false
      },
      {
        content:' second content ',
        completed:  false
      },
    ]

  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
        console.log(v.completed);
      }
      return v;
    });
  }
  

  deleteTodo(id:number){
    this.todos = this.todos.filter((v, i)=>i!==id);

  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });

    let myTodo = {content: this.newTask, completed: false};
    this.TodosService.addToDo(myTodo);

    this.inputTodo="";
  }
 

  showMoreButtons(){
    this.showSecondRow = true;
  }

  showLessButtons(){
    this.showSecondRow = false;
  }

  getTasks(){
    this.TodosService.getTasks().subscribe((result: Todo[])=>
      {
        this.tasksFromDB = result;
      });
  }

}
