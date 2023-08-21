const tree = [
    {
        v: 0,
        c: [
            {
                v: 5,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 5,
                            },
                            {
                                v: 5,
                            }
                        ]
                    }
                ]
            },
            {
                v: 6,
                c: [
                    {
                        v: 5,
                    },
                    {
                        v: 5,
                    },
                    {
                        v: 5,
                    }
                ]
            },
            {
                v: 1,
                c: [
                    {
                        v: 5,
                    },
                    {
                        v: 5,
                    }
                ]
            },
            {
                v: 8,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 4,
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

function overTreeQueue(treeObj){ //  iter  queue
    let sum = 0
    let queue = []
    queue.push(treeObj)
    while(queue.length>0){
        let current = queue.shift()
        sum += current.v
        if(current.c){
            queue = [...queue, ...current.c]
        }
    }
    console.log('QUEUE: ', sum)
}
overTreeQueue(tree[0])

function over(tree){
    let sum = 0
    tree.map(item => {
        sum+=item.v
        if(item.c){
            sum += over([...item.c])
        }
    })
    return sum
}
console.log("RECURSIVE", over(tree))

function overTreeStack(tree_obj){
    let sum = 0
    stack = [tree_obj]
    while(stack.length>0){
        let current = stack.pop()
        sum += current.v
        if(current.c){
            stack = [...stack, ...current.c]
        }
    }
    console.log('STACK:', sum)
}
overTreeStack(tree[0])