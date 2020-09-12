
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-listado-entidad',
    templateUrl: './listado-entidad.component.html',
    styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

    @Input() entidades: any[] = [];
    @Output() entidadSeleccionada: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {

    }

    verMas(entidad: any) {
        this.entidadSeleccionada.emit(entidad);
    }
}
