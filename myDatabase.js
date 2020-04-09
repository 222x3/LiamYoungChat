
const Student = require('./Student');

let myDatabase = function() {
	this.students = [];
}

let studentIndex = 0;

myDatabase.prototype.displayStudents = function() {
	for (let i=0;i<this.students.length;i++) {
		console.log(this.students[i]);
	}
}

myDatabase.prototype.postStudent = function(student) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].id == student.id) {
      return false;
    }
  }
//	this.students[studentIndex++] = student;
	this.students[studentIndex++] = new Student(student.id,student.name,student.age,student.grade);
	return true;
}

myDatabase.prototype.getStudent = function(id) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && id == this.students[i].id)
		{
//			return(this.students[i]);
      return(new Student(this.students[i].id,this.students[i].name,this.students[i].age,this.students[i].grade));
		}
  }
	return null;
}

myDatabase.prototype.putStudent = function(student) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].id == student.id) {
//			this.students[i] = student;
      this.students[i] = new Student(student.id,student.name,student.age,student.grade);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteStudent = function(id) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && id == this.students[i].id) {
			  let tempPtr = this.students[i];
        this.students[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
