import { NgModule } from '@angular/core';
import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PracticaComponent } from './practica/practica.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HomeComponent,
        InputOutputComponent,
        BienvenidoComponent,
        LoginComponent,
        DirectivasComponent,
        PracticaComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule
    ]
})
export class PagesModule { }
