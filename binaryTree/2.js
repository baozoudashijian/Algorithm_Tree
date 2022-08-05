
const node = (value, left, right) => {
    return {
        value,
        left,
        right
    }
}

const binaryTree = 
node("A",
    node("B", node("D"), undefined),
    node("C",
        node("E", undefined, node("G")),
        node("F", node("H"), node("J"))
    )
)

const traverseRootMiddle = (bTree, fn) => {
    if(!bTree) { return }
    traverseRootMiddle(bTree.left, fn)
    fn(bTree.value)
    traverseRootMiddle(bTree.right, fn)
}

const result1 = []
traverseRootMiddle(binaryTree, (v) => {
    result1.push(v)
})
console.log(result1)