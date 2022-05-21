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
 * @return {boolean}
 */
var isValidBST = function(tree, min = -Infinity, max = Infinity) {
  if (!tree) return true;
  if (tree.val <= min || tree.val >= max) return false;
  return (
    isValidBST(tree.left, min, tree.val) &&
    isValidBST(tree.right, tree.val, max)
  )
};