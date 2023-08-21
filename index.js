const obj = {
	"a": "1",
	"b": "2",
	"c": "3",
	"d": "4",
	"e": "5",
	"f": "6",
	"g": "7",
	"h": "8",
	"i": "9",
	"j": "10",
	"k": "11",
	"l": "12",
	"m": "13",
	"n": "14",
	"o": "15",
	"p": "16",
	"q": "17",
	"r": "18",
	"s": "19",
	"t": "20",
	"u": "21",
	"v": "22",
	"w": "23",
	"x": "24",
	"y": "25",
	"z": "26"
}

let arr = [[], [], []]

function call(name){
    let sum = 0
    let sum2 = 0
    const elem = []

    for (let i = 0; i < name.length; i++) {
        sum2 += Number(obj[`${name[i]}`])
    }
    arr[sum2%arr.length] = [...arr[sum2%arr.length], name]

    arr.map(item => {
        if(item.length >= 4){
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    elem.push(arr[i][j])
                }
            }
            arr = new Array(arr.length*2).fill([])
            for (let i = 0; i < elem.length; i++) {
                for (let j = 0; j < elem[i].length; j++) {
                    sum += Number(obj[`${elem[i][j]}`])
                    
                }
                arr[sum%arr.length] = [...arr[sum%arr.length], elem[i]]
                sum = 0
            }
        }
    })
}
call('islom')
call('john')
call('alex')
call('pedro')
call('james')
call('tommy')
call('freed')
call('jessy')
call('william')
call('jimmy')
call('arthur')
call('danny')
call('white')
call('karma')
call('gride')
call('pedya')
call('feed')
call('messi')
call('ronaldo')
call('elon')
call('beyzos')
call('jordan')
call('anna')
call('kiril')
call('lola')
call('cillian')
call('lana')

const array = [
    'james',   'pedya',   'jessy',
    'william', 'ronaldo', 'pedro',
    'danny',   'tommy',   'freed',
    'arthur',  'white',   'messi',
    'alex',    'gride',   'islom',
    'karma',   'feed',    'beyzos',
    'jimmy',   'elon',    'john', 'jordan', 'anna', 'lola', 'cillian', 'lana'
  ]

function findNew(name){
    const start = Date.now()
    let count = 0
    for (let i = 0; i < array.length; i++) {
        count+=1
        if(array[i] === name){
            console.log(name, count)
        }
    }
    console.log('End', Date.now() - start)
}
findNew('lana')

function find(name){
    const start = Date.now()
    let count = 0
    let sum = 0

    for (let i = 0; i < name.length; i++) {
        sum += Number(obj[`${name[i]}`])
    }
    arr[sum%arr.length].map(item => {
        count+=1
        if(item === name){
            console.log(item, count)
        }
    })
    console.log('End', Date.now() - start)
}

find('lana')