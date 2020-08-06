class BinaryNode {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  // a node has data, left, and right pointers
  // left and right are intialized as null
  }
}
class BinaryTree {
  constructor(){
    this.root = null;
      // when a new Tree is made, it has a root property
  }
  insert(data){
    const newNode = new BinaryNode(data)
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let walker = this.root
    while(walker){
      if(data < walker.data) {
        if(!walker.left) {
          walker.left = newNode;
          return this;
        } else {
          walker = walker.left
        }
      } else if (data >= walker.data) {
        if (!walker.right) {
          walker.right = newNode
          return this
        } else {
          walker = walker.right
        }
      }
    }
      // add a new Node to the tree, with data as the Node's data
      // if the data is already in the tree, do not insert it
  }
  search(val){
  
      // search the Tree for a node with the given value
      // if the node exists, return it
      // if the node doesn't exist, return false
      
  if(!this.root){
          return false;
      }
      let walker = this.root;
      while(walker){
          if(val < walker.data){
              walker = walker.left;
          }else if(val > walker.data){
              walker = walker.right
          }else{
              return true;
          }
      }
      return false;
      
  }
  size(node){
      // calculate the number of nodes in the tree, starting from the given node
      let count = 0;
        function rSize(node){
            if(node){
                count++;
                rSize(node.left);
                rSize(node.right);
            }
        }
        rSize(node)
        return count;
  }
  getMax(){
      // return the maximum value stored in the tree
      if(!this.root){
            return null;
        }
        let walker = this.root;
        while(walker.right){
            walker = walker.right;
        }
        return walker.data;
  }
  height(node=this.root){
        let maxHeight = 0;
        function rHeight(node, height=1){
            if(node){
                if(height > maxHeight){
                    maxHeight = height;
                }
                rHeight(node.left, height+1);
                rHeight(node.right, height+1);
            }
        }
        rHeight(node);
        return maxHeight;
    }
    
  isBalanced(node){
      // return true or false based on whether the sub-tree starting at the given node is balanced
      // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
      // A tree is balanced if all branches end within one level of each other.
  }
}

module.exports = {
  BinaryNode,
  BinaryTree
}
let groot = new BinaryTree()
console.log('initialized binary tree')
console.log(groot)
groot.insert(5)
console.log('inserted root node value')
console.log(groot)
groot.insert(3)
console.log('added lesser value that will become left node of root')
console.log(groot)
// groot.insert(7)
// console.log('added greater value that will become right node of root')
// console.log(groot)
// groot.insert(6)
// console.log(groot)
// groot.insert(6)
// console.log(groot)
// groot.insert(4)
// console.log(groot.root.left)
// console.log(groot.root.right)
// console.log(groot.root.right.left)
