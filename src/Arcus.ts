import fetch, { Response } from 'node-fetch';
import { ArcusAccount } from './typings/ArcusAccount';
import { ArcusBill } from './typings/ArcusBill';
import { ArcusBillCreate } from './typings/ArcusBillCreate';
import { ArcusBillerGiftCards } from './typings/ArcusBillerGiftCards';
import { ArcusBillerTopUp } from './typings/ArcusBillerTopUp';
import { ArcusBillerUtility } from './typings/ArcusBillerUtility';
import { ArcusBillPaymentCreateResponse } from './typings/ArcusBillPaymentCreateResponse';
import { ArcusBillXData } from './typings/ArcusBillXData';
import { ArcusError } from './typings/ArcusError';
import { ArcusErrorCode } from './typings/ArcusErrorCode';
import { ArcusErrorResponse } from './typings/ArcusErrorResponse';
import { ArcusGetTransactionParams } from './typings/ArcusGetTransactionParams';
import { ArcusSingleConsultParams } from './typings/ArcusSingleConsultParams';
import { ArcusSinglePayParams } from './typings/ArcusSinglePayParams';
import { ArcusTransaction } from './typings/ArcusTransaction';
import { CreateBillPayment } from './typings/CreateBillPayment';
import { GetBillersGiftCardsResponse } from './typings/GetBillersGiftCardsResponse';
import { GetBillersResponse } from './typings/GetBillersResponse';
import { GetBillersTopUpsResponse } from './typings/GetBillersTopUpsResponse';
import { GetBillerUtilitiesResponse } from './typings/GetBillerUtilitiesResponse';
import { GetBillsListResponse } from './typings/GetBillsListResponse';
import { GetTransactionsListResponse } from './typings/GetTransactionsListResponse';
import { PostSingleConsultResponse } from './typings/PostSingleConsultResponse';
import { camelize } from './utils/camelize';
import { ArcusCrypto } from './utils/crypto/ArcusCrypto';
import { ArcusCryptoNode } from './utils/crypto/ArcusCryptoNode';
import { generateBody } from './utils/generateBody';

/**
 * Arcus Fintech JS client
 *
 * API Reference: https://docs.arcusfi.com/api/3.mx/endpoints/
 */
export class Arcus {
  public static create(apiKey: string, secretKey: string) {
    return new Arcus(apiKey, secretKey, fetch, new ArcusCryptoNode());
  }

  private static extractJson(response: Response) {
    return response.json();
  }

  private static async dealWithErrors(response: Response) {
    if (response.status >= 400) {
      const body: ArcusErrorResponse | undefined = await response.json();

      throw new ArcusError(
        body?.code || ArcusErrorCode.UNEXPECTED_ERROR,
        body?.message || `Unknown error from Arcus: ${response.status}`,
      );
    }
    return response;
  }

  private config: {
    baseURL: string;
    headers: { Accept: string; 'Content-Type': string; 'Content-MD5': string };
  };

  constructor(
    private apiKey: string,
    private secretKey: string,
    private http: typeof fetch,
    private crypto: ArcusCrypto,
  ) {
    this.config = {
      baseURL: 'https://api.staging.arcusapi.com',
      headers: {
        Accept: 'application/vnd.regalii.v3.mx+json',
        'Content-Type': 'application/json',
        'Content-MD5': '',
      },
    };
  }

  private computeChecksum(path: string, date: string) {
    const text = `application/json,,${path},${date}`;
    return this.crypto.hmacsha1(this.secretKey, text);
  }

  private generateSignatureHeaders(path: string, date: Date = new Date()) {
    const dateStr = date.toUTCString();

    return {
      Date: dateStr,
      Authorization: `APIAuth ${this.apiKey}:${this.computeChecksum(path, dateStr)}`,
    };
  }

  private generateDefaultHeaders(path: string) {
    return {
      ...this.config.headers,
      ...this.generateSignatureHeaders(path),
    };
  }

