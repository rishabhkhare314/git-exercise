let first = document.getElementById('first');
let last = document.getElementById('last');
var tbody = document.getElementById('tbody');
//let arr = [];

let addData = () => {

    console.log(first.value)
    console.log(last.value)
    let obj = {
        method: "POST",
        header: {
            // "Content-Type": "aplication/json",
            // "Accept": "aplication/json",
        },
        body: JSON.stringify({
            firstName: first.value,
            lastName: last.value
        })

    }
    console.log(obj)
    fetch('http://localhost:8000/api/addUser', obj)
        .then(
            res => res.json()
        )
        .then(add => console.log(add))
    showData();
}

let showData = () => {
    fetch('http://localhost:8000/api/getUser')
        .then(
            res => res.json()
        )
        .then(arr => {
            let i = 0;
            tbody.innerHTML = ''
            arr.forEach(element => {
                tbody.innerHTML += `
        <tr>
            <td> ${i + 1}</td>
            <td> ${element.firstName}</td>
            <td> ${ element.lastName}</td>
            <td> <button onclick="edit('${element._id}')">Edit</button></td>
            <td>  <button onclick="del('${element._id}')">Delete</button></td>
        </tr>
    `
                i++;
            })
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
    first = first.value;
    last = last.value;
    obj = arr[id];
    obj.first = first;
    obj.last = last;
    showData();
    document.getElementById('addbtn').innerText = "ADD";
    addbtn.setAttribute('onclick', `addData()`)
}

let del = (id) => {
    console.log(id)
    fetch(`http://localhost:8000/api/deleteUser/${id}`, {
        method: "Delete"
    })
        .then(
            resp => resp.json()
        )
        .then(
            data => console.log("data")
        )
  
    showData()
}
showData()