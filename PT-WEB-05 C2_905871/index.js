// fill in javascript code here
const form = document.querySelector("form");
const body = document.querySelector("tbody");
const myname = document.querySelector("#name");
const docID = document.querySelector("#docID");
const dept = document.querySelector("#dept");
const exp = document.querySelector("#exp");
const email = document.querySelector("#email");
const mbl = document.querySelector("#mbl");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let Arr = [];
    let Data = {
        name:   myname.value,
        id:     docID.value,
        Dept:   dept.value,
        EXP:    exp.value,
        Email:  email.value,
        mobile: mbl.value
    }
    Arr.push(Data);
    Arr.map(function(el)
    {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        td1.innerText = el.name;
        td2.innerText = el.id;
        td3.innerText = el.Dept;
        td4.innerText = el.EXP;
        td5.innerText = el.Email;
        td6.innerText = el.mobile;
        td8.innerText = "Delete";
        if(el.EXP > 5){
            td7.innerText = "Senior";
        }
        else if(el.EXP >= 2 && el.EXP <= 5){
            td7.innerText = "Junior";
        }
        else if(el.EXP <= 1){
            td7.innerText = "Fresher";
        }
        td8.addEventListener("click", function(){
            td1.innerHTML = "";
            td2.innerHTML = "";
            td3.innerHTML = "";
            td4.innerHTML = "";
            td5.innerHTML = "";
            td6.innerHTML = "";
            td7.innerHTML = "";
            td8.innerHTML = "";
        })
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        body.append(tr);
    })
})


