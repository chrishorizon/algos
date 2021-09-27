//   * Linked Lists: store data in objects, and each object stores a value and a pointer, pointing to the next object.
//     - use application samples: image viewer, forward / backward in web pages

/*
    hasLoop() 
    Write a method that will return a boolean based on whether a singly linked list has a loop.
    A SLL has a loop if there is no node with a .next of null (i.e. what should be the last node has a .next
    that points back at another previous node)
    HINT: https://www.youtube.com/watch?v=7UGu2sRmSHI&ab_channel=TopMovieClips
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
        // Our typical edge case: If the list is empty
        if(this.head == null) {
            // then we can't possibly have the value we're looking for, so return false.
            return false;
        }

        // I like the 2 runner approach whenever a previous node is concerned
        var walker = null;
        var runner = this.head;

        // To have runner stop at each and every node
        while(runner != null) {
            // at each node, check if the node's value matches our valueToFind
            if(runner.value == valueToFind){
                // if it does, create our new node that we'll insert
                var newNode = new SLNode(valueToAdd);
                // set the new node's .next to be our runner (since we're pre-pending it)
                newNode.next = runner;
                // Now this conditional handles our 2 cases:
                // Case 1: The node we want to prepend to is somewhere in the middle of our list (or at the end)
                // Case 2: The node we want to prepend to is the head
                if(walker != null) {
                    // Case 1: walker is a node, so set its .next to the new node
                    walker.next = newNode;
                } else {
                    // Case 2: walker is still null, so we ignore it, but since 
                    // the node we're pre-pending to is the head, that means we're adding to the front,
                    // which means newNode is now the head of the SLL
                    this.head = newNode;
                }
                // And now that we've done our 'pending, let's return!
                return this;
            }

            // Now, if the runner's value does NOT match, we just want to mosey on down the line
            walker = runner;
            runner = runner.next;
        }

        // By now, we would have found the node if it existed. So instead, let's return false since it's not there
        return false;
    }

    append(valueToFind, valueToAdd) {
        // Our typical edge case: If the list is empty        
        if(this.head == null) {
            // then we can't possibly have the value we're looking for, so return false.
            return false;
        }

        // We only need to keep track of the node AFTER our runner since we're appending
        var runner = this.head;

        // So that runner checks every single node
        while(runner != null) {
            // Same deal as before. Check to see if we found our value
            if(runner.value == valueToFind){
                // If so, create our node
                var newNode = new SLNode(valueToAdd);
                // set its .next to what's currently after runner
                newNode.next = runner.next
                // and reassign runner's .next to be our new node
                runner.next = newNode;

                // and voila, we've inserted our new node right after.
                // Doesn't matter if it was the head of the list, or the last node, or
                // any node in between!

                return this;
            }

            // Otherwise, we haven't found our node yet, so keep going
            runner = runner.next;
        }

        // If we still haven't found it, the node doesn't exist, so return false
        return false;
    }

    removeNegatives() {
        // EDGE CASE: If the list starts with one or more negative values:
        // At first we might think we can just use the second half of this.
        // But, we'll be using this to chop off any and all leading negative values.
        // It's possible that the list ONLY contains negatives, so eventually
        // the head might be null, which would cause our second condition to break
        while(this.head != null && this.head.value < 0) {
            // Set the head to be the next node
            this.head = this.head.next;
        }

        // At this point, we've removed all of the negative values from the start
        // of the list. Is the list possibly empty? Sure. But fortunately, the next
        // step will still work even if the head is null
        var runner = this.head;

        // If runner starts as null, it'll never enter the loop to begin with, but if it's not, 
        // things will progress as we want them to!
        while(runner != null) {
            // Let's see if we can reconfigure our previous logic to chop off all
            // consecutive negatives
            while(runner.next != null /* while there is a next node */ && runner.next.value < 0 /* and that next node has a negative value */) {
                // Previously we just moved the head to the next node, but in this case, we know runner has a positive value,
                // and we don't want to remove it. we want to remove the NEXT node.
                // So if we set runner's .next to be the next node's .next, it removes that node from the list
                runner.next = runner.next.next;

                // EXAMPLE:
                //          r    r.n  r.n.n         r.n exists and is negative, enter while loop
                // H: 10 -> 4 -> -3 -> -2 -> -1 -> 4 -> 
                //          r    r.n  r.n.n         r.n exists and is negative, continue while loop
                // H: 10 -> 4 -> -2 -> -1 -> 4 -> 
                //          r    r.n  r.n.n         r.n exists and is negative, continue while loop
                // H: 10 -> 4 -> -1 -> 4 ->
                //          r   r.n         exists positive, break out of while loop
                // H: 10 -> 4 -> 4 -> 
            }

            // at this point, the next node has a positive value, so move runner there
            runner = runner.next;
        }

        // At this point, there are no more negatives!
        return this;
    }

    secondToLastValue() {
        // EDGE CASES: If the list is either A. Empty, or B. only contains one node
        if(this.head == null || this.head.next == null) {
            // return false because there's
            return false;
        }

        // We have 2 ways to do this:
        // 1. while(runner.next.next != null){
        // 2. Two runners, and while runner.next != null
        // I'm gonna use the first method, because my edge cases already handle the issue of
        // "what if there is no runner.next?"
        var runner = this.head;

        // While the runner is not the second to last node
        while(runner.next.next != null) {
            // move the runner to the next node
            runner = runner.next;
        }

        // Breaking out of the while loop means runner is at the second to last node,
        // and we want that node's value, sooooo
        return runner.value;
    }

    hasLoop() {
        if(this.head == null || this.head.next == null){
            return false;
        }
        if(this.head.next == this.head){
            return true;
        }
        if(this.head.next.next == null && this.head.next != this.head){
            return false;
        }

        var runner = this.head.next
        var walker = this.head

        while(runner != walker && runner.next != null){
            runner = runner.next.next
            walker = walker.next
        }
        if(runner == walker){
            return true;
        }
        else return false;
    }
}

var list1 = new SLList();
list1.addToBack(1).addToBack(2).addToBack(3).addToBack(4);
list1.head.next.next.next.next = list1.head.next;

var list2 = new SLList();
list2.addToBack(1).addToBack(2).addToBack(3).addToBack(4);

console.log(list1.hasLoop()) // Should return true
console.log(list2.hasLoop()) // Should return false