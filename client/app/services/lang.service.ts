import {Injectable} from '@angular/core'
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LangService{
    constructor(private http:Http){

    }
    getAllLangs(){
        return this.http.get('/api/lang')
            .map(res=>res.json());
    }
}