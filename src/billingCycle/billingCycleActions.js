import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3003/api';

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}