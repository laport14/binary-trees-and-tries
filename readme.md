![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Trees 
![](https://media.giphy.com/media/5mWKEFFh5BGnBhoGn0/giphy.gif)
### Lots of different applications!
- HTML DOM 
- Network Routing
- Artificial Intelligence
- Our folder structure
- JSON


**Minimax tree**
Interested in trees as they pertain to AI? check out Minimax. If you ever built Tic Tac Toe this would be your ideal opponent.

https://en.wikipedia.org/wiki/Minimax

If you look up trees on Wikipedia you get a huge list of examples of different trees. We're going to focus on Binary Trees and Binary Search Trees

# Binary Tree
- A binary tree is a rooted tree that is also an ordered tree (a.k.a. plane tree) in which every node has at most two children
- There are many different types of Binary trees

# Binary Search Tree (BST)
- Special version of a binary tree 
- Works for sorted data, or sortable data
- If we take any node on the tree. The numbers to the left of it will be less than that number(node). Any numbers to the right will be greater.

## Objectives
- Define what a tree is 
- Implement `insert()` and `find()`
- Look at different ways to traverse trees

#### Basic setup
Let’s create a basic search class to implement our code. You already have this starter code included, so fork and clone this repo.

```
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


```

We are creating a bunch of nodes, but what we really need is to instantiate a `insert()` to make this a little easier for us.

### Inserting a node
- Create a new Node 
- Starting at the root
 	- Check if there is a root, if not - the root now becomes that new node!
 	- If there is a root, check if the value of the new node is greater than or less than the value of the root
 	- If it is greater
 		- Check to see if there is a node to the right
 		- If there is, move to that node and repeat these steps
 		- If there is not, add that node as the right property
 	- If it is less
 		- Check to see if there is a node to the left
 		- If there is, move to that node and repeat these steps
 		- If there is not, add that node as the left property
- Return the entire tree at the end

#### Try it out.
Create an `insert()`  that utilized the `BinarySearchTree()` we created.

## Finding a node 
 **Implement your own binary search tree `find()`** 
( 5 mins )

Very similar to the way we just did `insert()`.


## Tree traversal
There are so many ways we can traverse a tree, but how can we go about it in an organized way.

There are two main approaches. Breadth first or debth first. **Then additionally there are subsection for Depth First Search (DFS)**

The different approaches for **DFS** include.
 - In order
 - Pre order
 - Post order
Different ways to search depending on our data.

# Breadth first search
Searching horizontally.

### Implementation of Breadth first search
**Iteratively**
- Create a queue (this can be an array) and a variable to store the values of nodes vidited.
- Place the root node in the queue
- Loop as long as there is anything in the queue
	- Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
	- If there is a left property on the node dequeued - add it to the queue
	- If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

If that sounds confusing.. well it kinda is. 
We take andantage of a queue to store our values.
It's like a todo list. Don't forget this. First things in - first things out.



#### Visualize it here... 
https://visualgo.net/en/bst


## Implementation of Depth first search
##### **PreOrder**
Basically we are visiting a node and then recursively traversing all of the left side then all of the right side.
Steps... 
- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
	- Push the value of the node to the variable that stores the values
	- If the node has a left property, call the helper function with the left proptery on the node
	- If the node has a right property, call the helper function with the right property on the node.
- Invoke the helper function with the current variable
- Return the array of values


You could then write new methods called
`DFSPreOrder()`
`DFSInOrder()`
`DFSPostOrder()`
Which would implement **DFS** with those particular priorities.




## Big O of BST 
### Insertion - **O(log n)**
### Searching - **O(log n)**

But ... Not guaranteed....

- For example if you have a completeley one sided tree then that is going to O(n) time.

## Questions
**Why do we traverse trees and how is this different to the `find()` ?**
In computer science, tree traversal (also known as tree search) is a form of graph traversal and refers to the process of visiting (checking and/or updating) each node in a tree data structure, exactly once. Such traversals are classified by the order in which the nodes are visited. The following algorithms are described for a binary tree, but they may be generalized to other trees as well.

**Practical implemenation ?**

BST can be used for Huffman encoding which is used for media compression algorithms such as .jpeg, .mp3.
BST can be used to implement priority queue which in turn is used to manage bandwidth on network router.
BST can be used to implement Binary Space Partition which is required in computer graphics. 

also check out
http://guide.couchdb.org/draft/btree.html


## Resources!

### Helpful visualizations:

Binary Search Trees

https://www.cs.usfca.edu/~galles/visualization/BST.html

AVL Trees (Self-balancing)

https://www.cs.usfca.edu/~galles/visualization/AVLtree.html

Tries

https://www.cs.usfca.edu/~galles/visualization/Trie.html

#### Optional Trie Challenge

The "wordTrie-challenge" folder contains an optional challenge asking you to implement a search trie based on all the words in the English language. This is **optional and advanced**, but if you mastered building a binary tree, you should take on this challenge!

This project folder also contains automated tests that can be run in the same way.

## Part 2: Self-Balancing Binary Tree Exercise

After viewing the second myGA module, Balancing a Binary Tree, you can complete the exercises in `AVLTree.js`. 

These exercises are also **optional and advanced content**.
