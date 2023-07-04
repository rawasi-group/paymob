export class PaymobOrderDto {
  order_id: string;
  amount_cents: string;
  user_phone: string;
  user_email: string;
  user_name: string;
}
export class PaymobBillingDataDto {
  apartment: string;
  email: string;
  floor: string;
  first_name: string;
  street: string;
  building: string;
  phone_number: string;
  shipping_method: string;
  postal_code: string;
  city: string;
  country: string;
  last_name: string;
  state: string;
}
export class GeneratePaymentDataDTO {
  auth_token: string;
  amount_cents: string;
  expiration: string;
  delivery_needed: string;
  order_id: string;
  billing_data: PaymobBillingDataDto;
  currency: string;
  integration_id: string;
}

export class RegisterOrderDTO {
  auth_token: string;
  delivery_needed: string;
  merchant_id: string;
  amount_cents: string;
  currency: string;
  merchant_order_id: string;
}
export class PaymobCallBackDTO {}
