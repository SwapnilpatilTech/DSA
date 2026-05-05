class CircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.size = k;
    this.head = -1;
    this.tail = -1;
  }

  enqueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.size;
    }
    return true;
  }

  front() {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  isEmpty() {
    return this.head === -1;
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}