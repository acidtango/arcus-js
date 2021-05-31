import { ArcusAmountList } from './ArcusAmountList';
import { ArcusBiller } from './ArcusBiller';
import { ArcusType } from './ArcusType';
import { BillType } from './ArcusBillType';

export type ArcusBillerTopUp = ArcusBiller & {
  /**
   * Every top-up biller type will be biller
   */
  type: ArcusType.BILLER;
  /**
   * Every top-up biller’s bill type will be MXCell.
   * @example "MXCell"
   */
  billerType: 'MXCell';
  /**
   * Every top-up biller will be of type phone_number
   */
  billType: BillType;
  /**
   * A value or range of US dollar top-up amounts available for a biller.
   */
  availableTopupAmounts: ArcusAmountList;
  /**
   * Commission applied by the carrier
   */
  topupCommission: number;
};
