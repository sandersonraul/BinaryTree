class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(data) {
    this.root = new Node(data)
    this.count = 1
  }

  size() {
    return this.count 
  }

  insert(data){
    this.count ++

    const newNode = new Node(data)

    const search = function(node) {
      if(data < node.data) {
        if (!node.left) {
          node.left = newNode
        } else {
          search(node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode
        } else {
          search(node.right)
        }
      }
    }

    search(this.root)
  }

  delete(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
  
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  
  countLeafs(node) {
    if(!node){
      return 0
    }
    if(!node.left && !node.right){
      return 1
    } else {
      return this.countLeafs(node.left) + this.countLeafs(node.right)
    }
  }
}

// const tree = new Tree(15)

// tree.insert(3)
// tree.insert(36)
// tree.insert(2)
// tree.insert(12)
// tree.insert(28)
// tree.insert(39)

// console.log(JSON.stringify(tree, null, 2))
// console.log(tree.countLeafs(tree.root))