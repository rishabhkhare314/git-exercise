 let currentCourse ;

 
 function addCourses() {

        let arr = JSON.parse(localStorage.getItem('course')) || []
        let image = document.getElementById('img').value;
        let name = document.getElementById('coursename').value;
        let material = document.getElementById('material').value;
        let courses = {
            coursename: name,
            image: image,
            material: material

        }
        arr.push(courses)
        localStorage.setItem('course', JSON.stringify(arr))
        showCourse()
    }


    function showCourse() {
        z = JSON.parse(localStorage.getItem('currentUser'));
         document.getElementById('name').innerHTML = z[0].name
        let show = document.getElementById('show-courses');
        show.innerHTML = ''
        let array = JSON.parse(localStorage.getItem('course'))
        for (let i = 0; i < array.length; i++) {
            show.innerHTML += `   <div class="col-md-4 col-sm-4 box">
            <div class="card">
              <a href="${array[i].material}" > <img src="${array[i].image}" alt="image">
            </div>
            <h4>${array[i].coursename}</h4></a>
            <button data-toggle="modal" data-target="#assign-course" onclick='showStudent("${array[i].coursename}")'>Assign Course</button>
        </div>`

        }

    }

    function showStudent(name) {
        currentCourse = name;
        console.log(currentCourse)
        let show;
        show = document.getElementById('course-data');
        show.innerHTML = '';
        let array = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < array.length; i++) {
            if (array[i].role !== 'admin') {
                //<button onclick='newAssign()'>"New Courses</button>
                show.innerHTML += ` <li class="list-group-item" onclick="assignData()" >${array[i].username}</li>
                    <button onclick='assignData("${array[i].username}")' >"Assign Courses</button>  
                `
            }
        } 

    }
    
    function assignData(name) {
        console.log("hoiiiiiiiiiiiii");
        let show = document.getElementById('assign-data');
        show.innerHTML = '';
        let array = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < array.length; i++) {
            if (array[i].username === name) {
                array[i].courses.push(currentCourse);
            }
        }
        localStorage.setItem('users', JSON.stringify(array))

    }

    function assignCourse() {
        console.log("Assign Course")
        let totalStudents = JSON.parse(localStorage.getItem('users')) || []
        let checked = document.getElementsByName('cc');
        for (let i = 0; i < checked.length; i++) {
            if(checked[i].checked) {
                console.log(checked[i].value)
            
        }
    }

    }

    function studentList() {
        let show = document.getElementById('student-list');
        show.innerHTML = '';
        let array = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < array.length; i++) {
            show.innerHTML += ` <li class="list-group-item">${array[i].username}</li>`

        }
    }
    function showCourses() {
        let show;
        show = document.getElementById('courses');
        show.innerHTML = '';
        let array = JSON.parse(localStorage.getItem('course'));
        for (let i = 0; i < array.length; i++) {
            show.innerHTML += ` <li class="list-group-item">${array[i].coursename}</li>`
        }
    }

    function logout() {
        localStorage.setItem('currentUser', '');
    }

   
    function load() {
         let currentUser = localStorage.getItem('currentUser');
         console.log(currentUser)
         if(currentUser === '' || currentUser === null){
                window.location.href = "./index.html"
         }
        
    }
    
    //window.onload = load();
    showCourse()
    showCourses()
    studentList() 