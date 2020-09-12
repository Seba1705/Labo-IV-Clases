import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bienvenido',
    templateUrl: './bienvenido.component.html',
    styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

    edad1: number = 0;
    edad2: number = 0;
    promedio: number = 0;
    suma: number = 0;

    constructor() {

    }

    calcular() {
        this.suma = this.edad1 + this.edad2;
        this.promedio = this.suma / 2;
    }

    limpiar() {
        this.edad1 = 0;
        this.edad2 = 0;
        this.calcular();
    }

    ngOnInit(): void {
    }
}
