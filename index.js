//Required modules
const ipfsAPI = require('ipfs-api');
const express = require('express');
const fs = require('fs');
const app = express();
let hash
//Connceting to the ipfs network via infura gateway
const ipfs = new ipfsAPI({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

//Reading file from computer
let testFile = fs.readFileSync("./config.txt");
//Creating buffer for ipfs function to add file to the system
let testBuffer = new Buffer(testFile);

//Addfile router for adding file a local file to the IPFS network without any local node
app.get('/addfile', function(req, res) {

    hash = ipfs.files.add(testBuffer, function (err, file) {
        if (err) {
          console.log(err);
        }
        console.log(file)
      })

})
//Getting the uploaded file via hash code.
app.get('/getfile', function(req, res) {

    //This hash is returned hash of addFile router.
    const validCID = 'HASH_CODE';

    ipfs.files.get(validCID, function (err, files) {

          console.log(hash.path)
          console.log(hash.content.toString('utf8'))

      })

})

app.listen(3000, () => console.log('App listening on port 3000!'))
