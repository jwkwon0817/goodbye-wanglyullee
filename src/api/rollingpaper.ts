import { api } from './base';

export interface MessageRequest {
  author: string;
  message: string;
}

export async function getData() {
  const response = await api.get('/message');
  return response.data.messages;
}

export async function createData(from: string, content: string) {
  const request: MessageRequest = {
    author: from,
    message: content,
  };

  api
    .post('/message', request)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}
