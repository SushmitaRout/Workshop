const cron = require('node-cron')
const shell = require('shelljs')
const fs = require('fs');


 function addfile(){
 return fs.appendFileSync('wrkshp13/wksp.txt',' * Workshop13 *');
  }


try{
    cron.schedule("* * * * * *", function(){
        addfile()
    })
}
catch(error){
console.log(error)
}
 