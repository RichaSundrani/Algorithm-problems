class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value, parentNode = this.root) {
        if (parentNode === null) {
            let newNode = new Node(value);
            this.root = newNode;
        } else {
            if (value > parentNode.value) {
                if (parentNode.right === null) {
                    parentNode.right = new Node(value);
                } else {
                    this.insert(value, parentNode.right);
                }
            } else if (value < parentNode.value) {
                if (parentNode.left === null) {
                    parentNode.left = new Node(value);
                } else {
                    this.insert(value, parentNode.left);
                }
            } else {
                console.log(`attempting to add duplicate node : ${value}`);
            }
        }
    }

    // Tree traversal 
    printBFS(root) {
        const queue = [root];
        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            console.log(currentNode.value); // Call the callback method on node
        }
    }

    bfs(searchTerm, startNode = this.root) {
        const queue = [startNode];
        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode.value === searchTerm) {
                return currentNode;
            }
            if ((currentNode.left !== null) && (currentNode.value > searchTerm)) {
                queue.push(currentNode.left);
            }
            if ((currentNode.right !== null) && (currentNode.value < searchTerm)) {
                queue.push(currentNode.right);
            }
            // console.log(currentNode.value); // Call the callback method on node
        }
    }

    findSumNodes = (targetSum) => {
        const queue = [this.root];
        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            // console.log(currentNode.value); // Call the callback method on node
            const foundNode = tree.bfs(targetSum - currentNode.value);
            if (foundNode) {
                console.log(`Pair : ${currentNode.value} ${foundNode.value}`);
                return [currentNode, foundNode];
            }
        }
    }

    printDFSPreOrder = (startNode = this.root) => {
        const currentNode = startNode;
        console.log(currentNode.value); // Call the callback method on node
        if (currentNode.left !== null) {
            this.printDFSPreOrder(currentNode.left);
        }
        if (currentNode.right !== null) {
            this.printDFSPreOrder(currentNode.right);
        }
    }

    printDFSPostOrder = (startNode = this.root) => {
        const currentNode = startNode;
        if (currentNode.left !== null) {
            this.printDFSPostOrder(currentNode.left);
        }
        if (currentNode.right !== null) {
            this.printDFSPostOrder(currentNode.right);
        }
        console.log(currentNode.value); // Call the callback method on node
    }

};





module.exports = BinaryTree;