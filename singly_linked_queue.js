class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        return !this.head;
    }

    getSize() {
        // return length of SLStack
        return this.size;
    }

    enqueue(newVal) {
        // push newVal to end of Queue
        let new_queue = new Node(newVal);

        if(this.isEmpty()){
            this.head = new_queue;
            this.tail = new_queue;
        } else {
            this.tail.next = new_queue;
            this.tail = new_queue;
        }
        this.size++;
        return this;
    }

    dequeue() {
        // remove and return the data at the front of the queue
        let node = this.head;

        if (this.isEmpty()) return null;

        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return node.data;
        }

        this.head = this.head.next;
        this.size--;
        return node.data;
    }

    front() {
        // return the data at the front of the queue without removing
        return this.head ? this.head.data : null;
    }

}

let q1 = new Queue();
console.log(q1.isEmpty());
q1.enqueue(8)
q1.enqueue(5)
q1.enqueue(10)
q1.enqueue(10)
// q1.dequeue();
console.log(q1.dequeue());