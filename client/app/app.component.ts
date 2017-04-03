import {Component} from '@angular/core';
import { TaskService } from './services/tasks.service';
import { LangService } from './services/lang.service';
import { qstartService } from './services/qstart.service';

@Component({
    moduleId : module.id,
    selector: 'my-app',
    templateUrl:'app.component.html',
    providers:[TaskService,LangService,qstartService]
})
export class AppComponent {
    signUp(event){
        alertify.confirm('Modal: false');
    }
    test(event){
        alert("wedene!!");
    }
 }