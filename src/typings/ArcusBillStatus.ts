export enum ArcusBillStatus {
  /**
   * Bill was successfully linked and balance has been updated
   */
  LINKED = 'linked',
  /**
   * We ran into a problem while updating your bill. Check error_code and error_message for further details.
   */
  FAILED = 'failed',
}
