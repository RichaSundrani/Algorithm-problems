class LinkedList {
    constructor() {
        this.head = null; // first element/node of the list
        this.tail = null; // last element/node of the list 
    }
    // Add nodes in the list from the end
    append(value) {
        const newNode = { value: value, next: null };
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }
    // Add nodes in the list from the start
    prepend(value) {
        const newNode = { value: value, next: this.head }
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }
    // Delete the element 
    delete(value) {
        if (!this.head) {
            return;
        }
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next === value) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    // search the first occurance of the element for given value
    search(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
   // insert node at particular location
    insertAfter(value, afterValue) {
        const existNode = this.search(afterValue);
        if(existNode){
            const newNode = {value: value, next: existNode.next};
            existNode.next = newNode;
        }
    }
    // convert the list to array for easy access
    toArray() {
        const elements = [];
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    }

}

const linkedList1 = new LinkedList();

linkedList1.append('one');
linkedList1.append('two');
linkedList1.append('three');
linkedList1.append('four');
linkedList1.append('Richard');
linkedList1.append('Kdg');
linkedList1.append('Nimmu');
linkedList1.append('Richard');
linkedList1.append('Nimmu');
linkedList1.append('Nimmu');

console.log(linkedList1.toArray());

linkedList1.delete("Nimmu");

console.log(linkedList1.toArray());

console.log(linkedList1.search("Richard"));

linkedList1.insertAfter("Five", "one");

console.log(linkedList1.toArray());
