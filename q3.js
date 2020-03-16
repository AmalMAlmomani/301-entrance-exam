`use strict`;


function ToDoList(taskName,date ) {
    this.taskName = taskName;
    this.date = date;
    ToDoList.all.push(this);

}

ToDoList.all = [];

function set() {
    var x = JSON.stringify(ToDoList.all);
    localStorage.setItem('toDo', x);
}

function get() {
    var y = localStorage.getItem('toDo');
    if (y) {
        ToDoList.all = JSON.parse(y);
        list.data();


    }

}


function currentDate() {
var current = document.getElementById("current");
    var currentdate = new Date();
    var month = currentdate.getMonth();
    var datetime = currentdate.getDate()
    var year = currentdate.getFullYear();
    current.textContent =`${month} ${datetime} ${year}` ;

}
currentDate();




ToDoList.prototype.data= function() {

    var olE1 = document.getElementById('ol');
    var liE1 = document.createElement('li');
    olE1.appendChild(liE1);
    liE1.textContent = this.taskName;
    //////////////
    var liE2 = document.createElement('li');
    olE1.appendChild(liE2);
   liE2.textContent = this.date;


}




var myDoList = document.getElementById('toDo');
myDoList.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = event.target.what.value;
    var date = event.target.date.value;

    var list = new ToDoList(name,date);
    
   list.data();
   set();
    myDoList.reset();
})

get();