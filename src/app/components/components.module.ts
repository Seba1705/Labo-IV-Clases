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
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';


@NgModule({
    declarations: [
        ControlEntidadComponent,
        NavbarComponent,
        ListadoEntidadComponent,
        DetalleEntidadComponent,
        UsuarioComponent,
        ListadoUsuariosComponent,
        ListadoPaisesComponent,
        DetalleUsuarioComponent,
        DetallePaisComponent
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
        UsuarioComponent,
        ListadoUsuariosComponent,
        ListadoPaisesComponent,
        DetalleUsuarioComponent,
        DetallePaisComponent
    ]
})
export class ComponentsModule { }
