export default function getListStudentIds(listids) {
  if (!Array.isArray(listids)) {
    return [];
  }
  return listids.map((students) => students.id);
}
