const fs = require('fs')

const filepath = 'week-2/01-async-js/easy/text.txt'

fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
        console.error('Error reading this file',err);
        return
    }

    console.log("File contents => ",data)
})

