const fs = require('fs')

const filepath = 'week-2/01-async-js/easy/text.txt'
const dataTowrite = "Hello fucking world";

fs.writeFile(filepath,dataTowrite,'utf8',(err)=>{
    if(err){
        console.error('Error reading this file',err);
        return
    }
    console.log("Write Operation done!!")
    // console.log("File contents => ",data)
})

