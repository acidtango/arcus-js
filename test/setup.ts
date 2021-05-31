expect.extend({
  toHaveLengthWithin(received, min, max) {
    const length = received.length;

    if (length >= min && length <= max) {
      return {
        message: () => `expected array length to be between ${min} and ${max}, but has ${length}`,
        pass: true,
      };
    }

    return {
      message: () => `expected array length to be between ${min} and ${max}, but has ${length}`,
      pass: false,
    };
  },
});
