import { camelize } from './camelize';

describe('camelize', () => {
  it('works', () => {
    const result = camelize({ hello_world: 'Hello World' });

    expect(result).toEqual({ helloWorld: 'Hello World' });
  });

  it('works with multiple keys', () => {
    const result = camelize({ hello_world: 'Hello World', bye_bye: 'Bye Bye' });

    expect(result).toEqual({ helloWorld: 'Hello World', byeBye: 'Bye Bye' });
  });

  it('works with arrays', () => {
    const result = camelize({ array: [{ hello_world: 'Hello World' }] });

    expect(result).toEqual({ array: [{ helloWorld: 'Hello World' }] });
  });
});
