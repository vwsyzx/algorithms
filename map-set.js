const arr1 = [1,2,3,4,5,6,8,3,2]

const newArr1 = new Set()
newArr1.add(1)
newArr1.add(2)
newArr1.add(1)
newArr1.forEach(elem => console.log(elem))
console.log(newArr1)

const newMap = new Map()

function getAll(){
    console.log('hii')
}
newMap[getAll] = 'islom'

console.log(newMap[getAll])