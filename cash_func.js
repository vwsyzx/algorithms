function cash(func){
    let cash = {}
    return function (prop){
        if(cash[prop]){
            console.log('From Cash', cash[prop])
        }
        else{
            const result = func(prop)
            cash[prop] = result
            console.log('Just Called: ', result)
        }
    }
}

function factor(num){
    if(num>1){
        num = num * factor(num-1)
    }
    return num
}

const newFunc = cash(factor)

newFunc(5)
newFunc(5)
newFunc(5)
newFunc(4)
newFunc(4)
newFunc(4)
newFunc(5)