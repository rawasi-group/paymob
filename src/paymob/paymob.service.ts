import { Injectable } from '@nestjs/common';
import { Config } from './interfaces/config';
import PaymobAxios, { paymobEndPoints } from './axios';
import {
  GeneratePaymentDataDTO,
  PaymobBillingDataDto,
  PaymobOrderDto,
  RegisterOrderDTO,
} from './dto/paymob.dto';

@Injectable()
export class PaymobService {
  constructor(private readonly config: Config) {}

  async createDummyTransaction() {
    const integrationId = '3976556';
    const iframeId = '236196';
    const order: PaymobOrderDto = {
      order_id: `TX-${Date.now()}`,
      amount_cents: '5000',
      user_phone: '01017213866',
      user_email: 'ahmedaminrashad@gmail.com',
      user_name: 'ahmedamin',
    };
    const authenticate = await this.authenticate();

    console.info(authenticate);
    const registeredOrder = await this.registerOrder(
      authenticate.token,
      integrationId,
      authenticate.profile.id,
      order,
    );

    console.info(registeredOrder);
    const res = await this.generatePaymentKey(
      order,
      authenticate.token,
      integrationId,
      registeredOrder.id,
    );

    return `https://accept.paymobsolutions.com/api/acceptance/iframes/${iframeId}?payment_token=${res.token}`;
  }

  async authenticate() {
    const body = {
      api_key: this.config.api_key,
    };

    const { data } = await PaymobAxios.post(paymobEndPoints.authenticate, body);
    return data;
  }

  calculateHMAC() {
    return true;
  }

  async registerOrder(
    token: string,
    integration_id: string,
    profile_id: string,
    order: PaymobOrderDto,
  ) {
    const body: RegisterOrderDTO = {
      auth_token: token,
      delivery_needed: this.config.delivery_needed,
      merchant_id: profile_id,
      amount_cents: order.amount_cents,
      currency: this.config.currency,
      merchant_order_id: order.order_id,
    };
    const { data } = await PaymobAxios.post(
      paymobEndPoints.registerOrder,
      body,
    );
    return data;
  }

  async generatePaymentKey(
    order: PaymobOrderDto,
    token: string,
    integrationId: string,
    registeredOrderId: string,
  ) {
    const billingData: PaymobBillingDataDto = await this.generateBillingData(
      order,
    );
    const body: GeneratePaymentDataDTO = {
      auth_token: token,
      amount_cents: order.amount_cents,
      expiration: integrationId,
      delivery_needed: this.config.delivery_needed,
      order_id: registeredOrderId,
      billing_data: billingData,
      currency: this.config.currency,
      integration_id: integrationId,
    };
    const { data } = await PaymobAxios.post(
      paymobEndPoints.generatePaymentKey,
      body,
    );
    return data;
  }

  generateBillingData(order: PaymobOrderDto): PaymobBillingDataDto {
    return {
      apartment: 'NA',
      email: order.user_email,
      floor: 'NA',
      first_name: order.user_name,
      street: 'NA',
      building: 'NA',
      phone_number: order.user_phone,
      shipping_method: 'NA',
      postal_code: 'NA',
      city: 'NA',
      country: 'NA',
      last_name: 'rawasi',
      state: 'NA',
    };
  }

  validateCallback() {
    return true;
  }

  calculateHmac() {
    return true;
  }

  payWithAman() {
    return true;
  }

  payWithWallet() {
    return true;
  }

  payWithMasary() {
    return true;
  }

  processRefund() {
    return true;
  }
}
