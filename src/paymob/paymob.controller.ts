import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymobService } from './paymob.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PaymobCallbackEvent } from './events/PaymobCallback.event';

@Controller('paymob')
export class PaymobController {
  constructor(
    private readonly paymobService: PaymobService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Get()
  createDummyTransaction() {
    return this.paymobService.createDummyTransaction();
  }
  @Post('callback')
  processPaymobCallback(@Body() paymobCallBackDTO: any) {
    this.eventEmitter.emit(
      'paymob.callback',
      new PaymobCallbackEvent(paymobCallBackDTO),
    );

    return true;
  }
}
