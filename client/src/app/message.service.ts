import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { plainToClass } from 'class-transformer';

import { Message } from '../../../shared/models/message.model';

@Injectable()
export class MessagesService {
    private baseUrl = 'http://localhost:3000/api/messages/';
    constructor(private http: HttpClient) {}
    public getMessageForChannel(channel: string): Observable<Message[]> {
        return this.http.get<Message[]>(`${this.baseUrl}${encodeURIComponent(channel)}`)
            .pipe(map(response => {
                return plainToClass(Message, response);
            }));
    }
}
