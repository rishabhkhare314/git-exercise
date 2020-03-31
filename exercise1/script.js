let first = document.getElementById('first');
let last = document.getElementById('last');
var tbody = document.getElementById('tbody');
//let arr = [];

let addData = () => {

    // console.log(first.value)
    // console.log(last.value)
    let obj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Accept": "aplication/json",
        },
        body: JSON.stringify({
            firstName: first.value,
            lastName: last.value
        })

    }
    console.log(obj)

    fetch('http://localhost:9000/api/addUser', obj)
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });


    showData();
}

let showData = () => {
    fetch('http://localhost:9000/api/getUser')
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
    fetch(`http://localhost:9000/api/getUser/${id}`)
        .then(
            res => res.json()
        )
        .then(arr => {
            first.value = arr.firstName;
            last.value = arr.lastName
            document.getElementById('addbtn').innerText = "Update";
            addbtn.setAttribute('onclick', `update("${id}")`)
        }
        )
    }

let update = (id) => {

    let obj = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: first.value,
            lastName: last.value
        })

    }
    console.log(obj)

    fetch(`http://localhost:9000/api/updateUser/${id}`, obj)
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            showData()
        })
        .catch((error) => {
            console.error('Error:', error);
        });


}

let del = (id) => {
    console.log(id)
    fetch(`http://localhost:9000/api/deleteUser/${id}`, {
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
