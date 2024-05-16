function evaluateTree(root: TreeNode): boolean {
    if(root.val === 0) return false;
    if(root.val === 1) return true;
    if(root.val === 2) {
        const leftBoolValue = evaluateTree(root.left!);
        const rightBoolValue = evaluateTree(root.right!);
        return (leftBoolValue || rightBoolValue);
    }
    const leftBoolValue = evaluateTree(root.left!);
    const rightBoolValue = evaluateTree(root.right!);
    return (leftBoolValue && rightBoolValue);
};