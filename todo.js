const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Add Button functionality

function addTask(){
    if(inputBox.value === ''){
        alert("Add some task to continue!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}