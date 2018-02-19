//Run in nodejs
//requires https://www.npmjs.com/package/co package
var co = require("co");

function getDetails(id){
  return new Promise((resolve)=>{
	  setTimeout(function(){
		return resolve({id})
	  })
  })
}

function updateDetails(obj){
  return new Promise((resolve)=>{
	  setTimeout(function(){
		return resolve({updatedData:obj.id+1})
	  })
  })
}

function* demoGen(){
    const data = yield getDetails(10);
    const res = yield updateDetails(data);
    console.log(res);
}

const demo = co.wrap(demoGen);
demo()
.then(console.log)
.catch(console.log);