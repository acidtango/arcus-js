import { snakeify } from './snakeify';

describe('snakeify', () => {
  it('works', () => {
    const result = snakeify({ helloWorld: 'Hello World' });

    expect(result).toEqual({ hello_world: 'Hello World' });
  });

  it('works with multiple keys', () => {
    const result = snakeify({ helloWorld: 'Hello World', byeBye: 'Bye Bye' });

    expect(result).toEqual({ hello_world: 'Hello World', bye_bye: 'Bye Bye' });
  });
});
