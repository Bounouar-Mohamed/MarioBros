function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const ul = document.getElementById('user');
const url = 'https://randomuser.me/api/?results=2500';

fetch(url)
  
  .then((resp) => resp.json())
  
  .then(function(data) {
let users = data.results;
    return users.map(function(user) {

let li = createNode('li');
let span = createNode('span');
  
  span.innerHTML = `${user.name.first} ${user.name.last}`;
  
  append(li, span);
  append(ul, li);
})
})
  .catch(function(error) {
    console.log(error);
});
