/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher1: Subjects.Teacher = {
	firstName: 'Guillaume',
	lastName: 'Salva',
	experienceTeachingC: 10,
	experienceTeachingReact: 0,
	experienceTeachingJava: 5,
};

cpp.setTeacher(teacher1);
react.setTeacher(teacher1);
java.setTeacher(teacher1);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
