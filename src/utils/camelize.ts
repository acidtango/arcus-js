const toCamelCase = (word: string) => word.replace(/(_[\w])/g, (el) => el[1].toUpperCase());

export const camelize = <T>(object: any): T => {
  if (typeof object === 'object') {
    return Object.fromEntries(
      Object.entries(object).map(([key, value]) => [
        toCamelCase(key),
        Array.isArray(value) ? value.map(camelize) : value,
      ]),
    ) as unknown as T;
  }

  return object;
};
