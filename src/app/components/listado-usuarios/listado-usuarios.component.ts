import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntidadUsuario } from '../../clases/entidadUsuario.class';

@Component({
    selector: 'app-listado-usuarios',
    templateUrl: './listado-usuarios.component.html',
    styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

    @Input() entidadesUsuario: EntidadUsuario[] = [];
    @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {

    }

    verDetalleDelUsuario(entidad: EntidadUsuario) {
        this.usuarioSeleccionado.emit(entidad);
    }
}
