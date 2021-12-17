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
  })
})
