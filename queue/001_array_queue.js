class QueueArray {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    // Note: shift() is O(n). For O(1) performance, consider a head pointer.
    return this.items.shift();
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const q = new QueueArray();
q.enqueue(10);
q.enqueue(20);
console.log("Dequeued:", q.dequeue()); // 10