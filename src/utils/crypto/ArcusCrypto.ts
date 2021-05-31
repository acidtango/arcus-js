export interface ArcusCrypto {
  /**
   * Return the base64 for the HMAC-SHA1 signature
   * @param key The key for HMAC
   * @param text The text for generating the signature
   */
  hmacsha1(key: string, text: string): string;
}
