export default function getStudentIdsSum(list) {
  return list.reduce((acc, students) => acc + students.id, 0);
}
