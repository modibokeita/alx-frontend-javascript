// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows adding any additional attributes dynamically
}

// Create a Teacher object with dynamic attributes
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Dynamic attribute
};

interface Directors extends Teacher {
  numberOfReports: number;
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}
interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass('Jane', 'Smith');
console.log(student.displayName()); // Output: Jane
console.log(student.workOnHomework());
