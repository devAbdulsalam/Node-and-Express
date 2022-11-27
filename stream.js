const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) =>{
//     console.log("----new chunk ----");
//  //   console.log(chunk);
//     console.log(chunk.toString());
// });

readStream.on('data', (chunk) =>{    
    writeStream.write("\n----new chunk ----\n");
    writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream)