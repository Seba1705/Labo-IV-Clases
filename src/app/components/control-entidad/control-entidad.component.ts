import { Usuario } from './../../clases/usuario.class';
import { EntidadUsuario } from './../../clases/entidadUsuario.class';
import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../../services/entidades.service';
import { EntidadPais } from '../../clases/entidadPais.class';

@Component({
    selector: 'app-control-entidad',
    templateUrl: './control-entidad.component.html',
    styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

    entidadesUsuario: EntidadUsuario[] = [];
    entidadUsuario: EntidadUsuario;

    entidadesUsuarioBorradas: EntidadUsuario[] = [];
    entidadUsuarioBorrada: EntidadUsuario;

    entidadesPaises: EntidadPais[] = [];
    entidadPais: EntidadPais;

    public mostrarUsuarios = true;
    public mostrarUsuariosBorrados = false;
    public mostrarPaises = false;

    botonUsuarios: string = 'Ver Usuarios Borrados';

    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        if(!localStorage.getItem('entidadesUsuario')) {
            this.entidadesService.getUsuarios()
            .subscribe((resp: EntidadUsuario[]) => {
                this.entidadesUsuario = resp;
                localStorage.setItem("entidadesUsuario", JSON.stringify(this.entidadesUsuario));
            });
        }else
            this.entidadesUsuario = JSON.parse(localStorage.getItem('entidadesUsuario'));
        
        if(!localStorage.getItem('entidadesPaises')) {
            this.entidadesService.getPaises()
                .subscribe((resp: EntidadPais[]) => {
                    this.entidadesPaises = resp;
                    localStorage.setItem("entidadesPaises", JSON.stringify(this.entidadesUsuario));
                });
        }else
            this.entidadesUsuario = JSON.parse(localStorage.getItem('entidadesUsuario'));

        if(localStorage.getItem('entidadesUsuarioBorradas')) {
            this.entidadesUsuarioBorradas = JSON.parse(localStorage.getItem('entidadesUsuarioBorradas'));
        }

    }

    tomarUsuarioParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuario = entidad;
    }

    tomarUsuarioBorradoParaDetalles(entidad: EntidadUsuario) {
        this.entidadUsuarioBorrada = entidad;
    }

    tomarUsuarioParaBorrar(entidad: EntidadUsuario) {

        let arr = this.entidadesUsuario.length;
        for (let i = 0; i < arr; i++) {
            if(this.entidadesUsuario[i].id === entidad.id) {
                this.entidadesUsuario.splice(i, 1);
                break;
            }
        }
        
        this.entidadesUsuarioBorradas.push(entidad);
        localStorage.setItem('entidadesUsuarioBorradas', JSON.stringify(this.entidadesUsuarioBorradas));
        localStorage.setItem('entidadesUsuario', JSON.stringify(this.entidadesUsuario));
    }

    tomarPaisParaDetalles(entidad: EntidadPais) {
        this.entidadPais = entidad;
    }

    cambiarVistaUsuarios() {
        this.mostrarUsuarios = !this.mostrarUsuarios;
        this.mostrarUsuariosBorrados = !this.mostrarUsuariosBorrados;

        if(this.mostrarUsuariosBorrados)
            this.botonUsuarios = 'Ver todos los Usuarios';
        else    
            this.botonUsuarios = 'Ver Usuarios Borrados';

    }

}
