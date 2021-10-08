/**
 * A class that represents a priority element (or Node)
 * Each node contains the data that is stored, the given priority (highest is 1),
 * and the .next for the SLL implentation
 */
class PriorityNode {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

/**
 * Class to represent a PriorityQueue with methods that enforce the correct
 * order of queue items.
 */
class SLPriorityQueue {
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
     * Takes a node and adds it to the top of the queue
     * We need to preserve the priority of nodes, so we insert once we find the
     * appropriate spot
     * @param {Node} newNode the new node that is to be pushed to the top of the queue
     */
    enqueue(newNode) {
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            this.size++;

            return this;
        }

        let runner = this.head;
        while (runner.next != null && runner.next.priority <= newNode.priority) {
            runner = runner.next;
        }

        if (runner.next == null) {
            this.tail = newNode;
        }

        newNode.next = runner.next;
        runner.next = newNode;
        this.size++;

        return this;
    }

    /**
     * Removes the Node at the front of the queue and returns it
     * this node would have the highest priority
     * @returns {Node} the node that was removed
     */
    dequeue() {
        if(this.head == null){
            return null
        }
        var pointer = this.head;  
        this.head = this.head.next;
        pointer.next = null;
        this.size--;
        console.log(this.size)

        return pointer
    }
}