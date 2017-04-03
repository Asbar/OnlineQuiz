import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { qstartComponent } from './components/qStart/qstart.component';
import { notifyComponent } from './components/notify/notify.component';


export const router :Routes=[
    {path:'',redirectTo:'notify',pathMatch:'full'},
    {path:'notify',component:notifyComponent},
    {path:'qstart',component:qstartComponent},
    
];

export const routes :ModuleWithProviders= RouterModule.forRoot(router);