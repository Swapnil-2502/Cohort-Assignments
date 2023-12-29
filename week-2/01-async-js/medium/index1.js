// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

const filePath = 'week-2/01-async-js/medium/text.txt'

fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
        console.error('Error reading this file',err);
        return
    }
    console.log(data)
    const cleanedContent = data.replace(/\s+/g, ' ');

    fs.writeFile(filePath,cleanedContent,'utf8',(error)=>{
        if(error){
            console.error('Error reading this file',error);
        return
        }

        console.log('File cleaned and updated successfully!');
    })

    console.log(data)
})