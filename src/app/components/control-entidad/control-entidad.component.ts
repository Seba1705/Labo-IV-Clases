import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../../services/entidades.service';
import { EntidadUsuario } from '../../clases/entidadUsuario.class';
import { EntidadPais } from '../../clases/entidadPais.class';

@Component({
    selector: 'app-control-entidad',
    templateUrl: './control-entidad.component.html',
    styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

    entidadesUsuario: EntidadUsuario[] = [];
    entidadUsuario: EntidadUsuario;

    entidadesUsuarioBorradas: EntidadUsuario[] = [];
    entidadUsuarioBorrada: EntidadUsuario;

    entidadesPaises: EntidadPais[] = [];
    entidadPais: EntidadPais;

    public mostrarUsuarios = true;

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.entidadesService.getUsuarios().subscribe((resp: EntidadUsuario[]) => this.entidadesUsuario = resp);

        this.entidadesService.getPaises().subscribe((resp: EntidadPais[]) => this.entidadesPaises = resp);

    }

    tomarUsuarioParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuario = entidad;
    }

    tomarUsuarioBorradoParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuarioBorrada = entidad;
    }

    tomarPaisParaDetalles(entidad: EntidadPais) {
        this.entidadPais = entidad;
    }
}
