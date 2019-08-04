// Write your code here!
main.remove();

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'Lawson is the champion';
