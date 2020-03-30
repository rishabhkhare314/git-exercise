let first = document.getElementById('first');
let last = document.getElementById('last');
var tbody = document.getElementById('tbody');
let arr = [];

let addData = () => {
    let obj = {
        id: '',
        first: first.value,
        last: last.value
    }
    arr.push(obj);
    console.log(arr)
    showData();
}

let showData = () => {
    let i = 0;
    tbody.innerHTML = ''
    arr.forEach(element => {
        tbody.innerHTML += `
        <tr>
            <td> ${i + 1}</td>
            <td> ${element.first}</td>
            <td> ${ element.last}</td>
            <td> <button onclick="edit(${i})">Edit</button></td>
            <td>  <button onclick="del(${i})">Delete</button></td>
        </tr>
    `
        i++;
    })
}

let edit = (id) => {
    console.log(id);
    let obj = arr[id];
    first.value = obj.first;
    last.value = obj.last
    document.getElementById('addbtn').innerText = "Update";
    addbtn.setAttribute('onclick', `update(${id})`)
}

let update = (id) => {
console.log(id)
first =first.value;
last = last.value;
obj = arr[id];
obj.first = first;
obj.last = last;
showData();
document.getElementById('addbtn').innerText = "ADD";
addbtn.setAttribute('onclick', `addData()`)
}

let del = (id) => {
    arr.splice(id,1);
    console.log(id)
    showData()
}