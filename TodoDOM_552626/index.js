const form = document.querySelector("form");
const Input = document.querySelector("#task");
const Priority = document.querySelector("#priority");
const table = document.querySelector("tbody");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let data = [];
    let Data = {
        input: Input.value,
        priority: Priority.value
    }
    data.push(Data);

    data.map(function(el)
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td1.innerText = el.input;
        td2.innerText = el.priority;
        tr.append(td1, td2);
        table.append(tr)
    })
})