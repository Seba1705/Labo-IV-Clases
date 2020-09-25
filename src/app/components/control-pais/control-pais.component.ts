import { EntidadesService } from './../../services/entidades.service';
import { Component, OnInit } from '@angular/core';
import { EntidadPais } from 'src/app/clases/entidadPais.class';

@Component({
    selector: 'app-control-pais',
    templateUrl: './control-pais.component.html',
    styleUrls: ['./control-pais.component.css']
})
export class ControlPaisComponent implements OnInit {

    region: string = 'europa';

    entidadesPaises: EntidadPais[] = [];
    entidadPais: EntidadPais;


    constructor(private entidadesService: EntidadesService) { }

    ngOnInit(): void {
        this.getPaises(this.region);
    }

    tomarPaisParaDetalles(entidad: EntidadPais) {
        this.entidadPais = entidad;
    }

    getPaises(region: string) {
        this.region = region;
        this.entidadesService.getPaises(region)
            .subscribe((resp: EntidadPais[]) => {
                console.log(resp);
                this.entidadesPaises = resp;
        });
    }

}
