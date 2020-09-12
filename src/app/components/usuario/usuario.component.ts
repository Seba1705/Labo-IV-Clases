import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    usuario: Usuario;

    ngOnInit(): void {
        this.route.params.subscribe(resp => console.log(resp));
    }



    constructor(private route: ActivatedRoute) {

    }

}
