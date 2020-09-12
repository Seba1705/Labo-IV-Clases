import { EntidadUsuario } from './../../clases/entidadUsuario.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-detalle-usuario',
    templateUrl: './detalle-usuario.component.html',
    styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

    @Input() entidadUsuario: EntidadUsuario;
    constructor() { }

    ngOnInit(): void {
    }

}
