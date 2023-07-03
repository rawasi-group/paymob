import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymobModule } from './paymob/paymob.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PaymobModule.register({
      delivery_needed: process.env.ACCEPT_DELIVERY_NEED, //such as 'false'
      expiration: process.env.ACCEPT_EXPIRATION,
      api_key: process.env.ACCEPT_API_KEY,
      currency: process.env.ACCEPT_CURRENCY,
      hostURL: process.env.ACCEPT_BASE_URL,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
