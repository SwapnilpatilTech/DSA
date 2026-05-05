class DequeArray {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = 0;
    this.size = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  insertFront(item) {
    if (this.isFull()) return false;
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.front = (this.front - 1 + this.capacity) % this.capacity;
    }
    this.items[this.front] = item;
    this.size++;
    return true;
  }

  insertRear(item) {
    if (this.isFull()) return false;
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }
    this.items[this.rear] = item;
    this.size++;
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return null;
    const val = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
    return val;
  }

  deleteRear() {
    if (this.isEmpty()) return null;
    const val = this.items[this.rear];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    }
    this.size--;
    return val;
  }
}