export enum ArcusErrorCode {
  /**
   * Invalid number of digits in account number
   */
  INVALID_NUMBER_OF_DIGITS_IN_ACCOUNT_NUMBER = 'R1',
  /**
   * Invalid Account Number
   */
  INVALID_ACCOUNT_NUMBER = 'R2',
  /**
   * Invalid Payment Amount
   */
  INVALID_PAYMENT_AMOUNT = 'R3',
  /**
   * Account number does not resolve with biller
   */
  ACCOUNT_NUMBER_DOES_NOT_RESOLVE_WITH_BILLER = 'R4',
  /**
   * Invalid Phone Number
   */
  INVALID_PHONE_NUMBER = 'R5',
  /**
   * Invalid Biller
   */
  INVALID_BILLER = 'R6',
  /**
   * Account Number is valid but cannot receive payments like this
   */
  ACCOUNT_NUMBER_IS_VALID_BUT_CANNOT_RECEIVE_PAYMENTS_LIKE_THIS = 'R7',
  /**
   * Balance has already been paid
   */
  BALANCE_HAS_ALREADY_BEEN_PAID = 'R8',
  /**
   * Unexpected error (everything entered was correct)
   */
  UNEXPECTED_ERROR = 'R9',
  /**
   * Incorrect Biller for the Provided Account Number
   */
  INCORRECT_BILLER_FOR_THE_PROVIDED_ACCOUNT_NUMBER = 'R10',
  /**
   * Invalid Payment Amount: You must pay the full amount balance
   */
  INVALID_PAYMENT_AMOUNT_UNKNOWN = 'R11', // TODO: check what this error means
  /**
   * Payment Already Made
   */
  PAYMENT_ALREADY_MADE = 'R12',
  /**
   * Name on account is required
   */
  NAME_ON_ACCOUNT_IS_REQUIRED = 'R13',
  /**
   * Payment amount too large, max amount is 1500 USD
   */
  PAYMENT_AMOUNT_TOO_LARGE_MAX_1500_USD = 'R14',
  /**
   * Account Balance is 0
   */
  ACCOUNT_BALANCE_IS_0 = 'R15',
  /**
   * Failed to make the consult, please try again later
   */
  FAILED_TO_MAKE_THE_CONSULT = 'R16',
  /**
   * Invalid Top-up amount
   */
  INVALID_TOP_UP_AMOUNT = 'R17',
  /**
   * Top-up daily limit exceeded
   */
  TOP_UP_DAILY_LIMIT_EXCEEDED = 'R18',
  /**
   * Payments with this biller are currently unavailable
   */
  PAYMENTS_WITH_THIS_BILLER_ARE_CURRENTLY_UNAVAILABLE = 'R19',
  /**
   * Lookup time out with biller
   */
  LOOKUP_TIME_OUT_WITH_BILLER = 'R20',
  /**
   * Configuration issue between us and our biller
   */
  CONFIGURATION_ISSUE_BETWEEN_US_AND_OUR_BILLER = 'R21',
  /**
   * Biller maintenance in progress, please try again later
   */
  BILLER_MAINTENANCE_IN_PROGRESS = 'R22',
  /**
   * No transaction to reverse
   */
  NO_TRANSACTION_TO_REVERSE = 'R23',
  /**
   * Timeout from biller
   */
  TIMEOUT_FROM_BILLER = 'R24',
  /**
   * Error with performing the cancellation
   */
  ERROR_WITH_PERFORMING_THE_CANCELLATION = 'R25',
  /**
   * Reversal not supported for this biller
   */
  REVERSAL_NOT_SUPPORTED_FOR_THIS_BILLER = 'R26',
  /**
   * Overdue Bill
   */
  OVERDUE_BILL = 'R27',
  /**
   * Invalid Account Number: Sky account numbers should start with 401 or 501 or 601
   */
  INVALID_ACCOUNT_NUMBER_SKY = 'R28',
  /**
   * The biller returned an error. Please check the account number.
   */
  THE_BILLER_RETURNED_AN_ERROR = 'R29',
  /**
   * Different company
   */
  DIFFERENT_COMPANY = 'R30',
  /**
   * Phone number is no longer active
   */
  PHONE_NUMBER_IS_NO_LONGER_ACTIVE = 'R31',
  /**
   * Invalid Payment Amount: Sky minimum payment is $ 185 MXN
   */
  INVALID_PAYMENT_AMOUNT_SKY = 'R32',
  /**
   * Fraud suspected
   */
  FRAUD_SUSPECTED = 'R33',
  /**
   * Invalid Currency
   */
  INVALID_CURRENCY = 'R34',
  /**
   * Temporary communication error with carrier. Please try again
   */
  TEMPORARY_COMMUNICATION_ERROR_WITH_CARRIER = 'R35',
  /**
   * Blocked attempt to make a possible duplicate payment. Requests for this account number with this payment amount are blocked for 1 hour
   */
  BLOCKED_ATTEMPT_TO_MAKE_A_POSSIBLE_DUPLICATE_PAYMENT = 'R36',
  /**
   * Recurring payments enabled for this account
   */
  RECURRING_PAYMENTS_ENABLED_FOR_THIS_ACCOUNT = 'R37',
  /**
   * Invalid Payment Amount: You must pay at least the actual account balance
   */
  INVALID_PAYMENT_AMOUNT_UNKNOWN_2 = 'R41', // TODO: check what this error means
  /**
   * Account Number is valid, but is postpaid and doesn’t have balance yet
   */
  ACCOUNT_NUMBER_IS_VALID = 'R42',
  /**
   * Invalid Barcode Format. Please the payment with the account number
   */
  INVALID_BARCODE_FORMAT = 'R43',
  /**
   * Invalid Customer Status. This customer is required to show in person at the Biller location
   */
  INVALID_CUSTOMER_STATUS = 'R44',
  /**
   * The maximum number of payments for this account on this day was reached
   */
  THE_MAXIMUM_NUMBER_OF_PAYMENTS_FOR_THIS_ACCOUNT_ON_THIS_DAY_WAS_REACHED = 'R45',
  /**
   * Can't get balance. This customer is required to show in person at the Biller location.
   */
  CANT_GET_BALANCE = 'R46',
  /**
   * No connection with the billerUnable to perform operation, biller returned an unexpected error
   */
  NO_CONNECTION_WITH_THE_BILLERUNABLE_TO_PERFORM_OPERATION = 'R47',
  /**
   * Unable to perform operation, biller returned an unexpected error
   */
  UNABLE_TO_PERFORM_OPERATION = 'R48',
  /**
   * Catchall error
   */
  CATCHALL_ERROR = 'R99',
  /**
   * Insufficient balance. Make a call to /account to get your current balance
   */
  INSUFFICIENT_BALANCE = 'R100',
  /**
   * Biller doesn’t support balance lookup
   */
  BILLER_DOESNT_SUPPORT_BALANCE_LOOKUP = 'R101',
  /**
   * Invalid or missing parameters
   */
  INVALID_OR_MISSING_PARAMETERS = 'R102',
  /**
   * Transaction already reversed
   */
  TRANSACTION_ALREADY_REVERSED = 'R103',
  /**
   * Invalid Subscription ID. Please verify the ID that you passed or create a new subscription
   */
  INVALID_SUBSCRIPTION_ID = 'R104',
  /**
   * Only same day reversals are allowed
   */
  ONLY_SAME_DAY_REVERSALS_ARE_ALLOWED = 'R105',
  /**
   * Payment amount too large, max amount is 2500 USD
   */
  PAYMENT_AMOUNT_TOO_LARGE_MAX_2500_USD = 'R114',
  /**
   * POS number is invalid
   */
  POS_NUMBER_IS_INVALID = 'R115',
  /**
   * Company is not assigned
   */
  COMPANY_IS_NOT_ASSIGNED = 'R117',
  /**
   * Balance lookup issue
   */
  BALANCE_LOOKUP_ISSUE = 'R121',
  /**
   * Balance not yet available for this biller
   */
  BALANCE_NOT_YET_AVAILABLE_FOR_THIS_BILLER = 'R122',
  /**
   * Processor OK
   */
  PROCESSOR_OK = 'R200',
  /**
   * Processor Access Denied
   */
  PROCESSOR_ACCESS_DENIED = 'R201',
  /**
   * Processor does not return balance
   */
  PROCESSOR_DOES_NOT_RETURN_BALANCE = 'R202',
  /**
   * Catchall Processor error
   */
  CATCHALL_PROCESSOR_ERROR = 'R299',
}
