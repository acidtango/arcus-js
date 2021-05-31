import { ArcusCrypto } from './ArcusCrypto';
import * as Crypto from 'crypto';

export class ArcusCryptoNode implements ArcusCrypto {
  private crypto: any;
  constructor() {
    this.crypto = Crypto;
  }

  hmacsha1(key: string, text: string) {
    return this.crypto.createHmac('sha1', key).update(text).digest('base64');
  }
}
