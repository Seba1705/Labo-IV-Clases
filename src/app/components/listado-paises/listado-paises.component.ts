import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntidadPais } from '../../clases/entidadPais.class';

@Component({
    selector: 'app-listado-paises',
    templateUrl: './listado-paises.component.html',
    styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

    @Input() entidadesPaises: EntidadPais[] = [];
    @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    verDetalleDelPais(entidad: EntidadPais) {
        this.paisSeleccionado.emit(entidad);
    }

}
