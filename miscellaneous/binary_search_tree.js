/*
Write code to do an inorder BST traversal with recursion and without recursion. 
Explain in which case you would choose one implementation over the other. Explain the runtime of each.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    // add nodes to the tree
    insert(value, parentNode = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            if (parentNode.value < value) {
                if (parentNode.right === null) {
                    parentNode.right = new Node(value);
                } else {
                    this.insert(value, parentNode.right);
                }
            } else if (parentNode.value > value) {
                if (parentNode.left === null) {
                    parentNode.left = new Node(value);
                } else {
                    this.insert(value, parentNode.left);
                }
            } else {
                console.log(`Duplicate node detected : ${value}`);
            }
        }
    }
    // Traversing the tree 
    breadthFirstTraversal() {
        const queue = [this.root];
        while (queue.length != 0) {
            const currentNode = queue.shift();
            console.log(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }
    depthFirstTraveralPreOrder(startNode = this.root) {
        if (startNode) {
            console.log(startNode.value);
            if (startNode.left) {
                this.depthFirstTraveralPreOrder(startNode.left);
            }
            if (startNode.right) {
                this.depthFirstTraveralPreOrder(startNode.right);
            }
        } else {
            console.log("Empty tree")
        }
    }
    depthFirstTraveralPreOrder(startNode = this.root) {
        if (startNode) {
            if (startNode.left) {
                this.depthFirstTraveralPreOrder(startNode.left);
            }
            if (startNode.right) {
                this.depthFirstTraveralPreOrder(startNode.right);
            }
            console.log(startNode.value);
        } else {
            console.log("Empty tree")
        }
    }
    // Search tree 
    breadthFirstSearch(searchTerm, startNode = this.root) {
        const queue = [startNode];
        while (queue.length != 0) {
            const currentNode = queue.shift();
            if (currentNode.value === searchTerm) {
                return currentNode;
            } else {
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }
        return null;
    }

    
};

module.exports = BinaryTree;

