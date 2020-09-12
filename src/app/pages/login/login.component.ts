
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../clases/usuario.class';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario = new Usuario();

    constructor(private router:Router) { }

    ngOnInit(): void {
    }

    login(form: NgForm) {

        if (form.invalid)
            Object.values(form.controls).forEach(control => control.markAsTouched());
        else {
            if(this.usuario.email === 'admin@gmail.com' && this.usuario.clave === '123456')
                this.router.navigate(['usuario', this.usuario]);
            else
                this.router.navigate(['error']);
        }
    }

}
