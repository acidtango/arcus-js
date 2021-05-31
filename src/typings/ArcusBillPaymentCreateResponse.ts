import { ArcusCurrency } from './ArcusCurrency';
import { ArcusType } from './ArcusType';

export type ArcusBillPaymentCreateResponse = {
  type: ArcusType;
  id: number;
  amount: number;
  amountCurrency: ArcusCurrency;
  fxRate: number;
  amountUsd: number;
  transactionFee: number;
  totalUsd: number;
  hoursToFulfill: number;
  createdAt: string;
  status: string;
  externalId: string;
  ticketText: string;
  accountNumber: string;
};
