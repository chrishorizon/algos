//   * Linked Lists: store data in objects, and each object stores a value and a pointer, pointing to the next object.
//     - use application samples: image viewer, forward / backward in web pages

class Node {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {Node} This new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         */
        this.next = null;
    }
}

/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start node (head) of the list at all times and
 * as a place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        this.head = null;
    }

    /**
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head === null
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        // Create a new node
        let newNode = new Node(data);

        // Check if its empty
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            // Create a runner
            let runner = this.head;
            // Loop through list
            while (runner.next != null) {
                runner = runner.next;
            }
            // Assign runner.next to new node
            runner.next = newNode;
        }
        return this;
    }

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        let firstNode = new Node(data)
        if (this.isEmpty()){
            this.head = firstNode
        } else {
            firstNode.next = this.head;
            this.head = firstNode;
        }
        return this;
    }

    // Removes the first node of this list.
    removeHead() {
        if (this.isEmpty()) return null;

        this.head = this.head.next;
        return this;
    }

    // Calculates the average of this list.
    average() {
        if (this.isEmpty()) return null;

        let runner = this.head;
        let value = 0;
        let count = 0;
        while(runner != null){
            value += runner.data;
            count++;
            runner = runner.next;
        }
        return value / count;
    }
    
    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        // EDGE CASE: If the list is empty, there's nothing to remove.
        // If the list only contains 1 thing, the back is the front.
        // Both cases are handled by our removeFront() method, soooo
        if(this.head == null || this.head.next == null) {
            return this.removeHead();
        }

        // Start our runner at the first node (always this.head)
        var runner = this.head;

        // Now, we want to stop at the second to last node.
        // while(runner.next != null) {
        //      runner = runner.next;
        // }
        // will get runner to the LAST node.
        // So:
        while(runner.next.next != null) {
            runner = runner.next;
        }
        // this will get us to the SECOND TO LAST node.

        // Because we want to remove the last node, and runner
        // is at the second to last node, let's store the last node (runner.next)
        // in a variable
        var removed = runner.next;
        // Then, to remove that last node, we just need to set runner.next to null
        runner.next = null;
        // And finally, return our removed node's value!
        return removed.data;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        // EDGE CASE: What if the list is empty?
        if(this.head == null) {
            // If there's nothing in the list, it can't contain a node with any value. Duh.
            return false;
        }

        // Start at the head of the list
        var runner = this.head;

        // We need to check every single node
        while(runner != null) {
            // Check if the value of runner matches the value passed in
            if(runner.data == val) {
                // If it does, we're done
                return true;
            } else { // Otherwise, we need to move runner down the line
                runner = runner.next;
            }
        }

        // If we're still here, then we've checked every node, so we're done, and it's not there.
        return false;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if(current.data == val){
            return true;
        } else if(current.next == null){
            return false;
        }
        return this.containsRecursive(val, current.next);
    }

    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * @param {Node} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {Node} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (this.head === null) return null;

        if (runner === null) return maxNode.data;
    
        if (runner.data > maxNode.data) maxNode = runner;
    
        return this.recursiveMax(runner.next, maxNode);
    }

    /**
     * Retrieves the data of the second to last node in this list.
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if(this.head == null || this.head.next == null){
            return null;
        }

        let runner = this.head;
        while(runner.next.next != null){
            runner = runner.next;
        }
        return runner.data;
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        if (this.head.data == val) {
            this.removeHead();
            return true;
        }
        if (!this.contains(val)) {
            return false;
        }
        let runner = this.head;
        while (runner.next.data !== val) {
            runner = runner.next;
        }
        runner.next = runner.next.next;
        return true;
    }

    /**
     * Inserts a new node before a node that has the given value as its data.
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        if (this.isEmpty()) return false;

        let newNode = new Node(newVal);

        if (this.head.data === targetVal) {
            this.insertAtFront(newNode);
            return true;
        }

        let runner1 = this.head.next;
        let runner2 = this.head;

        while (runner1 !== null) {
            if (runner1.data === targetVal) {
                newNode.next = runner1;
                runner2.next = newNode;

                return true;
            }

            runner1 = runner1.next;
            runner2 = runner2.next;
        }

        return false;
    }

    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList) {
        if(this.emptyList()){
            return null;
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = emptyList.head;
        return this;
    }

    /**
     * Finds the node with the smallest number as data and moves it to the front
     * of this list.
     * @returns {SinglyLinkedList} This list.
     */
    moveMinToFront() {
        if (this.isEmpty()) {
            return null
        }
        let minVal = this.head
        let minValPrevious = this.head
        let walker = this.head
        let runner = walker.next
        while (runner.next != null) {
            if (runner.data < minVal.data) {
                minVal = runner
                minValPrevious = walker
            }
            runner = runner.next
            walker = walker.next
        }
        minValPrevious.next = minVal.next
        minVal.next = this.head
        this.head = minVal
        return this.head
    }

    // EXTRA
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
     * and the return value will be a new list containing (5=>2=>4)
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
     */
    splitOnVal(val) {
        const newList = new SinglyLinkedList();

        if (!this.head) {
            return newList;
        }

        if (this.head.data === val) {
            newList.head = this.head;
            this.head = null;
            return newList;
        }

        let runner = this.head;

        while (runner.next) {
            if (runner.next.data === val) {
                newList.head = runner.next;
                runner.next = null;
                return newList;
            }
            runner = runner.next;
        }
        return newList;
    }

}

const emptyList = new SinglyLinkedList();
const singleNodeList = new SinglyLinkedList().seedFromArr([1]);
const unorderedList = new SinglyLinkedList().seedFromArr([
    -5, -10, 4, -3, 6, 1, -7, 2
]);
console.log(unorderedList.contains(100));

