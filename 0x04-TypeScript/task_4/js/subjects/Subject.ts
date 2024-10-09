namespace Subjects {
  export class Subject {
    teacher!: Teacher // Implementing Teacher interface

    setTeacher (teacher: Teacher): void {
      this.teacher = teacher
    }
  }
}