  getAccount(): Promise<ArcusAccount> {
    const path = '/account';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusAccount>(data));
  }

  getBillers() {
    const path = '/billers';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetBillersResponse>(data))
      .then((data) => data.billers);
  }

  getBillersUtilities(): Promise<ArcusBillerUtility[]> {
    const path = '/billers/utilities';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetBillerUtilitiesResponse>(data))
      .then((data) => data.billers);
  }

  getBillersTopUps(): Promise<ArcusBillerTopUp[]> {
    const path = '/billers/topups';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetBillersTopUpsResponse>(data))
      .then((data) => data.billers);
  }

  /**
   * Provides the current list of gift card billers and their associated properties.
   *
   * To ensure that your customers are able to leverage the enhancements that we make over time, you are required to cache the full list of billers and update it on a weekly basis.
   */
  getBillersGiftCards(): Promise<ArcusBillerGiftCards[]> {
    const path = '/billers/gift_cards';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetBillersGiftCardsResponse>(data))
      .then((data) => data.billers);
  }

  getTransactions(params?: ArcusGetTransactionParams): Promise<ArcusTransaction[]> {
    const path = '/transactions';
    const query = params?.externalId ? `/q[external_id_eq]=${params.externalId}` : ``;

    return this.http(this.config.baseURL + path + query, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetTransactionsListResponse>(data))
      .then((data) => data.transactions);
  }

  getBillsList(): Promise<ArcusBill[]> {
    const path = '/bills';

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<GetBillsListResponse>(data))
      .then((data) => data.bills);
  }

  createBill(params: ArcusBillCreate): Promise<ArcusBill> {
    const path = '/bills';

    return this.http(this.config.baseURL + path, {
      body: generateBody(params),
      method: 'POST',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBill>(data));
  }

  createBillPayment(billId: string, body: CreateBillPayment) {
    const path = `/bills/${billId}/pay`;

    return this.http(this.config.baseURL + path, {
      body: generateBody(body),
      method: 'POST',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBillPaymentCreateResponse>(data));
  }

  postBillRefresh(billId: string) {
    const path = `/bills/${billId}/refresh`;

    return this.http(this.config.baseURL + path, {
      method: 'POST',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBill>(data));
  }

  getBillXData(billId: string) {
    const path = `/bills/${billId}/xdata`;

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBillXData>(data));
  }

  deleteBill(billId: string) {
    const path = `/bills/${billId}`;

    return this.http(this.config.baseURL + path, {
      method: 'DELETE',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBill>(data));
  }

  getBill(billId: string) {
    const path = `/bills/${billId}`;

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusBill>(data));
  }

  /**
   * This endpoint issues a payment for a bill.
   *
   * _*Dealing with Timeouts*_
   *
   * Timeouts from calling our server are rare but can happen periodically. This is why all calls to `/single/pay` should include an `external_id` parameter that corresponds to a generated unique id in your system, which will be stored with a successfully processed transaction. We recommend use UUID for this field.
   *
   * Also, you can set `pos_number` to identify where this payment is performed. For example: A payment performed in Branch Off ice 12 Cash Register 03 could be described as `S12C03`.
   */
  singlePay(params: ArcusSinglePayParams) {
    const path = '/single/pay';

    return this.http(this.config.baseURL + path, {
      method: 'POST',
      body: generateBody(params),
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusTransaction>(data));
  }

  /**
   * Consult an utility bill in Arcus with an account number. Account number bills are mostly to make payments without providing personal information.
   */
  singleConsult(params: ArcusSingleConsultParams) {
    const path = '/single/consult';

    return this.http(this.config.baseURL + path, {
      method: 'POST',
      body: generateBody(params),
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusTransaction>(data));
  }

  /**
   * This endpoint retrieves a specific transaction.
   */
  getTransaction(transactionId: number) {
    const path = `/transactions/${transactionId}`;

    return this.http(this.config.baseURL + path, {
      method: 'GET',
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<ArcusTransaction>(data));
  }

  /**
   * Allows you to cancel a bill payment from the same day for certain billers using the id returned from the bill/pay endpoint. If the bill has already been canceled, the biller does not support canceling, or the allowed time period has already elapsed, the response will contain an error.
   */
  cancelTransaction(transactionId: string) {
    const path = `/transactions/cancel`;

    return this.http(this.config.baseURL + path, {
      method: 'POST',
      body: generateBody({ id: transactionId }),
      headers: this.generateDefaultHeaders(path),
    })
      .then(Arcus.dealWithErrors)
      .then(Arcus.extractJson)
      .then((data) => camelize<PostSingleConsultResponse>(data));
  }
}
