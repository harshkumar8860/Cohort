//delete a todo
function deleteTodo(index) {
    let element = document.getElementById("todo-" + index);
    element.parentElement.removeChild(element);
}

function updateTodo() {
    let element = document.querySelector("h4");
    element.innerHTML = "Something New!";
    //update the todo
    // let num = 1;
    // setInterval(function () {
    //   let update = document.querySelectorAll("h4")[1];
    //   let updatedtext = (update.innerHTML = num);
    //   console.clear();
    //   console.log(updatedtext);
    //   num++;
    // }, 1000);
}
function DeleteFirstTodo() {
    let element = document.querySelector("h4");
    let parent = element.parentNode;
    let upperParent = parent.parentNode;
    console.log(upperParent);

    upperParent.removeChild(parent);
}

function addTodo() {
    let inputElement = document.querySelector("input");
    let value = inputElement.value;
    console.log(value);
    addTask(value);
}

function addTask(value) {
    let element = (document.createElement("div").innerHTML = "hello ");
    let parent = document.querySelector("div").parentNode;
    let appendedValue = parent.append(element + " ");
    // console.log(parent);
    let appendTheTodo = document.querySelector("body").append(value);
}

// let el1 = document.querySelectorAll("h4");
// console.log(el1);
// let el2 = document.querySelector("input");
// console.log(el2);
// let el3 = document.getElementById("co").innerHTML;
// console.log(el3);
// let el4 = document.getElementById("co").innerText;
// console.log(el4);