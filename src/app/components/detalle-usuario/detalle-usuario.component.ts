import { EntidadUsuario } from './../../clases/entidadUsuario.class';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-detalle-usuario',
    templateUrl: './detalle-usuario.component.html',
    styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit, OnDestroy {

    @Input() entidadUsuario: EntidadUsuario;
    @Input() titulo: string;
    @Output() usurioParaBorrar = new EventEmitter<EntidadUsuario>();

    constructor() { }

    ngOnInit(): void {
    }

    tomarUsuarioDesdeBoton(entidad: EntidadUsuario) {
        this.usurioParaBorrar.emit(entidad);
        this.ngOnDestroy();
    }

    ngOnDestroy(){
        this.entidadUsuario = null;
    }
}
