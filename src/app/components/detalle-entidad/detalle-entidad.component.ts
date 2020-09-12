
import { Component, OnInit, Input, Output } from '@angular/core';
import { EntidadUsuario } from '../../clases/entidadUsuario.class';

@Component({
    selector: 'app-detalle-entidad',
    templateUrl: './detalle-entidad.component.html',
    styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

    @Input() entidadUsuario: EntidadUsuario;

    constructor() {
    }

    ngOnInit(): void {

    }
}
