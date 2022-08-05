
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

// console.log(binaryTree)

const traverseRootFirst = (bTree, fn) => {
    if(!bTree) { return }
    fn(bTree.value)
    traverseRootFirst(bTree.left, fn)
    traverseRootFirst(bTree.right, fn)
}

const result1 = []
traverseRootFirst(binaryTree, (v) => {
    result1.push(v)
})
console.log(result1)