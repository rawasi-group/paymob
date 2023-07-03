import { Controller, Get } from '@nestjs/common';
import { PaymobService } from './paymob.service';

@Controller('paymob')
export class PaymobController {
  constructor(private readonly paymobService: PaymobService) {}

  @Get()
  createDummyTransaction() {
    return this.paymobService.createDummyTransaction();
  }
}
