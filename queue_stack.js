class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class that represents a stack using a singly linked list
 * Stacks follow a LIFO (Last In First Out) order where new Nodes are added
 * to the top (last element in the SLL) and removed from the top.
 * To navigate through a stack, we can ONLY use the pop and push methods.
 * We cannot use any form of runner as we did with a regular linked list
 */
class SLLStack {
    constructor() {
        this.head = null;
    }

    /**
     * Returns whether the stack is empty or not
     * @returns {boolean} is the stack empty true/false
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Returns the size of the stack
     * @returns {number} the size of the stack
     */
    size() {
        let len = 0;
        let runner = this.head;

        while (runner) {
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    /**
     * Takes a node and adds it to the top of the stack
     * @param {Node} newNode the new node that is to be pushed to the top of the stack
     */
    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * Removes the Node at the top of the stack and returns it
     * @returns {Node} the node that was removed
     */
    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;

        return removed;
    }

    /**
     * Returns the node at the top of the stack without removing
     * @returns {Node} the node at the top of the stack
     */
    peek() {
        return this.head ? this.head.data : null;
    }

    // EXTRA
    /**
     * Goes through the stack to see if it contains the value.
     * Bonus: follow the concept of a stack and only use pop and push.
     * By the end of the function, the stack should be in the original order it started in.
     * It is only to use another stack.
     * @param {any} value a value to search for in the stack
     * @returns {boolean} true/false whether the value is in the stack
     */
    contains(value) {
        let runner = this.head;

        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // EXTRA
    /**
     * Goes through the stack to print out all the values
     * Bonus: follow the concept of a stack and only use pop and push.
     * By the end of the function, the stack should be in the original order it started in.
     * It is only to use another stack.
     */
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

/**
 * Class that represents a queue using a singly linked list
 * Stacks follow a FIFO (First In First Out) order where new Nodes are added
 * to the back (last element in the SLL) and removed from the top (first element in the SLL)
 * When using a Queue, we can only add and remove items by using the enqueue and dequeue methods
 */
class SLQueue {
    /**
     * Method that instantiates the SLQueue object
     * this.head points to the front of the queue
     * this.tail points to the back of the queue
     * this.size tracks the size. we need to make sure we increment or decrement
     * this.size when we enqueue or dequeue
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Returns whether the queue is empty or not
     * @returns {boolean} is the queue empty true/false
     */
    isEmpty() {
        return !this.head;
        // same as return this.size === null;
    }

    /**
     * Returns the size of the queue
     * @returns {number} the size of the queue
     */
    getSize() {
        return this.size;
    }

    /**
     * Takes a node and adds it to the top of the queue
     * @param {Node} newNode the new node that is to be pushed to the back of the queue
     */
    enqueue(newNode) {
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // pre-increment so the new size is returned otherwise old size is returned
        return ++this.size;
    }

    /**
     * Removes the Node at the front of the queue and returns it
     * @returns {Node} the node that was removed
     */
    dequeue() {
        if (!this.head) {
            return null;
        }

        const dequeued = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        }

        this.size--;
        return dequeued;
    }

    /**
     * Returns the node at the top of the queue without removing
     * @returns {Node} the node at the top of the queue
     */
    front() {
        return this.head ? this.head : null;
    }

    // EXTRA
    /**
     * Goes through the queue to see if it contains the value.
     * Bonus: follow the concept of a queue and only use pop and push.
     * By the end of the function, the queue should be in the original order it started in.
     * It is only to use another queue.
     * @param {any} value a value to search for in the queue
     * @returns {boolean} true/false whether the value is in the queue
     */
    contains(value) {
        let runner = this.head;

        while (runner) {
            if (runner.searchVal === searchVal) return true;
            runner = runner.next;
        }
        return false;
    }

    // EXTRA
    /**
     * Goes through the queue to print out all the values
     * Bonus: follow the concept of a queue and only use pop and push.
     * By the end of the function, the queue should be in the original order it started in.
     * It is only to use another queue.
     */
    print() {
        let runner = this.head;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }

    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        vals.forEach((val) => this.enqueue(new Node(val)));
    }

    /**
     * Compares this queue to another given queue to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue.
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
    compareQueues(q2) {
        if (this.size !== e2.size()) return false;

        let isEqual = true;
        let len = this.size();

        // the main this with this algo is that, with a queue implementation, the only way
        // we can access the nodes in the queue is to dequeue the nodes one at a time.
        // to preserve the original queue order, we therefore enqueue the dequeued node after the comparison
        for (let i = 0; i < len; i++) {
            const dequeued1 = this.dequeue();
            const dequeued2 = q2.dequeue();

            // we set isEqual to false instead of an early exit so that we can finish
            // setting the queues back to the original order
            if (dequeued1.data !== dequeued2.data) {
                isEqual = false;
            }

            this.enqueue(dequeued1);
            q2.enqueue(dequeued2);
        }

        return isEqual;
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * @returns {boolean}
     */
    isPalindrome() {
        if (this.isEmpty()) return false;

        let isPalin = true;
        const stack = new SLLStack();
        const len = this.size();

        // again, need to dequeue and enqueue to access everything and preserve the original order
        // using a stack means that we can then retrieve the nodes in reverse order
        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            stack.push(dequeued);

            this.enqueue(dequeued);
        }

        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            let popped = stack.pop();

            if (popped.data !== dequeued.data) {
                isPalin = false;
            }

            this.enqueue(dequeued);
        }

