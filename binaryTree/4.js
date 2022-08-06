
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
    console.log(123)
    const stack = []
    let current = bTree
    while (true) { // while 代替goto
        while (current) {
            stack.push(current)
            current = current.left
        }
        if (stack.length > 0) {
            current = stack.pop()
            fn(current.value)
            current = current.right
            continue
        } else {
            break
        }
    }

}

const result1 = []
traverseRootMiddle(binaryTree, (v) => {
    result1.push(v)
})
console.log(result1)