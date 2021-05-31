import { ArcusRange } from './ArcusRange';
import { ArcusCountryCode } from './ArcusCountryCode';
import { ArcusCurrency } from './ArcusCurrency';

export type ArcusBiller = {
  /**
   * The number of digits in the account number of the biller. This can either be a fixed number or a range. In the case of a range, the format is <min_number>..<max_number>.
   * @pattern ^\d+\.\.\d+$|^\d+$
   * @example "9..12"
   */
  accountNumberDigits: ArcusRange | number | null;
  /**
   * Boolean value specifying if the biller supports `POST /bills` or not
   */
  canCheckBalance: boolean;
  /**
   * Biller's ISO 2 digit country code
   * @example "MX"
   * @pattern `/^[A-Z]{2}$/`
   */
  country: ArcusCountryCode;
  /**
   * The 3 digit ISO currency code of the biller's country.
   * @example "MXN"
   * @pattern `/^[A-Z]{3}$/`
   */
  currency: ArcusCurrency;
  /**
   * Indicates if this bill has extended bill data.
   */
  hasXdata: boolean;
  /**
   * Specifies maximum number of hours for a successful payment to be reflected on the customer’s bill. This number can vary from 0 to 72
   * @minimum 0
   * @maximum 72
   */
  hoursToFulfill: number | null;
  /**
   * Unique identifier of the biller in the Arcus system
   */
  id: number;
  /**
   * A string representing the format of the `bill_type`.
   * @example "999-999-99_99"
   */
  mask: string | null;
  /**
   * Biller's name
   */
  name: string;
  /**
   * Boolean value specifying if the name of the account owner must be passed in for payments of this type. When requires_name_on_account is true, payments that do not include the name on the account, will be rejected. See payment types for info.
   */
  requiresNameOnAccount: boolean;
  /**
   * Boolean value indicating if the biller supports paying of arbitrary amounts. When supports partial payments is false the full balance of the account must be paid, or the payment will be rejected. See payment types for info.
   */
  supportsPartialPayments: boolean;
};
