Parse.serverURL = "https://parseapi.back4app.com/";
Parse.initialize(
    "lY8hgd4DKbvsnW0UYxbaa7gktARQFtfGqLbyk8Yh",
    "4UI5ALJgulft95GQQhI1zQ57zzbdk4P5KzvPXVAB"
);

const inputTask = document.getElementById("task");
const btInsert = document.getElementById("insert");

let taskList = [];

const addTask = async () => {
    const newTask = new Parse.Object("Task");

    newTask.set("description", inputTask.value);
    inputTask.value = "";

    newTask.set("position", taskList.length);

    try {
        let result = await newTask.save();
        console.log("Objeto de ID \'" + result.id + "\' criado com sucesso.")
    } catch (error) {
        console.error("Falha ao criar novo objeto. Erro de código: " + error);
    }

    pullTasks();
};

const pullTasks = async () => {
    const task = Parse.Object.extend("Task");
    const query = new Parse.Query(task);

    try {
        const results = await query.find();
        taskList = [];

        console.clear();

        for (const object of results) {
            const id = object.id;
            const description = object.get("description");
            const done = object.get("done");
            const position = object.get("position");

            taskList.push({id, description, done, position});

            console.log(`ID: ${id}, Descrição: ${description}, Concluída: ${done}, Posição: ${position}`);
        }

        showTasks();
    } catch (error) {
        console.error("Falha ao execeutar o fetch dos objetos da classe \'Task\'. Erro de código: ", error);
    }
};

const toDoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

const showTasks = () => {
    toDoList.innerHTML = "";
    doneList.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        const taskItem = createNewTask (taskList[i]);

        if (taskList[i].done) {
            doneList.appendChild(taskItem);
        } else {
            toDoList.appendChild(taskItem);
        }
    }
}

const createNewTask = (task) => {
        const div = document.createElement("div");
        const label = document.createElement("label");
        const checkBox = document.createElement("input");
        const inputEdit = document.createElement("input");
        const btEdit = document.createElement("button");
        const btRemove = document.createElement("button");

        div.setAttribute("id", "task_" + task.id);
        div.setAttribute("draggable", "true");
        div.setAttribute("value", task.position);
        div.setAttribute("min", "0");

        label.setAttribute("for", "check_" + task.id);

        checkBox.type = "checkbox";
        checkBox.setAttribute("id", "check_" + task.id);
        checkBox.setAttribute("onchange", "toggleTask(this.id)");

        inputEdit.type = "text";
        inputEdit.classList.add("edit");

        btEdit.setAttribute("id", "edit_" + task.id);
        btEdit.setAttribute("onclick", "editTask(this.id)");

        btRemove.setAttribute("id", "remove_" + task.id);
        btRemove.setAttribute("onclick", "removeTask(this.id)");

        if (task.done) {
            checkBox.setAttribute("checked", true);
        }

        let text = document.createTextNode(
            `${task.description}`
        );

        label.appendChild(text);

        div.appendChild(checkBox);
        div.appendChild(label);
        div.appendChild(inputEdit);
        div.appendChild(btEdit);
        div.appendChild(btRemove);

        return div;
}

const idSplitter = (id) => {
    return id.split("_")[1];
}

const toggleTask = (id) => {
    let checkBox = document.getElementById(id);

    if (checkBox.checked) {
        completeTask(id);
    } else {
        incompleteTask(id);
    }
}

const completeTask = (id) => {
    id = idSplitter(id);

    let completedTask = document.querySelector("#task_" + id);

    doneList.appendChild(completedTask);

    toggleDoneAPI(id, true);
}

const incompleteTask = (id) => {
    id = id.split("_")[1];

    let incompletedTask = document.querySelector("#task_" + id);

    toDoList.appendChild(incompletedTask);

    toggleDoneAPI(id, false);
}

const toggleDoneAPI = async (id, boolean) => {
    const toggledTask = new Parse.Object("Task");

    toggledTask.set("objectId", id);
    toggledTask.set("done", boolean);

    try {
        let result = await toggledTask.save();
        console.log("Objeto de ID \'" + result.id + "\' atualizado com sucesso.");
    } catch (error) {
        console.error("Falha ao atualizar objeto. Erro de código: " + error);
    }
}

const editTask = (id) => {
    id = idSplitter(id);


}

const removeTask = (id) => {
    id = idSplitter(id);

    let deletedTask = document.querySelector("#task_" + id);

    deletedTask.remove();
}

pullTasks();
btInsert.onclick = addTask;