import { ArcusCurrency } from './ArcusCurrency';

export type CreateBillPayment = {
  /**
   * Amount to pay to this bill (required).
   * @minimum 0.1
   */
  amount: number;
  /**
   * Currency code of the payment that is performed (required)
   * @pattern `/^[A-Z]{3}$/`
   */
  currency: ArcusCurrency;
  /**
   * Your own id for this payment transaction (required). We recommend use UUID for this field.
   */
  externalId: string;
  /**
   * You own ID where is performed this transaction, it could be a cashier, branch office, cash register or any thing that identify what/who/where a payment is performed (optional).
   */
  posNumber: string;
};
