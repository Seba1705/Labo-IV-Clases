import { ListadoComponent } from './pages/listado/listado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { PracticaComponent } from './pages/practica/practica.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'clase-1', component: BienvenidoComponent },
    { path: 'clase-2', component: LoginComponent },
    { path: 'clase-3', component: InputOutputComponent },
    { path: 'clase-4', component: DirectivasComponent },
    { path: 'clase-5', component: PracticaComponent },
    { path: 'clase-5B', component: ListadoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
