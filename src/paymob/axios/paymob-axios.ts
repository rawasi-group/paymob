import axios from 'axios';
import type { CreateAxiosDefaults } from 'axios';
import { base_url } from './endpoints/paymob.endpoints';

const PaymobAPIAxios = () => {
  const defaultOptions: CreateAxiosDefaults = {
    baseURL: base_url,
    timeout: 6000,
  };

  const instance = axios.create(defaultOptions);

  // Request interceptors
  instance.interceptors.request.use(async (req) => {
    return req;
  });

  return instance;
};

export default PaymobAPIAxios();
