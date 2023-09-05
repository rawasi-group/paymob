import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymobModule } from './paymob/paymob.module';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: false,
      // the delimiter used to segment namespaces
      delimiter: '.',
      // set this to `true` if you want to emit the newListener event
      newListener: false,
      // set this to `true` if you want to emit the removeListener event
      removeListener: false,
      // the maximum amount of listeners that can be assigned to an event
      maxListeners: 10,
      // show event name in memory leak message when more than maximum amount of listeners is assigned
      verboseMemoryLeak: false,
      // disable throwing uncaughtException if an error event is emitted and it has no listeners
      ignoreErrors: false,
    }),
    PaymobModule.register({
      delivery_needed: process.env.ACCEPT_DELIVERY_NEED, //such as 'false'
      expiration: process.env.ACCEPT_EXPIRATION,
      api_key: process.env.ACCEPT_API_KEY,
      currency: process.env.ACCEPT_CURRENCY,
      hostURL: process.env.ACCEPT_BASE_URL,
      integration_id: process.env.ACCEPT_INTEGERATION_ID,
      iframe_id: process.env.ACCEPT_IFRAM_ID,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
