const toSnakeCase = (word: string) => word.replace(/([A-Z])/g, (el) => `_${el.toLowerCase()}`);

export const snakeify = <T>(object: Record<string, unknown>): T =>
  Object.fromEntries(
    Object.entries(object).map(([key, value]) => [toSnakeCase(key), value]),
  ) as unknown as T;
