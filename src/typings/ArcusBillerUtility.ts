import { ArcusBiller } from './ArcusBiller';
import { BillType } from './ArcusBillType';
import { ArcusType } from './ArcusType';

export type ArcusBillerUtility = ArcusBiller & {
  /**
   * Every utility biller type will be biller
   */
  type: ArcusType.BILLER;
  /**
   * Specifies the utility type of the bill being paid.
   * @example "Electricity"
   */
  billerType: string;
  /**
   * Specifies the bill identifier that is used to perform consults and payments.
   * @example BillType.PHONE_NUMBER
   */
  billType: BillType;
};
