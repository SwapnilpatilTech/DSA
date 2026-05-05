class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(x) {
    const node = new Node(x);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (!this.top) return null;
    const val = this.top.data;
    this.top = this.top.next;
    this.size--;
    return val;
  }

  peek() {
    return this.top ? this.top.data : null;
  }

  isEmpty() {
    return this.top === null;
  }
}