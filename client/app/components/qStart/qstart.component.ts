import { Component } from '@angular/core';
import { qstartService } from '../../services/qstart.service';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector:"qstart",
    templateUrl:"qstart.component.html"
})
export class qstartComponent{

    //public quesItem:any;
    qStartItem:Array<String> = [];
    public logError:any;
    
    constructor(private _qstartService:qstartService){
       /*
        this._qstartService.getQuesById('58e12345734d1d01a23a133d').subscribe(
            data => {this.qStartItem= data},
            err => this.logError(err),
            () => this.qStartItem.forEach(element=>{

            }));
        */
    }
}