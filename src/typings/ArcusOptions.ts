import fetch from 'node-fetch';
import { ArcusCrypto } from '../utils/crypto/ArcusCrypto';

export type ArcusOptions = {
  apiKey: string;
  secretKey: string;
  http?: typeof fetch;
  crypto?: ArcusCrypto;
  /**
   * Base URL for Arcus API. By default it's the staging API
   */
  baseUrl?: string;
  timeout?: number;
};
