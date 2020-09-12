import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlEntidadComponent } from './control-entidad/control-entidad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoEntidadComponent } from './listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './detalle-entidad/detalle-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
    declarations: [
        ControlEntidadComponent,
        NavbarComponent,
        ListadoEntidadComponent,
        DetalleEntidadComponent,
        UsuarioComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        ControlEntidadComponent,
        NavbarComponent,
        ListadoEntidadComponent,
        DetalleEntidadComponent,
        UsuarioComponent
    ]
})
export class ComponentsModule { }
