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

    entidadesPaises: EntidadPais[] = [];
    entidadPais: EntidadPais;

    mostrarUsuarios: boolean;

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.entidadesService.getUsuarios().subscribe((resp: EntidadUsuario[]) => this.entidadesUsuario = resp);

        this.entidadesService.getPaises().subscribe((resp: EntidadPais[]) => this.entidadesPaises = resp);

        this.mostrarUsuarios = true;

    }

    tomarUsuarioParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuario = entidad;
    }

    tomarPaisParaDetalles(entidad: EntidadPais) {
        this.entidadPais = entidad;
    }
}
