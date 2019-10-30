import { Injectable } from '@nestjs/common';
import { Message } from '../../../shared/models/message.model';

@Injectable()
export class MessagesService {
  getMessagesForChannel(channel?: string): Message[] {
    switch (channel) {
        case '#general':
            return mockedMessages;
        default:
            break;
    }
  }
}

const mockedMessages: Message[] = [
    {
        sender: 'David Gilson',
        content: 'Did you see that awesome Slack remake ?',
        date: new Date('2019-10-03T17:15:00.624Z'),
        twitter: 'gilsondavid5',
    },
    {
        sender: 'Paul Henry',
        content: 'Awesome !',
        date: new Date('2019-10-03T18:15:00.624Z'),
        twitter: 'adamwathan',
    },
];
