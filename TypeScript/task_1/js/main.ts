interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return (firstName[0] + '. ' + lastName)
};

console.log(printTeacher("John", "Doe"))

interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

class StudentClass implements StudentClassInterface {
	constructor(public firstName: string, public lastName: string) {
	// implementer la visibilité dans le constructor permet d'englober,
	// l'encapsulation et la déclaration des paramètres.
	}

	workOnHomework(): string {
		return 'Currently working';
	}

	displayName(): string {
		return this.firstName;
	}
}
