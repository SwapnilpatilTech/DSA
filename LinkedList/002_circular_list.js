// ===============================
// Node Definition
// ===============================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ===============================
// Circular Linked List Class
// ===============================
class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // ===============================
  // 1. Insert Node (at end)
  // ===============================
  insert(data) {
    let newNode = new Node(data);

    // Empty list
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let curr = this.head;
    while (curr.next !== this.head) {
      curr = curr.next;
    }

    curr.next = newNode;
    newNode.next = this.head;
  }

  // ===============================
  // 2. Delete Node (by value)
  // ===============================
  delete(value) {
    if (!this.head) return;

    let curr = this.head;
    let prev = null;

    // Case: head to be deleted
    if (curr.data === value) {
      // Single node
      if (curr.next === this.head) {
        this.head = null;
        return;
      }

      // Find last node
      while (curr.next !== this.head) {
        curr = curr.next;
      }

      curr.next = this.head.next;
      this.head = this.head.next;
      return;
    }

    prev = this.head;
    curr = this.head.next;

    while (curr !== this.head) {
      if (curr.data === value) {
        prev.next = curr.next;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  // ===============================
  // 3. Traverse
  // ===============================
  traverse() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let result = [];

    do {
      result.push(curr.data);
      curr = curr.next;
    } while (curr !== this.head);

    console.log(result.join(" -> "));
  }

  // ===============================
  // 4. Split into Two Halves
  // ===============================
  split() {
    if (!this.head || this.head.next === this.head) {
      return [this, null];
    }

    let slow = this.head;
    let fast = this.head;

    while (fast.next !== this.head && fast.next.next !== this.head) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let head1 = this.head;
    let head2 = slow.next;

    // Break into two circles
    slow.next = head1;

    let temp = head2;
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = head2;

    let list1 = new CircularLinkedList();
    let list2 = new CircularLinkedList();

    list1.head = head1;
    list2.head = head2;

    return [list1, list2];
  }

  // ===============================
  // 5. Detect Circular
  // ===============================
  isCircular() {
    if (!this.head) return false;

    let curr = this.head.next;

    while (curr && curr !== this.head) {
      curr = curr.next;
    }

    return curr === this.head;
  }
}


// ===============================
// TESTING
// ===============================

// Create list
let cll = new CircularLinkedList();
cll.insert(1);
cll.insert(2);
cll.insert(3);
cll.insert(4);
cll.insert(5);

console.log("Original Circular List:");
cll.traverse();
console.log("----------------------------------");


// Delete
cll.delete(3);
console.log("After Deleting 3:");
cll.traverse();
console.log("----------------------------------");


// Detect Circular
console.log("Is Circular:", cll.isCircular());
console.log("----------------------------------");


// Split
let [firstHalf, secondHalf] = cll.split();

console.log("First Half:");
firstHalf.traverse();

console.log("Second Half:");
secondHalf.traverse();
console.log("----------------------------------");