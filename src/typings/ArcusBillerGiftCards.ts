import { ArcusAmountList } from './ArcusAmountList';
import { ArcusRange } from './ArcusRange';
import { ArcusBiller } from './ArcusBiller';
import { BillType } from './ArcusBillType';
import { ArcusType } from './ArcusType';

export type ArcusBillerGiftCards = ArcusBiller & {
  /**
   * Every gift card biller type will be biller
   */
  type: ArcusType.BILLER;
  /**
   * Every gift card biller’s bill type will be GiftCard
   * @example "GiftCard"
   */
  billerType: 'GiftCard';
  /**
   * Every gift card biller will be of type account_number.
   */
  billType: BillType;
  /**
   * A value or range of US dollar gift card amounts available for a biller.
   */
  availableGiftCardAmounts: ArcusAmountList | ArcusRange;
  /**
   * Commission applied by the carrier.
   */
  giftCardCommission: number;
};
