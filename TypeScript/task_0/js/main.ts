interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Jenny",
	lastName: "Marx",
	age: 32,
	location: "Laval"
}

const student2: Student = {
	firstName: "John",
	lastName: "Rims",
	age: 23,
	location: "Paris"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student: Student) => {
	const row = document.createElement("tr");

	const tdFirstName = document.createElement("td");
	tdFirstName.textContent = student.firstName;

	const tdLocation = document.createElement("td");
	tdLocation.textContent = student.location;

	row.appendChild(tdFirstName);
	row.appendChild(tdLocation);
	table.appendChild(row);
});

document.body.appendChild(table);
