import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from './models/todo';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoLab';
  formTodo:Todo = {} as Todo;
  todos:Todo[]= [
    {
    task: "fold clothes",
    completed: true,
    duration:2,
    priority:"High"
  },
  {
    task: "put clothes in dresser",
    completed: true,
    duration:0.5,
    priority:"Normal"
  },
  {
    task: "call mom",
    completed: false,
    duration:0.75,
    priority:"Low"
  }
]

completeTask(task:Todo):void{
  task.completed = true;
}
removeTask(task:Todo):void{
  let index:number = this.todos.findIndex(t=> t==task);
  this.todos.splice(index,1);
}
AddTask():void{
   let newtask:Todo = {...this.formTodo}
   this.todos.push(newtask)
   console.log(newtask.priority)
}
}
