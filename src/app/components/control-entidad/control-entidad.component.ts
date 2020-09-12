import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../../services/entidades.service';
import { EntidadUsuario } from '../../clases/entidadUsuario.class';

@Component({
    selector: 'app-control-entidad',
    templateUrl: './control-entidad.component.html',
    styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

    entidadesUsuario: EntidadUsuario[] = [];
    entidadUsuario: EntidadUsuario;

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.entidadesService.getEntidades().subscribe((resp: EntidadUsuario[]) => this.entidadesUsuario = resp);
    }

    tomarUsuarioParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuario = entidad;
    }
}
