// // console.log("hello");
// // setTimeout(() => {
// //     console.log("hi");
// // },2000);
// // setTimeout(() => {
// //     console.log("hi again");
    
// // }, 0);
// // console.log("world");

// const https = require("https");
// const url = 'https://api.darksky.net/forecast/3a91ea53a6579bc0591154e863700d57/37.8267,-122.4233';
// const request = https.request(url,(Response) => {
//     let weather = '';
//     Response.on('data',(datas) => {
//         weather += datas.toString();
//     })
//     Response.on('end',() => {
//         const data = JSON.parse(weather);
//         console.log('the temperature is :',data.currently.temperature);
//     })
// });
// request.end();

const request = require('request');
const url = 'https://api.darksky.net/forecast/3a91ea53a6579bc0591154e863700d57/37.8267,-122.4233';
request({url: url,json:true},(error, response)=>{
    if(error){
        console.log("Can not connect to the api");
        console.log("Can not connect to the location");
    }else{
        console.log("the temperature is: ",response.body.currently.temperature);
    }
});


