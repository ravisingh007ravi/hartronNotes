const a = ()=> console.log('a')
const b = ()=> console.log('b')
const c = ()=> console.log('c')


a()
setTimeout(()=>{
    b()
},0.0000001)
c()