const studentList = [
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

export function getAll(){
    // call API
    return [...studentList]
}

export function deleteById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break
        }
    }
}