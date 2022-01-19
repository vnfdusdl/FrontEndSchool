const fs = require('fs');

fs.readFile('./user.csv', 'utf8', (err, csvdata) => {
        // console.log(err);
        csvdata.split('\r\n')
        .slice(1)
        .forEach((value)=>{
                [이름, 번호, 직업] = value;
                
                fs.mkdir(`./${이름}`, (err)=>{});

                userWriteData = `Username : ${이름}
                Identifier : ${번호}
                Job : ${직업}` 

                fs.writeFile(`./${이름}/userinfo.txt`, userWriteData, (err)=>{});
        });
});


// 준홍님 코드
const fs = require('fs'); 

fs.readFile('./username.csv', 'utf8', (err, data) => { 
  data 
    .split('\n') 
    .slice(1) 
    .map(v => v.split(', ')) 
    .forEach(([ username, identifier, job ]) => { 
      fs.mkdir(`./${username}`, (err) => { 
        if (err) console.log(err); 
      }); 
      const text = `Username : ${username}\nIdentifier : ${identifier}\nJob : ${job}`; 
      fs.writeFile(`./${username}/userinfo.txt`, text, (err) => { 
        if (err) console.log(err); 
      }); 
    }); 

  if (err) console.log(err); 
});