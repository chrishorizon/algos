class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        // return true if SLStack is empty
        // return false if SLStack is not empty
        return this.head == null;
    }

    size() {
        // return length of SLStack
        let counter = 1;
        if (this.head == null){
            return 0;
        } else if(this.head.next == null){
            return 1;
        } else {
            let runner = this.head;
            while(runner.next != null){
                runner = runner.next;
                counter++;
            }
        }
        return counter;
    }

    push(newVal) {
        // push newVal to top of stack
        let newNode = new Node(newVal);
        if(this.isEmpty()){
            return this.head = newNode;
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        return runner.next = newNode;
    }

    pop() {
        // remove and return data at top of stack
        let poppedNode;
        if(this.isEmpty()){
            return null;
        }
        if (this.head.next == null){
            poppedNode = this.head;
            this.head = null;
            return poppedNode.data;
        }
        let pointer = this.head;
        while(pointer.next.next != null){
            pointer = pointer.next;
        }
        poppedNode = pointer.next;
        pointer.next = null;
        return poppedNode.data;
    }

    peek() {
        // return data at top of stack without removing
        if(this.isEmpty()){
            return null;
        }
        if(this.head.next == null){
            return this.head.data;
        }
        let pointer = this.head;
        while(pointer.next != null){
            pointer = pointer.next;
        }
        return pointer.data;
    }

    // EXTRA
    contains(value) {
        // return true if SLStack contains value
        // return false if SLStack does not contain value
        if(this.isEmpty()){
            return false;
        }
        let pointer = this.head;
        while(pointer != null){
            if (pointer.data === value){
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    // EXTRA
    print() {
        // print out the values of the SLStack
        if(this.isEmpty()){
            return null;
        }
        let pointer = this.head;
        while(pointer.next != null){
            pointer = pointer.next;
            console.log(pointer.data)
        }
    }
}

let newStack = new SLStack();

newStack.push(5);
newStack.push(2);
newStack.push(8);
newStack.push(10);
newStack.print();