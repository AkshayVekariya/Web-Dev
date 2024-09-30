const listArr = [];


const inputTask = document.getElementById("input");
const list = document.getElementById("ul-add");

function addTask(){
  let html = "";
    for (let i = 0; i <listArr.length; i++) {
        html += `<li>${listArr[i]} <button onclick="remove()">remove</button></li>`;
    }
    list.innerHTML = html;
}

function remove(){

    listArr.pop();
    let html = "";
    for (let i = 0; i <listArr.length; i++) {
        html += `<li>${listArr[i]} <button onclick="remove()">delete</button></li>`;
    }
    list.innerHTML = html;
}
remove();

function rList(){
    let task = inputTask.value;
    listArr.push(task);
    addTask();
    inputTask.value= "";
}
