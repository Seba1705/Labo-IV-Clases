import { EntidadUsuario } from './../../clases/entidadUsuario.class';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-boton-usuario',
    templateUrl: './boton-usuario.component.html',
    styleUrls: ['./boton-usuario.component.css']
})
export class BotonUsuarioComponent implements OnInit {

    @Input() entidadUsuario: EntidadUsuario;
    @Output() usuarioParaBorrar = new EventEmitter<EntidadUsuario>();

    constructor() { }

    ngOnInit(): void {
    }

    borrarUsuario() {
        this.usuarioParaBorrar.emit(this.entidadUsuario);
    }

}
