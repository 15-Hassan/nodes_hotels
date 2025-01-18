var fs = require('fs'); // create a file and write the message inside
var os = require('os');  // tell the os
var user = os.userInfo();
console.log(user)
console.log(user.username);
fs.appendFile('gretting.txt', 'Hi' + user.username + '!\n',  ()=>{
    console.log('File is created');
})

console.log(fs) // yh check krta hn kia kia kam krskhteh hn
console.log(os) // yh check kia kia kam krskhte hn 