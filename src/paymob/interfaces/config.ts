/**
 * Initial configuration settings. Needed for the Rave Payload.
 */
export interface Config {
  currency: string;
  api_key: string;
  integration_id: string;
  iframe_id: string;
  expiration: string;
  delivery_needed: string;
  hostURL: string;
  txRef?: string;
}

export type Currency = 'EGP' | 'USD';
