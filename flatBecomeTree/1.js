const array = [
    { id: 9, name: "前端基础设施组", parent: 8 },
    { id: 10, name: "前端业务组", parent: 8 },
    { id: 7, name: "后端开发部门", parent: 5 },
    { id: 8, name: "前端开发部门", parent: 5 },
    { id: 1, name: "CEO", parent: null },
    { id: 2, name: "运营部", parent: 1 },
    { id: 3, name: "财务部", parent: 1 },
    { id: 4, name: "人事部", parent: 1 },
    { id: 5, name: "技术部", parent: 1 },
    { id: 6, name: "产品部", parent: 1 }
];

const array2tree = arr => {
    const tree = {}
    const queue = [...arr]
    while (queue.length > 0) {
        const item = queue.shift()
        if (insert(tree, item)) {
            console.log(`插入成功 ${item.name}`)
        } else {
            console.log(`插入失败，放到队尾 ${item.name}，继续看下一个`)
            queue.push(item)
        }
    }
    return tree
}

const insert = (tree, item) => {
    // 如果是顶层节点
    if (item.parent === null) {
        const newNode = createNode(item)
        Object.assign(tree, newNode)
        return true;
    } else {
        const parentNode = findNodeById(tree, item.parent)
        if(parentNode) {
            const newNode = createNode(item)
            parentNode.children.push(newNode)
            return true
        }else{
            return false
        }
    }
}

const findNodeById = (tree, id) => {
    if(tree.id === id) {
        return tree
    } else if(tree.children) {
        const { children } = tree
        for(let i=0; i<children.length; i++) {
            const result = findNodeById(children[i], id)
            if(result) return result
        }
    } else {
        return null
    }
}

const createNode = item => {
    return {
        ...item,
        children: []
    }
}

console.log(array2tree(array))
