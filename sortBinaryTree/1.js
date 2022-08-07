
const completeBinTree = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const cbt = completeBinTree

const traverse = (tree, fn) => {
    const t = (tree, i, fn) => {
        if(tree === undefined || tree[i] === undefined) return
        t(tree, 2*i+1, fn)
        fn(tree[i])
        t(tree, 2*i+2, fn)
    }
    t(tree, 0, fn)
}

const result = []
traverse(cbt, (value) => {
    result.push(value)
})
console.log(result)