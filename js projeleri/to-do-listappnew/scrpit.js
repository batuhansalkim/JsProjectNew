const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo_input");

const startConf = () => {
    //
}

const addTodo = (e) => {
    e.preventDefault();

    todoText = input.value;

    const todo = {
        text: todoText,
        isCompleted:false,
    }

    const todos = localStorage.getItem("todos");
    console.log(todos)


}
form.addEventListener("submit",addTodo);













