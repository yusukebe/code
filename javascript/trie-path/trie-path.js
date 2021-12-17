class Node {
  constructor({ method, label, handler, children } = {}) {
    this.label = label || '/'
    this.children = children || []
    this.method = {}
    if (method && handler) {
      this.method[method] = handler
    }
  }

  insert(method, path, handler) {
    let curNode = this
    const ps = this.splitPath(path)
    for (const p of ps) {
      let nextNode = curNode.children[p]
      if (nextNode) {
        curNode = nextNode
      } else {
        curNode.children[p] = new Node({
          method: method,
          label: p,
          handler: handler,
        })
        curNode = curNode.children[p]
      }
    }
    // XXX
    if (!curNode.method[method]) {
      curNode.method[method] = handler
    }
  }

  splitPath(path) {
    let ps = []
    for (const p of path.split('/')) {
      if (p) {
        ps.push(p)
      }
    }
    return ps
  }

  search(method, path) {
    let curNode = this
    const ps = this.splitPath(path)
    for (const p of ps) {
      let nextNode = curNode.children[p]
      if (nextNode) {
        curNode = nextNode
      } else {
        return this.notFound()
      }
    }
    let handler = curNode.method[method]
    if (handler) {
      return handler
    } else {
      return this.notFound()
    }
  }

  notFound() {
    return null
  }
}

const node = new Node()
module.exports = node
