const ipfs = require('ipfs');
console.log("imported IPFS");
//making ipfs server
const node = new ipfs();
console.log("starting server");
node.on('ready',async() =>{
  console.log("Server started");
  const version = await node.version();
  console.log(version.version);

//adding and retriving foile in IPFS
const fileAdded = await node.files.add({
  path: 'hello.txt',
  content : Buffer.from("hello Wrold")
});
console.log("Added file:" + fileAdded[0].path);
console.log("Hash:" + fileAdded[0].hash);
console.log("geting back the file");
const fileBuffer = await nodes.files.cat(fileAdded[0].hash);
console.log("File content" + fileBuffer.toString)

});

//browserify->const jkasbd = reuire can be used only after this lib insalled
//
