export type ArcusBillCreate = {
  /**
   * The ID of the biller. Required
   */
  billerId: number;
  /**
   * The account number. Required
   */
  accountNumber: string;
};
