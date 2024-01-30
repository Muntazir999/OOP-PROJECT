import inquirer from "inquirer";

class Student {
    name: string
    constructor(n: string) {
        this.name = n
    }
};

class Person {
    students: Student[] = []

    addStudent(obj: Student) {
        this.students.push(obj)
    }
};

const persons = new Person();

const programStart = async (persons: Person) => {
    do {

        console.log("Welcome guest")

        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            choices: ["Self", "Student"],
            message: "By whom you like to talk ?"
        });

        if (ans.select == "Self") {
            console.log("Hey it's Me, how are you ?")
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "By which student you like to talk ?"
            });

            const student = persons.students.find(val => val.name == ans.student);


            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name)

                console.log(`Hello, I am ${name.name}. I am fine.`);     ////student is not present
                console.log(persons.students);
            }

            if (student) {
                console.log(`Hello, I am ${student.name}. I am fine.......`);  ////student is present
                console.log(persons.students);
            }
        }

    } while (true)
};

programStart(persons);