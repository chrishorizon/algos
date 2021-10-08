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
    enqueue(newNode) { }

    /**
     * Removes the Node at the front of the queue and returns it
     * this node would have the highest priority
     * @returns {Node} the node that was removed
     */
    dequeue() { }
}