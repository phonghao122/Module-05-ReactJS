const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
};

const {
    firstName,
    gender,
    languages: [english],
    education: { degree }
} = person;

const student1 = {
    firstName,
    gender,
    degree,
    english
};
const student2 = {
    gender,
    degree,
    english
}

const showInfo = ({
                      firstName = "Quân",
                      degree = "NA"
                  } = {}) => {
    console.log("firstName:", firstName);
    console.log("degree:", degree);
};

showInfo(student1);
showInfo(student2);