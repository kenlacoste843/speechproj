import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpeechModel } from '../models/Speech.model';

@Injectable({
    providedIn: 'root'
})
export class SpeechService {

    rootUrl = './assets/'

    constructor(private http: HttpClient) {

    }

    getSpeechList() {
        return this.http.get<SpeechModel[]>(this.rootUrl + 'generated.json');
    }

}