const array = [2,5,0,7,9,1,3,6,12,45,67,98,24,42,61,75,23,53,20,21,6,3,3,3,0]
const just = [2,5,0,7,9,1,3,6,12,45,67,98,24,42,61,75,23,53,20,21,6,3,3,3,0,0]

function newSearch(array){
    const start = Date.now()
    let count = 0
    for (let i = 0; i < array.length; i++) {
        let min = i
        for (let j = i+1; j < array.length; j++) {
            count+=1
            if(array[j] < array[min]){
                min = j
            }
        }
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
    console.log(array, count, Date.now() - start)
}


function select(array, start, count){
    if(start < array.length-1){
        let min = start
        for (let i = start; i < array.length; i++) {
            count+=1
            if(array[i+1] < array[min]){
                min = i+1
            }
        }
        let elem = array[min]
        array[min] = array[start]
        array[start] = elem

        select(array, start+1, count)
    }
    else{
        console.log(array, count)
    }
}
select(array, 0, 0)