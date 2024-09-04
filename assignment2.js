const students = [
    { name: 'Femi', age: 20, grade: 'A' },
    { name: 'Ruth', age: 22, grade: 'B' },
    { name: 'Great', age: 19, grade: 'A' },
    { name: 'Shakur', age: 21, grade: 'C' },
    { name: 'Tunmise', age: 20, grade: 'B' },
];

function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
}

function averageAge(students) {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

const gradeAStudents = filterByGrade(students, 'A')
const gradeCStudents = filterByGrade(students, 'C')
const avgAge = averageAge(students)

console.log("Students with grade 'A'", gradeAStudents)
console.log("Students with grade 'C'", gradeCStudents)
console.log("Average age of students", avgAge)

