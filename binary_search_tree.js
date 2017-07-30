'use strict';

class Node {
  constructor(key, val, parent) {
    this.key = key;
    this.val = val;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  isRoot(){
    return this.parent instanceof BinarySearchTree;
  }

  insert(key, val) {
    if (key === this.key) return false;
    if (key < this.key) {
      if (!this.left) {
        this.left = new Node(key, val, this);
        return true;
      }
      return this.left.insert(key, val);
    } else {
      if (!this.right) {
        this.right = new Node(key, val, this);
        return true;
      }
      return this.right.insert(key, val);
    }
  }

  get(key) {
    if (key === this.key) return this.val;
    if (key < this.key) {
      if (!this.left) return null;
      return this.left.get(key);
    } else {
      if (!this.right) return null;
      return this.right.get(key);
    }
  }

  update(key, val) {
    if (!this.key) return false;
    if (key === this.key) {
      this.val = val;
      return true;
    }
    if (key < this.key) {
      if (!this.left) return false;
      return this.left.update(key, val);
    }
    if (key > this.key && this.right) {
      if (!this.right) return false;
      return this.right.update(key, val);
    }
  }
  /**
   *                8
   *        4                 12
   *    2       6        10         14
   *  1   3   5   7    9    11   13    15
   */

  del(key) {
    if (key < this.key) return !!this.left && this.left.del(key);
    if (key > this.key) return !!this.right && this.right.del(key);
    if (!this.left && !this.right) {
      if(this.isRoot()){
        this.parent.root = null;
      } else {
        this.parent[this.parent.key > this.key ? 'left' : 'right'] = null;
      }
      this.key = null;
      this.val = null;
      return true;
    }
    if (this.right) {
      if (this.left) {
        let node = this.right;
        while(node.left) node = node.left;
        node.left = this.left;
        node.left.parent = node;
        this.right.parent = this.parent;
      }
      if(this.isRoot()){
        this.parent.root = this.right;
      } else {
        this.parent[this.parent.key > this.key ? 'left' : 'right'] = this.right;
      }
      this.key = null;
      this.val = null;
      return true;
    }
    if (this.left) {
      if(this.isRoot()){
        this.parent.root = this.left;
      } else {
        this.parent[this.parent.key > this.key ? 'left' : 'right'] = this.left;
      }
      this.key = null;
      this.val = null;
      return true;
    }
  }

  min() {
    if (!this.left) return this.val;
    return this.left.min();
  }

  max() {
    if (!this.right) return this.val;
    return this.right.max();
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, val) {
    if (!this.root) {
      this.root = new Node(key, val, this);
      return true;
    }
    return this.root.insert(key, val);
  }

  get(key) {
    if (!this.root) return null;
    return this.root.get(key);
  }

  update(key, val) {
    if (!this.root) return false;
    return this.root.update(key, val);
  }

  del(key) {
    if (!this.root) return false;
    return this.root.del(key);
  }

  min() {
    if (!this.root) return null;
    return this.root.min();
  }

  max() {
    if (!this.root) return null;
    return this.root.max();
  }
}

const bst = new BinarySearchTree();
[
  8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15
].forEach(i => bst.insert(i, i));

bst.del(8)

console.log(1)