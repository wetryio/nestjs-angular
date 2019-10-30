import { Module } from '@nestjs/common';
import { UniversalController } from './universal.controller';
import { UniversalProvider } from './universal.provider';

@Module({
    controllers: [
        UniversalController,
    ],
    providers: [
        UniversalProvider,
    ],
})
export class UniversalModule {
}
