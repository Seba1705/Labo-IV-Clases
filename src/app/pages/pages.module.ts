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

@NgModule({
    declarations: [
        HomeComponent,
        InputOutputComponent,
        BienvenidoComponent,
        LoginComponent,
        DirectivasComponent,
        PracticaComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule
    ]
})
export class PagesModule { }
