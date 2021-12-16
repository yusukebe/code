class Node {
  constructor({ key, children } = {}) {
    this.key = key || ''
    this.children = children || []
  }

  insert(word) {
    let curNode = this
    for (const char of word) {
      let nextNode = curNode.children[char]
      if (nextNode) {
        curNode = nextNode
      } else {
        curNode.children[char] = new Node({ key: char })
        curNode = curNode.children[char]
      }
    }
  }

  search(word) {
    if (!this.key && this.children.lengh == 0) {
      return false
    }

    let curNode = this
    for (const char of word) {
      let nextNode = curNode.children[char]
      if (nextNode) {
        curNode = nextNode
      } else {
        return false
      }
    }
    return true
  }
}

const node = new Node()
node.insert('word')
node.insert('wheel')
node.insert('world')
node.insert('hospital')
node.insert('mode')
console.log(node.search('abc')) // false
console.log(node.search('mo')) // true
console.log(node.search('mode')) // true
