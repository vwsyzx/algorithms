const graph = {}
graph.a = {b: 3, c: 1}
graph.b = {f: 5, e: 2}
graph.e = {x: 1, j: 4}
graph.x = {j: 1}
graph.j = {g: 2}
graph.c = {d: 2, f: 1}
graph.d = {j: 3}
graph.f = {k: 4}
graph.k = {j: 3}
graph.g = {}


function dykstr(graph, start, end){
    const costs = {}
    const process = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if(node !== start){
            let value = graph[start][node]
            costs[node] = value || 100000000
        }
    })
    let node = findNodeLow(costs, process)
    
    while(node){
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor =>{
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]){
                costs[neighbor] = newCost
            }
        })
        process.push(node)
        node = findNodeLow(costs, process)
    }
    return costs
}

function findNodeLow(costs, process){
    let lowest = 100000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if(cost < lowest && !process.includes(node)){
            lowest = cost
            lowestNode = node
        }
    })
    return lowestNode
}
console.log(dykstr(graph, 'a', 'g'))