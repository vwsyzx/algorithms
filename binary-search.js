const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]
let num = 26
function linearSearch(array, item){
    if(array.length >= item){
        let count = 0
        const start = Date.now()

        for (let i = 0; i < array.length; i++) {
            count+=1
            if(array[i] === item){
                console.log('found: ', array[i], 'linear Iter: ', count)
            }
        }
    }
}
linearSearch(array, num)  // O(n)

function binarySearch(array, item, start, end, found, count, time){
    if(array.length >= item){
        let middle = Math.floor((start+end)/2)
        count+=1
        if(item === array[middle] || item === array[start] || item === array[end]){
            found = true
            console.log('found: ', item, ' iterations: ', count)
            console.log('End: ', Date.now() - time)
        }
        else if(item > array[middle]){
            start = middle
            middle = Math.floor((start+end)/2)
            binarySearch(array, item, start, end, found, count, time)
        }
        else if(item < array[middle]){
            end = middle
            middle = Math.floor((start+end)/2)
            binarySearch(array, item, start, end, found, count, time)
        }     
    }
    else{
        console.log('oops!')
    }
}
binarySearch(array, num, 0, array.length-1, false, 0, Date.now())  // O(logN)


function binSearch(array, item){
    const start = Date.now()
    if(array.length >= item){
        let count = 0
        let start = 0
        let end = array.length-1
        let middle = Math.floor((start+end)/2)
        let found = false

        while(!found){
            count+=1
            if(item === array[middle] || item === array[start] || item === array[end]){
                found = true
                console.log('elem: ', item, ' iterations: ', count)
            }
            else if(array[middle] > item){
                end = middle
                middle = Math.floor((start+end)/2)

            }
            else if(array[middle] < item){
                start = middle
                middle = Math.floor((start+end)/2)
            }
        }
    }
    else{
        console.log('oops!')
    }
    console.log('End: ', Date.now() - start)
}

binSearch(array, num)  // O(logN)