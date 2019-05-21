const weather = (address,callback)=>{
    setTimeout(()=>{
        const data = {
            location = 'pp',
        }
        callback(data);
    },2000);
}

weather('sth',(data)=>{
    console.log(data);
})