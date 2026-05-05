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
// Linked List Class
// ===============================
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at end
    insert(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    // Print list
    print() {
        let curr = this.head;
        let result = [];
        while (curr) {
            result.push(curr.data);
            curr = curr.next;
        }
        console.log(result.join(" -> "));
    }

    // ===============================
    // 1. Reverse Linked List
    // ===============================
    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }

    // ===============================
    // 2. Detect Cycle
    // ===============================
    hasCycle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;
        }

        return false;
    }

    // ===============================
    // 3. Find Middle
    // ===============================
    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow ? slow.data : null;
    }

    // ===============================
    // 4. Remove Nth from End
    // ===============================
    removeNthFromEnd(n) {
        let dummy = new Node(0);
        dummy.next = this.head;

        let fast = dummy;
        let slow = dummy;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;

        this.head = dummy.next;
    }

    // ===============================
    // 5. Merge Two Sorted Lists
    // ===============================
    static merge(list1, list2) {
        let dummy = new Node(0);
        let tail = dummy;

        let l1 = list1.head;
        let l2 = list2.head;

        while (l1 && l2) {
            if (l1.data < l2.data) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;

        let mergedList = new LinkedList();
        mergedList.head = dummy.next;

        return mergedList;
    }
}


// ===============================
// TESTING
// ===============================

// 1. Reverse
let list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);

console.log("Original List:");
list1.print();

list1.reverse();
console.log("Reversed List:");
list1.print();
console.log("----------------------------------");


// 2. Cycle Detection
let list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);

// Create cycle manually
list2.head.next.next.next = list2.head.next;

console.log("Cycle Detection:");
console.log("Has Cycle:", list2.hasCycle());
console.log("----------------------------------");


// 3. Find Middle
let list3 = new LinkedList();
list3.insert(1);
list3.insert(2);
list3.insert(3);
list3.insert(4);
list3.insert(5);

console.log("Middle Element:", list3.findMiddle());
console.log("----------------------------------");


// 4. Remove Nth from End
let list4 = new LinkedList();
list4.insert(1);
list4.insert(2);
list4.insert(3);
list4.insert(4);
list4.insert(5);

console.log("Before Removal:");
list4.print();

list4.removeNthFromEnd(2);
console.log("After Removing 2nd from End:");
list4.print();
console.log("----------------------------------");


// 5. Merge Two Sorted Lists
let l1 = new LinkedList();
l1.insert(1);
l1.insert(3);
l1.insert(5);

let l2 = new LinkedList();
l2.insert(2);
l2.insert(4);
l2.insert(6);

let merged = LinkedList.merge(l1, l2);

console.log("Merged Sorted List:");
merged.print();
console.log("----------------------------------");