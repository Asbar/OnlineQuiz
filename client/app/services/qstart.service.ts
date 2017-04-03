import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class qstartService{
    constructor(private http:Http){
        console.log("qstartService initialized");
    }
    getQuesById(id){
        return this.http.get('/api/ques/'+id)
            .map(res=>res.json());
    }
}