const node = require('./trie-path')

describe('Util Methods', () => {
  let ps = node.splitPath('/')
  expect(ps[0]).toBe('/')
  ps = node.splitPath('/hello')
  expect(ps[0]).toBe('/')
  expect(ps[1]).toBe('hello')
})

describe('Basic Usage', () => {
  node.insert('get', '/', 'get root')
  node.insert('get', '/hello', 'get hello')
  node.insert('post', '/hello', 'post hello')
  node.insert('get', '/hello/foo', 'get hello foo')

  it('get, post /hello', () => {
    expect(node.search('get', '/').handler).toBe('get root')
    expect(node.search('post', '/')).toBeNull()

    expect(node.search('get', '/hello').handler).toBe('get hello')
    expect(node.search('post', '/hello').handler).toBe('post hello')
    expect(node.search('put', '/hello')).toBeNull()

    expect(node.search('get', '/nothing')).toBeNull()

    expect(node.search('get', '/hello/foo').handler).toBe('get hello foo')
    expect(node.search('post', '/hello/foo')).toBeNull()
    expect(node.search('get', '/hello/bar')).toBeNull()
  })
})

//describe.skip('Name path', () => {
//  node.insert('get', '/entry/:id', 'get entry')

//  const res = node.search('/entry/123')
//  console.log(res)
//  expect(res.handler).toBe('get entry')
//  expect(res.params).not.toBeNull()
//  expect(res.params['id']).toBe('123')
//})

describe('Wildcard', () => {})
describe('Regexp', () => {})

describe('Route chaining', () => {})
