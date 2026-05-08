//detect if a Linked List is Circular (Loop exists)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function isCircular(head) {
    let pointer1 = head;
    let pointer2 = head;
    
    while (pointer2 !== null && pointer2.next !== null) {

        pointer1 = pointer1.next;
        pointer2 = pointer2.next.next;

        if (pointer1 === pointer2) {
            return true;
        }
    }
    return false;
}
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);

a.next = b;
b.next = c;
c.next = a; 

console.log(isCircular(a));