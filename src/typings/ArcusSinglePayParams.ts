export type ArcusSinglePayParams = {
  billerId: number;
  accountNumber: string;
  amount: number;
  currency: string;
  externalId: string;
  posNumber?: string;
};
