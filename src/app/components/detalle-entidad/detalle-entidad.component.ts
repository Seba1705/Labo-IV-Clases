import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-detalle-entidad',
    templateUrl: './detalle-entidad.component.html',
    styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

    @Input() EntidadesService: any;
    @Input() titulo: string;


    constructor() {
    }

    ngOnInit(): void {

    }
}
