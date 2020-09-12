import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EntidadesService {

    private url = 'https://api.mocki.io/v1/570c5e5c';

    constructor(private http: HttpClient) { }

    getEntidades() {
        return this.http.get(this.url);
    }
}
