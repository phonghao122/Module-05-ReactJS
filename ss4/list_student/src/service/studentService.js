const students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 20,
        email: "nguyenvana@gmail.com",
        score: 8.5
    },
    {
        id: 2,
        name: "Trần Thị B",
        age: 21,
        email: "tranthib@gmail.com",
        score: 7.8
    },
    {
        id: 3,
        name: "Lê Văn C",
        age: 19,
        email: "levanc@gmail.com",
        score: 9.2
    },
    {
        id: 4,
        name: "Phạm Thị D",
        age: 22,
        email: "phamthid@gmail.com",
        score: 8.0
    },
    {
        id: 5,
        name: "Hoàng Văn E",
        age: 20,
        email: "hoangvane@gmail.com",
        score: 6.9
    }
];

export function getAllStudents() {
    return students;
}

export function addStudent(student) {

    const newStudent = {
        ...student,
        id:
            students.length > 0
                ? Math.max(
                ...students.map(
                    s => s.id
                )
            ) + 1
                : 1
    };

    students.push(newStudent);

    console.log(students);
}

export function findById(id) {
    return students.find((student) => student.id === Number(id));
}

export function updateStudent(id, student) {
    const index = students.findIndex(
        student =>
            student.id === Number(id));
    if (index !== -1) {
        students[index] = {
            ...students[index],
            ...student
        };
    }
}

export function deleteStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === Number(id)) {
            students.splice(i, 1);
        }
    }
}