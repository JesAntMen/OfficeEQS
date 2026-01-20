import { Routes } from '@angular/router';
import { Start } from './page/start/start';
import { AboutUs } from './page/about-us/about-us';

export const routes: Routes = [
    {path:"",component:Start},
    {path:"About-Us",component:AboutUs}
];
