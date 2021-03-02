
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

console.log(root);