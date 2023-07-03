export interface PaymentOptions {
  url: string;
  method: string;
  headers: PaymobHeaders;
  body: PaymobBody;
  json: boolean;
}

export interface PaymobHeaders {
  'Content-Type': string;
  Accept: string;
}

export interface PaymobBody {
  auth_token: string;
  amount_cents: string;
  expiration: string;
  delivery_needed: string;
  order_id: string;
  billing_data: PaymobBillingData;
  currency: string;
  integration_id: string;
}

export interface PaymobBillingData {
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
