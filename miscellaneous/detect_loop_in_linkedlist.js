class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAHead(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    insertAtTail(value) {
        let newNode = new Node(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    insertAfter(value, node) {

    }
    insertBefore(value, node) {

    }
    print() {
        let currentNode = this.head;
        let str = '';
        while (currentNode) {
            str = str + ` => ${currentNode.value}`;
            currentNode = currentNode.next;
        }
        console.log(`LinkedList : ${str}`);
    }
}

// Craete an instance and insert the values in linked list
const list1 = new LinkedList();
list1.insertAHead(2);
list1.insertAHead(3);
list1.insertAHead(4);
list1.insertAtTail(4);
list1.insertAtTail(5);
list1.insertAtTail(6);
list1.insertAtTail(7);
console.log(list1);
list1.print()

let findLoop = (list) => {
    let currentNode = list.head.next;
    while (currentNode) {
        if (currentNode.value && currentNode.next.value && (currentNode.value === list.head.value)) {
            console.log(`${currentNode.value} -- ${list.head.value}`);
            console.log(`Loop`);
        }
        currentNode = currentNode.next;
    }
}

findLoop(list1);



console.log("break");
