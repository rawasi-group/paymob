import { PaymobService } from './paymob.service';
import { PaymobController } from './paymob.controller';
import { Config } from './interfaces/config';
import { Module } from '@nestjs/common';

@Module({})
export class PaymobModule {
  public static register(options: Config) {
    return {
      controllers: [PaymobController],
      providers: [
        { provide: PaymobService, useValue: new PaymobService(options) },
      ],
      module: PaymobModule,
    };
  }
}
