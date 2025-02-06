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

  try {
    await api.post('/message', request);
    return true;
  } catch (error) {
    console.error('Error creating message:', error);
    return false;
  }
}
