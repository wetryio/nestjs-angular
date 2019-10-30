import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { MessagesService } from './message.service';
import { Observable } from 'rxjs';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messages$ = this.messagesService.getMessageForChannel('#general').pipe(shareReplay(1));
  }

  public addToMessage() {
    alert('hey');
  }
}
