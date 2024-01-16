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
        saveData()
    }
    inputBox.value = "";
}

//Cross icon funtionality -- To remove listed items

listContainer.addEventListener("click" , (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData()
        }
    },false);

//To save the date in the browser

function saveData(){
    localStorage.setItem("to-do data",listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML=localStorage.getItem("to-do data");
}
getData(); //To show the stored data after refreshing 