import { ArcusCurrency } from './ArcusCurrency';

export type ArcusAccount = {
  /**
   * Your company's name
   */
  name: string;
  /**
   * Your current balance
   */
  balance: number;
  /**
   * Minimum balance of you account
   */
  minimumBalance: number;
  /**
   * Your local currency
   * @pattern `/^[A-Z]{3}$/`
   */
  currency: ArcusCurrency.MXN;
};
