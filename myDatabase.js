
const Message = require('./Message');

let myDatabase = function() {
	this.messages = [];
}

let messageIndex = 0;

myDatabase.prototype.displayMessages = function() {
	for (let i=0;i<this.messages.length;i++) {
		console.log(this.messages[i]);
	}
}

myDatabase.prototype.postMessage = function(message) {
	this.messages[messageIndex++] = new Message(message.name,message.comment);
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
