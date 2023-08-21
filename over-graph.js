const graph = {
    a: [{place: 'b', dist: 3}, {place: 'c', dist: 1}],
    b: [{place: 'e', dist: 2}, {place: 'j', dist: 5}],
    e: [{place: 'x', dist: 1}, {place: 'j', dist: 4}],
    x: [{place: 'j', dist: 1}],
    j: [{place: 'g', dist: 2}, 'g'],
    c: [{place: 'd', dist: 2}, {place: 'f', dist: 1}],
    d: [{place: 'j', dist: 3}],
    f: [{place: 'k', dist: 4}],
    k: [{place: 'j', dist: 3}],
    g: []
}

function over(graph, start, end){
    let way = 'a'
    let totalDist = 0
    let path = {}

    start.map(item => {
        let queue = [item] 
        while(queue.length>0){

            let current = queue.pop()
            way += current.place
            totalDist += current.dist

            if(graph[current.place].includes(end)){
                way+=end
                totalDist+=2
                path[way] = totalDist
                if(graph[item.place].length>=2){
                    way = 'a' + item.place
                    totalDist = item.dist
                }
                else{
                    way = 'a'
                    totalDist = 0
                }
            }
            else{
                queue = [...queue, ...graph[current.place]]
            }
        }
    })
    console.log(path)
} // Unfinished!