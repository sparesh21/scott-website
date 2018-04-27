import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ComingSoonComponent } from './templates/coming-soon/coming-soon.component';

export const router: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
}, {
    path: 'home',
	component: HomeComponent,
}, {
    path: 'about',
	component: AboutComponent,
}, {
    path: 'coming-soon',
    component: ComingSoonComponent,
}];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);