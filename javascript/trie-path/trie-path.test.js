const node = require('./trie-path')

describe('Test Trie Path', () => {
  node.insert('get', '/', 'get root')
  node.insert('get', '/hello', 'get hello')
  node.insert('post', '/hello', 'post hello')
  node.insert('get', '/hello/foo', 'get hello foo')

  it('get, post /hello', () => {
    expect(node.search('get', '/')).toBe('get root')
    expect(node.search('post', '/')).toBeNull()

    expect(node.search('get', '/hello')).toBe('get hello')
    expect(node.search('post', '/hello')).toBe('post hello')
    expect(node.search('put', '/hello')).toBeNull()

    expect(node.search('get', '/nothing')).toBeNull()

    expect(node.search('get', '/hello/foo')).toBe('get hello foo')
    expect(node.search('post', '/hello/foo')).toBeNull()
    expect(node.search('get', '/hello/bar')).toBeNull()
  })
})
