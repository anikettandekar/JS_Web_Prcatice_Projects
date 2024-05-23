

const inputText = document.getElementById('inputBox')
const listTask = document.getElementById('taskList')

const addTask =()=>{
    if(inputText.value === ''){
        alert("Enter Task!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputText.value
        listTask.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }
    inputText.value = ""
    savedata()
}

listTask.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
})

function savedata(){
    localStorage.setItem("data", listTask.innerHTML)
}

function showdata(){
    listTask.innerHTML = localStorage.getItem("data")
}

showdata()