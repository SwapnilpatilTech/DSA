class QueueStacks {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  enqueue(x) {
    this.stackIn.push(x);
  }

  dequeue() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    return this.stackOut.length === 0 ? null : this.stackOut.pop();
  }

  peek() {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop());
      }
    }
    return this.stackOut.length === 0 ? null : this.stackOut[this.stackOut.length - 1];
  }
}