/*
    We're rocking 2 algos again today: prepend and append values.

    Prepend => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd before it.

    EXAMPLE: 
    someList = H: 5 -> 4 -> 2 -> 1 ->

    someList.prepend(2, 3) would make someList H: 5 -> 4 -> 3 -> 2 -> 1 ->

    Append => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd after it.

    EXAMPLE:
    someList = H: 7 -> 2 -> 4 -> 8 -> 11 ->

    someList.append(4, 5) would make someList H: 7 -> 2 -> 4 -> 5 -> 8 -> 11 ->

    SOME EDGE CASES:
    - What if the list is empty?
    - What if the value I'm looking for isn't there?
        - You can just return False in that case.
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        // Step 1: Create a new node for our new head
        var newHead = new SLNode(value);
            // at this point:
            // newHead.value => value passed into this method
            // newHead.next => null

        // Step 2: Assign the new node's .next attribute to be the current list's head node
        newHead.next = this.head;
            // newHead.next => this.head

        // Step 3: Reassign the list's head node to be the new node
        this.head = newHead;
        
        return this;
    }

    addToBack(value) {
        // EDGE CASE: If the list is empty, adding to the back is the same as adding to the front
        if(this.head == null) { // the list is empty if there IS no head
            // and we've already built out our method for adding to the front, soooo
            this.addToFront(value);
            return this;
        }

        // Step 1: Create our new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next to be the new node
        runner.next = newNode;
        return this;
    }

    contains(value) {
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
            if(runner.value == value) {
                // If it does, we're done
                return true;
            } else { // Otherwise, we need to move runner down the line
                runner = runner.next;
            }
        }

        // If we're still here, then we've checked every node, so we're done, and it's not there.
        return false;
    }

    printList() {
        if(this.head == null) {
            console.log("List is empty");
            return;
        }
        var string = "H: ";
        var runner = this.head;

        while(runner != null) {
            string += runner.value + " -> ";
            runner = runner.next;
        }
        console.log(string);
    }

    removeFront() {
        // If the list is empty, there's nothing to remove, so we'll just return null
        if(this.head == null) {
            return null;
        }
        // We need to keep track of the node we are planning on removing because we want to 
        // ensure that we can return its value. Once we reassign the head, if there is no variable
        // referencing the current head, we lose it forever.
        var removed = this.head;
        // Set the head to be the second node
        this.head = removed.next;
        // This one is kind of optional. Garbage collection will throw away original head once nothing is referencing it anymore
        removed.next = null;
        // And finally, return the value of the node we remove
        return removed.value;
    }

    removeBack() {
        // EDGE CASE: If the list is empty, there's nothing to remove.
        // If the list only contains 1 thing, the back is the front.
        // Both cases are handled by our removeFront() method, soooo
        if(this.head == null || this.head.next == null) {
            return this.removeFront();
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
        return removed.value;
    }

    moveMinToFront() {
        // Edge Cases: If the list is empty, or only one node long, there's nothing to move around.
        if(this.head == null || this.head.next == null) {
            return this;
        }
        
        // We're going to use 4 pointer variables:
        //  1. walker --> this is going to lag 1 behind runner
        //  2. runner --> this is how we check each node
        //  3. min --> this will be our min value node
        //  4. minPrev --> at the end, we'll use this to "skip around" the min

        var runner = this.head.next;

        var min = walker; // we start this at walker because we don't know anything about
        // the values in our list, other than the fact that the first node exists and has a value.
        // therefore, really, we're trying to start min as the head of the list, but walker is easier to type 
        // than this.head, thus why i initialized it first. obviously i had to write more comments to explain that,
        // but you get the idea.
        var minPrev = null; // this starts at null, because if min is our smallest valued node,
        // and it starts at the head of our list, then the node before it (minPrev) doesn't exist
        
        // while our runner has not checked every single node
        while(runner != null) {
            // we'll have a check to see if the current node's value is less than our min node's value
            if(runner.value < min.value) {
                // and if it is, we'll set minPrev to walker (our runner's previous node)
                minPrev = walker;
                // and min to our runner (since that's the node that has the smallest value so far)
                min = runner;
            }
            // and regardless, we'll move walker and runner up one each
            walker = runner;
            runner = runner.next;
        }

        // if minPrev is still null, the minimum value is alread at the front 
        if(minPrev != null) {
            // otherwise, set minPrev's .next to be min's .next 
            minPrev.next = min.next;
            // then, to move min to the front, set its .next to be the head of our SLList
            min.next = this.head;
            // and to seal the deal, assign min as the new head!
            this.head = min;
        }

        return this;
    }

    moveMaxToBack() {
        // Edge Cases: If the list is empty, or only one node long, there's nothing to move around.
        if(this.head == null || this.head.next == null) {
            return this;
        }

        // We're going to use 4 pointer variables:
        //  1. walker --> this is going to lag 1 behind runner
        //  2. runner --> this is how we check each node
        //  3. max --> this will be our max value node
        //  4. maxPrev --> at the end, we'll use this to "skip around" the max

        // The logic for each is the same as in moveMinToFront
        var walker = this.head;
        var runner = this.head.next;
        var max = walker;
        var maxPrev = null;

        // Same logic as the previous example: We want to check every single node within the while loop.
        // The loop will break once runner reaches null (which means it's left the last node already)
        while(runner != null) {
            // if the node that runner is referencing has a value greater than our max node's value
            if(runner.value > max.value) {
                // reassign max to reference the node runner is referencing
                max = runner;
                // and do the same for maxPrev and walker
                maxPrev = walker;
            }

            // smaller or larger, it don't matter. move walker and runner up
            walker = runner;
            runner = runner.next;
        }
        // At this point, walker is sitting at our very last node. This helps out tremendously
        // since we need to assign the max node to be the last node's .next

        // If maxPrev is still null, it means the head of our list is still the largest node
        if(maxPrev == null) {
            // So assign the head to be the 2nd node
            this.head = max.next;
        } else if(maxPrev.next.next != null) { // otherwise, if the max value node isn't already at the end
            // of the list, assign maxPrev's .next to be max's .next (removing max from the sequence)
            maxPrev.next = max.next; 
        } else {
            // if we're in here, it means that our largest node is already at the end, so we can just return
            return this;
        }

        // Now that we've handled the differences between the 3 cases (node was the head,
        // node was already at the end, or node is somewhere in between), we can finish up
        
        // since walker is the last node, set its .next to max (making max after the last node)
        walker.next = max;
        // and to make it so the list doesn't loop, set max's .next to null
        max.next = null;

        // and finally
        return this;
    }

    prepend(valueToFind, valueToAdd) {
        if(this.head == null){
            return this;
        }
        var runner = this.head;

    }


    append(valueToFind, valueToAdd) {

    }
}

// --------------------------------------------------------------

class Node{
    constructor(value, next = null){
        this.value = value;
        this.head = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    // Insert last node
    

    //Print list data
    printListData(){
        let current = this.head;

        while (current){
            console.log(current.data);
            current = current.next;
        }
    }
}

// created new constructor with the LinkedList class
const ll = new LinkedList();
// added data to created new node
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.printListData();
