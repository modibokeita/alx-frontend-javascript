export default function createIteratorObject(report) {
  const employees = []; // Initialize an array to hold all employees

  // Iterate over each department in allEmployees
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department); // Spread the employees into the employees array
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
