import { Arcus } from './Arcus';
import { ArcusBiller } from './typings/ArcusBiller';
import { ArcusError } from './typings/ArcusError';

const billerWithName = (name: string) => (utility: ArcusBiller) => utility.name === name;

const billerTotalPlay = billerWithName('TotalPlay');
const billerTelcel = billerWithName('TAETelcel');
const billerNetflix = billerWithName('CÓDIGO NETFLIX $150');
const EXAMPLE_TRANSACTION_ID = 100034581;
const EXAMPLE_FAKE_EXTERNAL_TRANSACTION_ID = 'EXAMPLE_NON_EXISTINT_TRANSACTION';
const EXAMPLE_EXTERNAL_TRANSACTION_ID = 'EXAMPLE_REAL_TRANSACTION';

describe('Arcus', () => {
  const arcus = Arcus.create(
    process.env.ARCUS_API_KEY as string,
    process.env.ARCUS_SECRET_KEY as string,
  );

  it('getAccount', async () => {
    const account = await arcus.getAccount();

    expect(account).toMatchSnapshot();
  });

  it('getBillers', async () => {
    const billers = await arcus.getBillers();

    expect(billers).toHaveLengthWithin(100, 130);

    const totalPlay = billers.find(billerTotalPlay);
    const telcel = billers.find(billerTelcel);
    const netflix = billers.find(billerNetflix);

    expect(totalPlay).toMatchSnapshot();
    expect(telcel).toMatchSnapshot();
    expect(netflix).toMatchSnapshot();
  });

  it('getBillersUtilities', async () => {
    const utilities = await arcus.getBillersUtilities();

    expect(utilities).toHaveLengthWithin(60, 80);

    const totalPlay = utilities.find(billerTotalPlay);

    expect(totalPlay).toMatchSnapshot();
  });

  it('getBillersTopUps', async () => {
    const topUps = await arcus.getBillersTopUps();

    expect(topUps).toHaveLengthWithin(10, 15);

    const telcel = topUps.find(billerTelcel);

    expect(telcel).toMatchSnapshot();
  });

  it('getBillersGiftCards', async () => {
    const giftCards = await arcus.getBillersGiftCards();

    expect(giftCards).toHaveLengthWithin(35, 45);

    const netflix = giftCards.find(billerNetflix);

    expect(netflix).toMatchSnapshot();
  });

  describe('getTransactions', () => {
    it('gets Transaction without parameters', async () => {
      const transactions = await arcus.getTransactions();

      expect(transactions).toHaveLengthWithin(95, 105);

      const first = transactions[0];

      expect(first).toMatchSnapshot();
    });

    it('getTransaction With paramater and returns error if its not found', async () => {
      await expect(
        arcus.getTransactions({
          externalId: EXAMPLE_FAKE_EXTERNAL_TRANSACTION_ID,
        }),
      ).rejects.toBeInstanceOf(ArcusError);
    });

    it.skip('getTransaction With paramater and returns result', async () => {
      const transactions = await arcus.getTransactions({
        externalId: EXAMPLE_EXTERNAL_TRANSACTION_ID,
      });
      expect(transactions).toHaveLength(1);

      const first = transactions[0];

      expect(first).toMatchSnapshot();
    });
  });

  it('getTransaction', async () => {
    const transaction = await arcus.getTransaction(EXAMPLE_TRANSACTION_ID);

    expect(transaction).toMatchSnapshot();
  });

  it.todo('cancelTransaction');

  it.todo('getBillsList');

  it.todo('postBill');

  it.todo('getBillSingleConsult');

  it.todo('getBillSinglePay');

  it.todo('getBill');

  it.todo('postBillPayment');

  it.todo('postBillRefresh');

  it.todo('getBillXdata');

  it.todo('deleteBill');

  it.todo('singlePay');
});
