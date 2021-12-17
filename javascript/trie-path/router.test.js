const { expect } = require('@jest/globals')
const Router = require('./router')
const router = Router()

describe('Basic Usage', () => {
  it('get, post root', () => {
    router.get('/', 'get root')
    router.post('/', 'post root')

    let res = router.matchRoute('GET', '/')
    expect(res).not.toBeNull()
    expect(res.handler).toBe('get root')

    res = router.matchRoute('POST', '/')
    expect(res).not.toBeNull()
    expect(res.handler).toBe('post root')

    res = router.matchRoute('PUT', '/')
    expect(res).toBeNull()

    res = router.matchRoute('GET', '/nothing')
    expect(res).toBeNull()
  })
})

describe('Complex', () => {
  it('Named Param', () => {
    router.get('/entry/:id', 'get entry')
    res = router.matchRoute('GET', '/entry/123')
    expect(res).not.toBeNull()
    expect(res.handler).toBe('get entry')
    expect(res.params['id']).toBe('123')
  })
  it('Wildcard', () => {
    router.get('/wild/*/card', 'get wildcard')
    res = router.matchRoute('GET', '/wild/xxx/card')
    expect(res).not.toBeNull()
    expect(res.handler).toBe('get wildcard')
  })
  it('Regexp', () => {
    router.get('/post/:date{[0-9]+}/:title{[a-z]+}', 'get post')
    res = router.matchRoute('GET', '/post/20210101/hello')
    expect(res).not.toBeNull()
    expect(res.handler).toBe('get post')
    expect(res.params['date']).toBe('20210101')
    expect(res.params['title']).toBe('hello')
    res = router.matchRoute('GET', '/post/onetwothree')
    expect(res).toBeNull()
    res = router.matchRoute('GET', '/post/123/123')
    expect(res).toBeNull()
  })
})
