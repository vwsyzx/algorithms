const array = [2,5,0,7,9,1,3,6,12,45,67,98,24,42,61,75,23,53,20,21,6,3,3,3,0,0]

function bobbleSort(array){
    let count = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count+=1
            if(array[j+1] < array[j]){
                let term = array[j+1]
                array[j+1] = array[j]
                array[j] = term
            }
        }
    }
    
    console.log(array, count)
}
bobbleSort(array) // O(n*n)