import {Component} from '@angular/core';
import { LangService } from '../../services/lang.service';
import { Router } from '@angular/router';

@Component({
    moduleId : module.id,
    selector: 'notify',
    templateUrl:'notify.component.html'
})
export class notifyComponent {

    langItem:Array<String> = [];
    public logError:any;
    
    constructor(private langService:LangService){
        this.langService.getAllLangs().subscribe(
            data => {this.langItem= data},
            err => this.logError(err),
            () => this.langItem.forEach(element=>{

            }));
    }
    startQuiz(event){
     alertify.alert('Normal message');
     alertify.error("Error");
    }

    clicked(event) {
    event.preventDefault();
  }
 }