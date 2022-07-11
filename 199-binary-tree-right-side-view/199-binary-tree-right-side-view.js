/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
breadth first search
if last child added at that depth,
add its value to the results array


*/
var rightSideView = function(root) {
  const queue = [];
  const result = [];
  let currentNodeValue;
  if (root){queue.unshift({node: root, depth: 0})}
  while (queue.length){
    ({node: node, node: {val: currentNodeValue}, depth} = queue.pop());
    
    if (node.left){
      queue.unshift({node: node.left, depth: depth+1});
    }
    if (node.right){
      queue.unshift({node: node.right, depth: depth+1});
    }
    if (queue[queue.length-1]?.depth > depth || !queue[0]){
        result.push(currentNodeValue)
        }
  }
  return result;
};