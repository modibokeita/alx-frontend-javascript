export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    // Type validation
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateArrayOfStrings(students, 'Students');
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateString(newName, 'Name');
    this._name = newName;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateNumber(newLength, 'Length');
    this._length = newLength;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateArrayOfStrings(newStudents, 'Students');
    this._students = newStudents;
  }

  // Helper methods for validation
  _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
  }

  _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
  }

  _validateArrayOfStrings(value, fieldName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${fieldName} must be an array of strings`);
    }
  }
}
