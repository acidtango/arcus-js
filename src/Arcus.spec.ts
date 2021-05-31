import { Arcus } from './Arcus';
import { ArcusBiller } from './typings/ArcusBiller';

const billerWithName = (name: string) => (utility: ArcusBiller) => utility.name === name;

const billerTotalPlay = billerWithName('TotalPlay');
const billerTelcel = billerWithName('TAETelcel');
const billerNetflix = billerWithName('CÓDIGO NETFLIX $150');
const EXAMPLE_TRANSACTION_ID = 100034581;

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

    expect(billers).toHaveLengthWithin(120, 150);

    const totalPlay = billers.find(billerTotalPlay);
    const telcel = billers.find(billerTelcel);
    const netflix = billers.find(billerNetflix);

    expect(totalPlay).toMatchSnapshot();
    expect(telcel).toMatchSnapshot();
    expect(netflix).toMatchSnapshot();
  });

  it('getBillersUtilities', async () => {
    const utilities = await arcus.getBillersUtilities();

    expect(utilities).toHaveLengthWithin(70, 90);

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

  it('getTransactionsList', async () => {
    const transactions = await arcus.getTransactions();

    expect(transactions).toHaveLengthWithin(95, 105);

    const first = transactions[0];

    expect(first).toMatchSnapshot();
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
