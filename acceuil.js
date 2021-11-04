const url = 'https://randomuser.me/api/?results=2500';

let fullname = document.getElementById('fullname');

function refresch (){
 fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError)
};

function handleErrors (res){
  if(!res.ok){
    throw error(res.status);
  }
  console.log(res);
  return res;
}
function parseJSON (res){
  return res.json();
}  

var a = 0;
onkeyup = compteur;
function compteur (z){

  z = z || window.event;
  if (z.keyCode == "90"|| z.keyCode == "81"|| z.keyCode == "68") {
    compteur(++a);
  }
}

function updateProfile (profile) {
fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last+" "+ a ;

return 1;
}
 
function printError (error){
  console.log(error);
}
