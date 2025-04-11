const fsystem = require("fs"); // fs  - file system module ---  node js built in modules


// fsystem.mkdirSync("images")
// fsystem.mkdirSync("botos")
// fsystem.mkdirSync("scripts")

// fsystem.writeFileSync("notes.txt", "This is a note file created by node.js")
// fsystem.writeFileSync("images/icon.svg", `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="check" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path id="primary" d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z" style="fill: rgb(0, 0, 0);"></path></svg>`)


// fsystem.rmSync("notes.txt");

fsystem.re

for(let studeCount = 1; studeCount < 5000; studeCount++){
    fsystem.writeFileSync(`report${studeCount}.txt`, `This is student number ${studeCount + 1}\n report card \n they have scrored 70% in math \n they have scored 80% in english \n they have scored 90% in science \n they have scored 60% in hindi \n they have scored 50% in history \n they have scored 40% in geography \n they have scored 30% in computer \n they have scored 20% in physical education`)
}