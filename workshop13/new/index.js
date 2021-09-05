const cron = require("node-cron");
let shell= require("shelljs");


cron.schedule("* * * * * *" , function(){
    console.log("Scheduler running...");
    if(shell.exec("node new/SayHello.js").code !==0){
        console.log("something went wrong");
    }
})