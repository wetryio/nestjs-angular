import { Module, MiddlewareConsumer } from '@nestjs/common';
import { HelloController } from './controllers/hello.controller';
import { ParsingPipe } from './util/parsing.pipe';
import { HelloService } from './services/hello.service';
import { UniversalModule } from './modules/universal/universal.module';
import { MessagesService } from './services/messages.service';
import { MessagesController } from './controllers/messages.controller';

@Module({
  imports: [
    UniversalModule,
  ],
  controllers: [
    HelloController,
    MessagesController,
  ],
  providers: [
    ParsingPipe,
    HelloService,
    MessagesService,
  ],
})
export class AppModule {}
