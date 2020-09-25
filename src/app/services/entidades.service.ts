import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntidadesService {

    private urlUsuarios = 'https://api.mocki.io/v1/570c5e5c';
    public urlPaises = 'https://restcountries.eu/rest/v2/region/';

    constructor(private http: HttpClient) { }

    getUsuarios() {
        return this.http.get(this.urlUsuarios);
    }

    getPaises(region: string) {
        return this.http.get(`${this.urlPaises}${region}`);
    }
}
