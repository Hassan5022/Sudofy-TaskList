var collection = document.querySelector(".collection");
var btn = document.querySelector("#btn");
var input = document.querySelector("#input");


function addList() {

    if (input.value != "") {
        var item = document.createElement("li");
        item.innerText = input.value;
        item.setAttribute('class', 'item');

        var btns = document.createElement('div');

        var editBtn = document.createElement('button');
        editBtn.innerText = "Edit";
        editBtn.setAttribute("class", "edit-btn");
        editBtn.setAttribute("onclick", "editItem(this)");

        var delBtn = document.createElement('button');
        delBtn.innerText = "Delete"
        delBtn.setAttribute("class", "del-btn");
        delBtn.setAttribute("onclick", "deleteItem(this)");

        btns.appendChild(editBtn);
        btns.appendChild(delBtn);
        item.appendChild(btns);

        collection.appendChild(item);

        input.value = "";
    }

}

function deleteItem(e) {
    if (confirm("Are you sure?")) {
        e.parentNode.parentNode.remove();
    }
}

function editItem(e) {
    var value = e.parentNode.parentNode.firstChild;
    var editValue = prompt("Enter edit value:", value.nodeValue);
    if (editValue != "") {
        value.nodeValue = editValue;
    } else
        alert("Please enter task");
}

btn.addEventListener('click', addList);