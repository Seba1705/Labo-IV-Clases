import { ListadoMateriaComponent } from './materia/listado-materia/listado-materia.component';
import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';
import { DetalleMateriaComponent } from './materia/detalle-materia/detalle-materia.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ControlEntidadComponent } from './control-entidad/control-entidad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadoEntidadComponent } from './listado-entidad/listado-entidad.component';
import { DetalleEntidadComponent } from './detalle-entidad/detalle-entidad.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { BotonEntidadComponent } from './boton-entidad/boton-entidad.component';
import { BotonUsuarioComponent } from './boton-usuario/boton-usuario.component';
import { BotonPaisComponent } from './boton-pais/boton-pais.component';
import { AdminComponent } from './admin/admin.component';
import { ListadoAlumnoComponent } from './alumno/listado-alumno/listado-alumno.component';
import { ControlPaisComponent } from './control-pais/control-pais.component';
import { ControlListadoComponent } from './control-listado/control-listado.component';
import { BorrarComponent } from './borrar/borrar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ModificacionComponent } from './modificacion/modificacion.component';


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
        DetallePaisComponent,
        BotonEntidadComponent,
        BotonUsuarioComponent,
        BotonPaisComponent,
        AdminComponent,
        DetalleAlumnoComponent,
        FormAlumnoComponent,
        DetalleMateriaComponent,
        TablaAlumnoComponent,
        ListadoAlumnoComponent,
        ListadoMateriaComponent,
        ControlPaisComponent,
        ControlListadoComponent,
        BorrarComponent,
        DetalleComponent,
        ModificacionComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        RouterModule
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
        DetallePaisComponent,
        BotonEntidadComponent,
        BotonUsuarioComponent,
        BotonPaisComponent,
        AdminComponent,
        DetalleAlumnoComponent,
        FormAlumnoComponent,
        DetalleMateriaComponent,
        TablaAlumnoComponent,
        ListadoAlumnoComponent,
        ListadoMateriaComponent,
        ControlPaisComponent,
        ControlListadoComponent
    ]
})
export class ComponentsModule { }
