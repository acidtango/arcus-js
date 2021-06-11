import { ArcusCurrency } from './ArcusCurrency';

export type PostSingleConsultResponse = {
  accountNumber: number;
  billerId: number;
  billAmount: number;
  billAmountCurrency: ArcusCurrency.MXN;
  fxRate: number;
  billAmountUsd: number;
  billAmountChainCurrency: number;
  paymentTransactionFee: number;
  paymentTotalUsd: number;
  paymentTotalChainCurrency: number;
};
