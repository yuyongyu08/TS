namespace Extends{
    class Person{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayName(): void{
            console.log(`I am ${this.name}`);
        }
    }


    class Student extends Person{
        school: string;

        constructor(name: string, school: string){
            super(name);
            this.school = school
        }

        sayName(): void {
            super.sayName();
        }

        sayHello(): void{
            super.sayName();
            console.log(`My school is ${this.school}`);
        }
    }

    let s = new Student('yuyy', 'Yanshan University')

    s.sayName();

    s.sayHello()

}