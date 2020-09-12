
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntidadUsuario } from '../../clases/entidadUsuario.class';

@Component({
    selector: 'app-listado-entidad',
    templateUrl: './listado-entidad.component.html',
    styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

    @Input() entidadesUsuario: EntidadUsuario[] = [];
    @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {

    }

    verMas(entidad: EntidadUsuario) {
        this.usuarioSeleccionado.emit(entidad);
    }
}
