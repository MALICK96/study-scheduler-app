/* TODO

1- Get input fields and store them in variables  
2 - Validate The input field
3 - Pass the variable which hold the user inputs 
    as parameters to a function CONSTRUCTOR called Userclone that 
    return a new obj in which it set the parameters it has receive
    in the function scope and returned it the. 
4 - Pass the returned obj properties to the function constructor
  Schedule inside of  an array [ new UserLecture(...)] by creating 
  a new class each time the Schedule Constructor with the new keyword.   
5 - Build a string that will display as the info down the page

*/

function UserLecture(courseName, courseTime, teacherName) {
  this.courseName = courseName;
  this.courseTime = courseTime;
  this.teacherName = teacherName;
}

UserLecture.prototype.display = function() {
  return `${this.courseName} is taugh by ${this.teacherName} at: ${this.courseTime}`;
};

// A constructor that receive an arry
// of lectures and set it as local propertie
function Schedule(lectures) {
  this.lectures = lectures;
}

// A method to display the lectures info
Schedule.prototype.display = function() {
  let i,
    strlen,
    str = "";
  strlen = this.lectures.length;

  for (i = 0; i < strlen; i++) {
    if (i !== strlen - 1) {
      str += this.lectures[i].display() + ", ";
    } else {
      str += this.lectures[i].display() + ".";
    }
  }

  return str;
};

function userClone(courseName, courseTime, teacherName) {
  // declare obj
  let obj = {};

  // set properties received by this
  // to the obj object
  obj.courseName = courseName;
  obj.courseTime = courseTime;
  obj.teacherName = teacherName;

  // return obj
  return obj;
}

const form = document.getElementById("form");

let res = document.getElementById("res");

let cell1Content, cell2Content, cell3Content;
var courseName, courseTime, teacherName;

// When the form is submitted
form.addEventListener("submit", function(e) {
  e.preventDefault();

  courseName = document.getElementById("coursename").value;
  courseTime = document.getElementById("coursetime").value;
  teacherName = document.getElementById("teacher").value;

  // make sure the user inputed is greater than 1
  if (courseName.length > 1 && courseTime.length > 1) {
    // create a user 1 schedule
    let user = userClone(courseName, courseTime, teacherName);
    let schedules = new Schedule([
      new UserLecture(user.courseName, user.courseTime, user.teacherName)
    ]);

    cell1Content = courseName;
    cell2Content = courseTime;
    cell3Content = teacherName;

    createTableRow(cell1Content, cell2Content, cell3Content);

    res.innerHTML += schedules.display() + "<br>";
  }
});

// Function to create table row and cells
function createTableRow(cell1Content, cell2Content, cell3Content) {
  let row, cell1, cell2, cell3;
  row = document.createElement("tr");
  cell1 = document.createElement("td");
  cell3 = document.createElement("td");
  cell2 = document.createElement("td");
  cell1.textContent = cell1Content;
  cell2.textContent = cell2Content;
  cell3.textContent = cell3Content;
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  document.getElementById("tablebody").appendChild(row);
}

// write the date in the elm with date id
date = document.getElementById("date");
date.innerHTML = new Date();
