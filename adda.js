function adda(text){
    text = text.replace(/[^a-zа-яё]/gi, '') // removes everything excluding words
    if(text.length % 2 === 0){
        let firstPart = text.slice(0, text.length/2)
        let secondPart = text.slice(text.length/2, text.length)
        secondPart = secondPart.split('').reverse().join('')
        //                            < split >   -> to array
        //                          < reverse >   -> turns over an array
        //                             < join >   -> connects elements in array
        // < text.replace(/[^a-zа-яё]/gi, '') >   -> removes everything excluding words
        if(firstPart === secondPart){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
    else{
        let firstPart = text.slice(0, Math.floor(text.length/2))
        let secondPart = text.slice(Math.floor(text.length/2)+1, text.length)
        secondPart = secondPart.split('').reverse().join('')

        if(firstPart === secondPart){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
}

adda('is si !?')

//   O(1)