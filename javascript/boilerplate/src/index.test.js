const hello = require('./index')

describe('Test Hello', () => {
  it('Return "Hello!"', () => {
    expect(hello()).toBe('Hello!')
  })
})