        return isPalin;
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() {
        // set necessary variables and instantiate a new SLLStack
        let sumLeft = 0;
        let sumRight = 0;
        let newStack = new SLLStack;
        // divide size by two
        let halfSize = this.size / 2;
        if (halfSize % 2 != 0) return false;
        // dequeue each node, add the value of each dequeued node to a total add those nodes to a stack
        for (let i = 0; i < halfSize; i++) {
            sumRight += this.head.data;
            newStack.push(this.dequeue())
        }
        // add the rest of the nodes left in the queue and add them to the stack
        for (let i = 0; i < halfSize; i++) {
            sumLeft += this.head.data;
            newStack.push(this.dequeue())
        }
        // put everything back
        for (let i = 0; i < newStack.size; i++) {
            this.enqueue(newStack.pop())
        }
        // compare the two totals
        if (sumLeft === sumRight) return true;
        else return false;
    }
}

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    /**
     * Takes a node and adds it to the top of the queue
     * @param {Node} newNode the new node that is to be pushed to the back of the queue
     */
    enqueue(newNode) {
        this.stack1.push(newNode);
        return this.stack1.size();
    }

    /**
     * Removes the Node at the front of the queue and returns it
     * @returns {Node} the node that was removed
     */
    dequeue() {
        if (this.stack2.size() === 0) {
            this.alternateStacks(this.stack1, this.stack2);
        }

        return this.stack2.pop();
    }

    /**
     * Transfers the items from one stack to the other.
     * - Time: O(n) linear. Push and pop are constant but the loop is not.
     * - Space: O(1) The items are being moved from one stack to another
     *    not stored as duplicates.
     * @param {Stack} start The stack that currently contains the items.
     * @param {Stack} destination The stack that the items in start need to be
     *    moved into.
     * @returns {undefined}
     */
    alternateStacks(start, destination) {
        while (start.size()) {
            destination.push(start.pop());
        }
    }

    /**
     * Retrieves the first item in the queue without removing it.
     * - Time: O(n) linear, due to alternateStacks being linear time.
     * - Space: O(1) The items are being moved from one stack to another
     *    not stored as duplicates.
     * @returns {any} The first item in the queue.
     */
    peek() {
        if (this.stack2.size() === 0) {
            this.alternateStacks(this.stack1, this.stack2);
        }
        return this.stack2[this.stack2.size() - 1];
    }
}

let newQ = new SLQueue();

newQ.enqueue(2)
newQ.enqueue(4)
console.log(newQ.enqueue(23))
