// let arr = [20, 2, 2]

// // Higher Order Function work only Array 
// const MapFunction = arr.map((v) => { return { Name: v } })
// console.log(MapFunction)

// const filterFunction = arr.filter((v) => v > 5)
// console.log(filterFunction)

// const findFunction = arr.find((v) => v > 5)
// console.log(findFunction)

// const reduceFunction = arr.reduce((sum, value) => { return sum + value }, 0)
// console.log(reduceFunction)

function a(){
    console.log('start')
}
a()

setTimeout(()=>{
    function a(){
        console.log('a')
    }
    a()
},1000)


setTimeout(()=>{
    function a(){
        console.log('b')
    }
    a()
},500)


function b(){
    console.log('c')
}
b()

