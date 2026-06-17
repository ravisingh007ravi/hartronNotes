const data = [
    {name:'a'},
    {name:'b'},
    {name:'c'},
    {name:'d'},
]

 const res = data.map((v,i)=>(
   ` <h1>Name ${v.name}</h1>`
 ))

 console.log(res)