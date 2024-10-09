interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}
const student1: Student = {
  firstName: 'Modibo',
  lastName: 'Keita',
  age: 20,
  location: 'New York'
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
}

// Create an array containing the students
const studentsList: Student[] = [student1, student2]

// Function to render the table
function renderTable () {
  // Create a table
  const table = document.createElement('table')
  const tbody = document.createElement('tbody')

  // Append rows for each student
  studentsList.forEach(student => {
    const row = document.createElement('tr')
    const nameCell = document.createElement('td')
    const locationCell = document.createElement('td')

    nameCell.textContent = student.firstName
    locationCell.textContent = student.location

    row.appendChild(nameCell)
    row.appendChild(locationCell)
    tbody.appendChild(row)
  })

  table.appendChild(tbody)
  document.body.appendChild(table)
}

// Call the function to render the table
renderTable()
