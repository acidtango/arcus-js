import { ArcusErrorCode } from './ArcusErrorCode';

export type ArcusErrorResponse = {
  code: ArcusErrorCode;
  message: string;
  mode: string;
};
