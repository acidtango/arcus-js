import { ArcusErrorCode } from './ArcusErrorCode';

export class ArcusError extends Error {
  constructor(private code: string, message: string) {
    super(message);
  }

  public isErrorWith(code: ArcusErrorCode) {
    return this.code === code;
  }
}
