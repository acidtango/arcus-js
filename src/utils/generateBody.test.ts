import { generateBody } from './generateBody';

describe('generateBody', () => {
  it('works', () => {
    const result = generateBody({ helloWorld: 'Hello World' });

    expect(result).toEqual('{"hello_world":"Hello World"}');
  });
});
