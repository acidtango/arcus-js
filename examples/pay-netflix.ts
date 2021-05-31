import { Arcus } from '../src/Arcus';

const main = async () => {
  const arcus = Arcus.create(
    process.env.ARCUS_API_KEY as string,
    process.env.ARCUS_SECRET_KEY as string,
  );

  const giftCards = await arcus.getBillersGiftCards();

  const netflix = giftCards.find((giftCard) => giftCard.id === 13723); // CÓDIGO NETFLIX $300

  if (!netflix) throw new Error("Couldn't find netflix");

  await arcus.singlePay({
    billerId: netflix.id,
    accountNumber: '321654871238120',
    amount: 130,
    currency: 'MXN',
    externalId: '84bce950-c878-483e-aeca-41217f969301',
  });

  const transactions = await arcus.getTransactions();

  console.log(transactions);
};

main().catch((err) => console.error(err));
