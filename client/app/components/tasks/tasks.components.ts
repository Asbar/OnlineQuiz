import {Component} from '@angular/core';
import { TaskService } from '../../services/tasks.service';


@Component({
    moduleId:module.id, 
    selector: 'tasks',
    templateUrl:'tasks.components.html'
})
export class TaskComponent {

    taskitems:Array<string> = [];
    public logError:any;

    constructor(private taskService:TaskService){
        this.taskService.getTasks().subscribe(
            data => {this.taskitems = data},
            err => this.logError(err),
            () =>  this.taskitems.forEach(element => {
                //this.tasks.push({"title":tasks.title,"isDone":tasks.isDone});    
        }));
    }
}