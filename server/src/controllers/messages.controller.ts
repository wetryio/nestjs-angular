import { Controller, Get, Param } from '@nestjs/common';

import { MessagesService } from '../services/messages.service';
import { Message } from '../../../shared/models/message.model';

@Controller({path: 'api/messages'})
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Get(':channel')
  getHelloByName(@Param() params): Message[] {
    return this.messageService.getMessagesForChannel(params.channel);
  }

}
