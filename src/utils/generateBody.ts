import { snakeify } from './snakeify';

export const generateBody = (body: any) => JSON.stringify(snakeify(body));
