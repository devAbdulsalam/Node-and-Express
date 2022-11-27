// filesystem
const { create } = require("domain")
const fs = require("fs")

// readfile is an asyc function
fs.readFile(("./docs/blog.txt"), (err, data) =>{
    if(err){
        console.log(err)
    }
    // console.log(data) this return buffer
    console.log(data.toString()) //this return string
})
// console.log("this last line")


// //writefile
// fs.writeFile(("./docs/blog.txt"),("hello my people"), () =>{
//     console.log("file was written")
// })

// // writefile
// fs.writeFile(("./docs/blog2.txt"),("hello my people"), () =>{
//     console.log("file 2 was created")
// })


// // directories

// //delete or create assets
// if(!fs.existsSync("./assets")){
//     fs.mkdir("./assets", (err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log("assets created")
//     })
// }else{
//     fs.rmdir("./assets", (err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log("assets deleted")
//     })
// }



if(!fs.existsSync("./deletefile.txt")){
    fs.unlink("./docs/deletefile.txt", (err) =>{
        if(err){
            console.log(err)
        }
        console.log("file is deleted")
    })
}