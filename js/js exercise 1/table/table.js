   let firstname;
let lastname;
let table;
let btn_edit ;
let btn_del;
let cell1;
let cell2;
let cell3;
let cell4;
let row;
let rindex;
let arr = [
{name:"rishabh", surname:"khare"},
{name:"sonu", surname:"kejriwal"},
{name:"vikram", surname:"Anand"},
{name:"pawan", surname:"Tiwari"}
];
window.onload = function() {
    clear_value();
}
function addrow() {
    if(document.getElementById("add").innerHTML=="Add")
    {
    static_iteration();  
    cell1.innerHTML =document.getElementById("fname").value;
    cell2.innerHTML =document.getElementById("lname").value;
     clear_value();
    }
    else{
        firstname.innerHTML=document.getElementById("fname").value;
        lastname.innerHTML=document.getElementById("lname").value;
        clear_value();
    }
}
function deleteRow(row) {
    let d = row.parentNode.parentNode.rowIndex;
    table.deleteRow(d);
    clear_value();
}
function clear_value() {
    document.getElementById("fname").value=" ";
    document.getElementById("lname").value=" ";
} 
function editRow() {
    for(i= 0; i< table.rows.length; i++ ) {
            table.rows[i].onclick= function() {
            rindex = this.rowIndex;
            document.getElementById("fname").value =  this.cells[0].innerHTML;
            document.getElementById("lname").value =  this.cells[1].innerHTML;    
            table.rows[rindex].cells[0].innerHTML=document.getElementById("fname").value;
            table.rows[rindex].cells[1].innerHTML=document.getElementById("lname").value;
            document.getElementById("add").innerHTML ="Update"; 
            //console.log(rindex);
            firstname=this.cells[0];
            lastname=this.cells[1];
        };
    }
    //console.log(rindex);
    //return rindex;
    clear_value();
}
function selectRow() {
    /* let r = selectRow();
    //let r_num = rw.parentNode.parentNode.rowIndex;
    //alert(r_num);
    alert(r);
    table.rows[r].cells[0].innerHTML=document.getElementById("fname").value;
    table.rows[r].cells[1].innerHTML=document.getElementById("lname").value;
    document.getElementById("add").value ="Update";  */
}
function static_iteration() {
    table = document.getElementById("table1");
    btn_edit = document.createElement("input");
    btn_edit.setAttribute("type", "button");
    btn_edit.setAttribute("value", "Edit");
    btn_del = document.createElement("input");
    btn_del.setAttribute("type", "button");
    btn_del.setAttribute("value", "Delete");
    let row = table.insertRow(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);  
    cell4 = row.insertCell(3);  
    cell3.appendChild(btn_edit);
    cell4.appendChild(btn_del);
    btn_edit.setAttribute("onclick", "editRow(this);");
    btn_del.setAttribute("onclick", "deleteRow(this);");
}
function render() {
    for(let i= 0; i< arr.length ;i++) {
        static_iteration();
        cell1.innerHTML = arr[i].name;
        cell2.innerHTML = arr[i].surname;
    }

}


