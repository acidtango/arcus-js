declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveLengthWithin(min: number, max: number): R;
    }
  }
}

export {};
