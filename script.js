function addToList() {
    let listItem = document.getElementById("listItem");
    let toDosList = document.getElementById("toDosList");
    if (!listItem.value) return;
    let itemsCount = toDosList.childElementCount;
    if (itemsCount == 3) {
        listItem.value = null;
        return
    };
    toDosList.insertAdjacentHTML('beforeend', '<li>' + listItem.value + '</li>')
    listItem.value = null;
}

document.getElementById("toDosList").addEventListener("dblclick", function (e) {
    console.log(2);
    // e.target.classList.toggle("done");
})

document.getElementById("toDosList").addEventListener("click", function (e) {
    console.log(e.target);
    e.target.classList.toggle("done");
})