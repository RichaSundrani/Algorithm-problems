class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value, parentNode = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
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
                console.log(`Duplicate: ${value}`);
            }
        }
    }
    dfs(distance = 0, startNode = this.root, depth = 0) {
        if (depth === distance) {
            console.log(startNode.value);
        }
        depth++;
        if (startNode.left !== null) {
            this.dfs(distance, startNode.left, depth);
        }
        if (startNode.right !== null) {
            this.dfs(distance, startNode.right, depth);
        }
        depth = depth = distance; 
    }
};

let tree1 = new BinarySearchTree();
tree1.insert(15);
tree1.insert(20);
tree1.insert(10);
tree1.insert(8);
tree1.insert(5);
tree1.insert(9);
tree1.insert(12);
tree1.insert(11);
tree1.insert(13);
tree1.insert(18);
tree1.insert(16);
tree1.insert(19);
tree1.insert(25);
tree1.insert(22);
tree1.insert(26);
// console.log(tree1);
tree1.dfs(2)
console.log("Break");