import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntidadesService {

    private urlUsuarios = 'https://api.mocki.io/v1/570c5e5c';
    private urlPaises = 'https://restcountries.eu/rest/v2/all';

    constructor(private http: HttpClient) { }

    getUsuarios() {
        return this.http.get(this.urlUsuarios);
    }

    getPaises() {
        return this.http.get(this.urlPaises);
    }
}
