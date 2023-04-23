import sendRequest from './send-request';

const BASE_URL = '/api/items';

export function getAll(userData) {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}