/**
 * Initial configuration settings. Needed for the Rave Payload.
 */
export interface Config {
  currency: string;
  api_key: string;
  expiration: string;
  delivery_needed: string;
  hostURL: string;
  txRef?: string;
}

export type Currency = 'EGP' | 'USD';
