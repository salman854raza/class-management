"use strict";
class School {
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teObj) {
        this.teachers.push(teObj);
    }
    constructor(name) {
        this.students = [];
        this.teachers = [];
    }
}
class Student {
    constructor(name, rollNumber, schoolName) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.SchoolName = schoolName;
    }
}
class Teacher extends Student {
}
//school name
let school1 = new School("Bhutto Trust School Thatta");
let school2 = new School("High School Thatta");
let school3 = new School("Perfect School System Thatta");
//student name
let s1 = new Student("SALMAN Raza", 24001, school1.name);
let s2 = new Student("ALI", 24001, school2.name);
let s3 = new Student("Zulnoorain", 24001, school3.name);
// Teacher
let t1 = new Teacher("Rehman", 34, school1.name);
let t2 = new Teacher("babar", 34, school2.name);
let t3 = new Teacher("RAZA", 34, school3.name);
//
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
//teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
