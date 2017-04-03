import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TaskComponent} from './components/tasks/tasks.components';
import { notifyComponent } from './components/notify/notify.component';
import { HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import { qstartComponent } from './components/qStart/qstart.component';
import { routes } from './app.router';

@NgModule({
    imports: [BrowserModule,HttpModule,routes],
    declarations: [AppComponent,TaskComponent,notifyComponent,qstartComponent],
    bootstrap:[AppComponent] 
})
export class AppModule { }