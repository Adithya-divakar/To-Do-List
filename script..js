let add = document.getElementById('add');
let todoContainer = document.getElementById('todoContainer');
let screen = document.getElementById('screen');

add.addEventListener('click', function () {
    if (screen.value.length == 0) {
        return "Please enter text"
    }
    var paragraph = document.createElement('p')
    paragraph.classList.add('pstyling')
    paragraph.innerText = screen.value;
    todoContainer.appendChild(paragraph);
    screen.value = "";

    var editBtn = document.createElement('button');
    var DeleteBtn = document.createElement('button')


    editBtn.classList.add('Ebtn')
    editBtn.textContent = "Edit";
    todoContainer.appendChild(editBtn);

    editBtn.addEventListener('click', function () {
        let newPara = prompt("Enter new text");
        if (newPara.length == 0) {
            return `${paragraph}`
        }
        paragraph.innerText = newPara
    })


    DeleteBtn.classList.add('Dbtn')
    DeleteBtn.textContent = "Delete";
    todoContainer.appendChild(DeleteBtn);

    DeleteBtn.addEventListener('click', function () {
        todoContainer.removeChild(paragraph);
        todoContainer.removeChild(DeleteBtn)
        todoContainer.removeChild(editBtn)
    })

})