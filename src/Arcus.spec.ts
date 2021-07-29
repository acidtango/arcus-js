import {
  CFE,
  CFE_TRANSACTION,
  NETFLIX,
  TELCEL,
  TOTALPLAY,
  TRANSACTION,
} from '../test/fixtures/fixtures';
import { Arcus } from './Arcus';
import { ArcusBiller } from './typings/ArcusBiller';
import { ArcusErrorCode } from './typings/ArcusErrorCode';

const billerWithName = (name: string) => (utility: ArcusBiller) => utility.name === name;

const billerTotalPlay = billerWithName('TotalPlay');
const billerTelcel = billerWithName('TAETelcel');
const billerNetflix = billerWithName('CÓDIGO NETFLIX $150');
const EXAMPLE_FAKE_EXTERNAL_TRANSACTION_ID = 'EXAMPLE_NON_EXISTINT_TRANSACTION';

describe('Arcus', () => {
  const arcus = Arcus.createNew({
    apiKey: process.env.ARCUS_API_KEY as string,
    secretKey: process.env.ARCUS_SECRET_KEY as string,
  });

  it('getAccount', async () => {
    const account = await arcus.getAccount();

    expect(account.balance).toBeDefined();
    expect(account.currency).toEqual(TRANSACTION.currency);
    expect(account.name).toEqual('rabbit');
  });

  it('getBillers', async () => {
    const billers = await arcus.getBillers();

    expect(billers).toHaveLengthWithin(100, 130);

    const totalPlay = billers.find(billerTotalPlay);
    const telcel = billers.find(billerTelcel);
    const netflix = billers.find(billerNetflix);

    expect(totalPlay).toBeDefined();
    expect(totalPlay?.name).toEqual(TOTALPLAY.name);

    expect(telcel).toBeDefined();
    expect(telcel?.name).toEqual(TELCEL.name);

    expect(netflix).toBeDefined();
    expect(netflix?.name).toEqual(NETFLIX.name);
  });

  it('getBillersUtilities', async () => {
    const utilities = await arcus.getBillersUtilities();

    expect(utilities).toHaveLengthWithin(60, 80);

    const totalPlay = utilities.find(billerTotalPlay);

    expect(totalPlay?.name).toEqual(TOTALPLAY.name);
    expect(totalPlay?.billerType).toEqual(TOTALPLAY.billerType);
  });

  it('getBillersTopUps', async () => {
    const topUps = await arcus.getBillersTopUps();

    expect(topUps).toHaveLengthWithin(10, 15);

    const telcel = topUps.find(billerTelcel);

    expect(telcel?.name).toEqual(TELCEL.name);
    expect(telcel?.billerType).toEqual(TELCEL.billerType);
  });

  it('getBillersGiftCards', async () => {
    const giftCards = await arcus.getBillersGiftCards();

    expect(giftCards).toHaveLengthWithin(35, 45);

    const netflix = giftCards.find(billerNetflix);

    expect(netflix?.billerType).toEqual(NETFLIX.billerType);
  });

  describe('getTransactions', () => {
    it('gets Transaction without parameters', async () => {
      const transactions = await arcus.getTransactions();

      expect(transactions).toHaveLengthWithin(95, 105);

      const first = transactions[0];
      expect(first).toBeDefined();
    });

    it('getTransaction With paramater and returns an empty if its not found', async () => {
      const transactions = await arcus.getTransactions({
        externalId: EXAMPLE_FAKE_EXTERNAL_TRANSACTION_ID,
      });
      expect(transactions).toHaveLength(0);
    });

    it('getTransaction With paramater and returns result', async () => {
      const transactions = await arcus.getTransactions({
        externalId: TRANSACTION.externalId,
      });
      expect(transactions).toHaveLength(1);

      const first = transactions[0];

      expect(first.id).toEqual(TRANSACTION.transactionId);
      expect(first.amountCurrency).toEqual(TRANSACTION.currency);
      expect(first.accountNumber).toEqual(TRANSACTION.accountNumber);
    });
  });

  it('getTransaction', async () => {
    const transaction = await arcus.getTransaction(TRANSACTION.transactionId);

    expect(transaction.id).toEqual(TRANSACTION.transactionId);
    expect(transaction.amountCurrency).toEqual(TRANSACTION.currency);
    expect(transaction.accountNumber).toEqual(TRANSACTION.accountNumber);
  });

  it.todo('cancelTransaction');

  it.todo('getBillsList');

  it.todo('postBill');

  it('getBillSingleConsult', async () => {
    const consult = await arcus.singleConsult({
      accountNumber: CFE_TRANSACTION.accountNumber,
      billerId: CFE.billerId,
    });

    expect(consult).toBeDefined();
    expect(consult.accountNumber).toEqual(CFE_TRANSACTION.accountNumber);
    expect(consult.fxRate).toEqual(1);
  });

  it.todo('getBillSinglePay');

  it.todo('getBill');

  it.todo('postBillPayment');

  it.todo('postBillRefresh');

  it.todo('getBillXdata');

  it.todo('deleteBill');

  describe('singlePay', () => {
    // At the time of this test, this biller was failing because a 504, now it's working
    it.skip('does not fail when buying a top up', async () => {
      const error = await arcus
        .singlePay({
          billerId: 13597,
          accountNumber: '4545454545',
          currency: 'MXN',
          amount: 10,
          externalId: 'db8bf3b9-6db5-410f-ac5f-e0967eac5ff9',
        })
        .catch((error) => error);

      expect(error.code).toEqual(ArcusErrorCode.UNEXPECTED_ERROR);
    });
  });
});
