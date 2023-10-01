// fill in javascript code here
const form = document.querySelector("form");
const Name = document.querySelector("#name");
const ID = document.querySelector("#employeeID");
const Department = document.querySelector("#department");
const EXP = document.querySelector("#exp");
const Email = document.querySelector("#email");
const Mobile = document.querySelector("#mbl");
const table = document.querySelector("tbody");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let data = [];
    let Data = {
        name:       Name.value,
        id:         ID.value,
        department: Department.value,
        exp:        EXP.value,
        email:      Email.value,
        mobile:     Mobile.value
    }
    data.push(Data);

    data.map(function(el)
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        td1.innerText = el.name;
        td2.innerText = el.id;
        td3.innerText = el.department;
        td4.innerText = el.exp;
        td5.innerText = el.email;
        td6.innerText = el.mobile;
        if(el.exp > 5){
            td7.innerText = "Senior";
        }
        else if(el.exp >= 2 && el.exp <= 5){
            td7.innerText = "Junior";
        }
        else if(el.exp <= 1){
            td7.innerText = "Fresher";
        }
        tr.append(td1, td2, td3, td4, td5, td6, td7);
        table.append(tr);
    })
})