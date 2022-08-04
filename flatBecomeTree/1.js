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
    arr.shift()
    const tree = {}
    const queue = [...arr]
    while(queue.length > 0) {
        const item = queue.shift()
        console.log('queue:', queue)
    }
    console.log('arr:', arr)
}

array2tree(array)
console.log('array:', array)
