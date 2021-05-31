import { ArcusTransactionStatus } from './ArcusTransactionStatus';
import { ArcusType } from './ArcusType';
import { ArcusCurrency } from './ArcusCurrency';

export type ArcusTransaction = {
  /**
   * Every transaction type will be transaction
   */
  type: ArcusType.TRANSACTION;
  /**
   * Unique identifier of the transaction in the Arcus system
   */
  id: number;
  /**
   * Amount of this transaction
   */
  amount: number;
  /**
   * Currency of transaction amount
   * @pattern `/^[A-Z]{3}$/`
   */
  amountCurrency: ArcusCurrency;
  /**
   * The fx_rate provided for doing a payment with this biller.
   */
  fxRate: number;
  /**
   * Amount in USD
   */
  amountUsd: number;
  /**
   * Fee applied to this transaction
   */
  transactionFee: number;
  /**
   * Total of this transaction including fee in USD
   */
  totalUsd: number;
  /**
   * Maximum number of hours for a successful payment to be reflected on the customer’s bill
   */
  hoursToFulfill: number;
  /**
   * Transaction creation date time in UTC
   */
  createdAt: string;
  /**
   * Status of this transaction
   */
  status: ArcusTransactionStatus;
  /**
   * Your own id for this payment transaction (required). We recommend use UUID for this field
   */
  externalId: string;
  /**
   * Text of this transaction to include in a ticket
   */
  ticketText: string;
  /**
   * The account number of the bill
   */
  accountNumber: string;
};
