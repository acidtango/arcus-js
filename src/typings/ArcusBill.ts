import { ArcusBillStatus } from './ArcusBillStatus';
import { ArcusType } from './ArcusType';
import { ArcusCurrency } from './ArcusCurrency';

export type ArcusBill = {
  /**
   * Every bill type will be bill
   */
  type: ArcusType.BILL;
  /**
   * The ID of the bill
   */
  id: string;
  /**
   * The ID of the biller
   */
  billerId: number;
  /**
   * The account number of the bill */
  accountNumber: string;
  /**
   * Name on account of this bill
   */
  nameOnAccount: boolean | null;
  /**
   * The due date of the bill
   */
  dueDate: Date;
  /**
   * The balance of the bill
   */
  balance: number;
  /**
   * The balance's currency of the bill
   */
  balanceCurrency: ArcusCurrency;
  /**
   * Last time the bill was updated
   */
  balanceUpdatedAt: Date;
  /**
   * Error code if an error occurred while creating the bill. Look at API Error codes and error_message property for more information.
   */
  errorCode: string | null;
  /**
   * Error message if an error had occurred while creating the bill
   */
  errorMessage: string | null;
  /**
   * Status of the bill
   */
  status: ArcusBillStatus;
};
