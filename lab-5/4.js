const event=require(`events`);

let myemitter=new events.Eventemitter()

myemitter.once('userdetails',(name,age)=>{
    console.log(`hello, ${name} you are ${age} years old`)
})

myemitter.emit("userdetails",'srinith',20)
