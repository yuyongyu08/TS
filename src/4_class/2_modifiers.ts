namespace Modifiers{
    class Person {
        public name: string;  //public 可以省略
        private ID: string; //private 不能再声明它的类外部访问
        protected phoneNumber: string; // protected 可以在子类中访问
        readonly gender: string = 'male'; //readonly 必须在声明时或构造函数里被初始化

        constructor(name: string, ID: string, phoneNumber: string) {
            this.name = name;
            this.ID = ID;
            this.phoneNumber = phoneNumber
        }

        sayHello(): void{
            console.log(`I am ${this.name}, my ID is ${this.ID}, my phoneNumber is ${this.phoneNumber}`);
        }
    }

    let p = new Person('yuyy', '123456', '15100120012');
    console.log(p.name); //yuyy
    console.log(p.ID); // error TS2341: Property 'ID' is private and only accessible within class 'Person'
    console.log(p.phoneNumber); //error TS2445: Property 'phoneNumber' is protected and only accessible within class 'Person' and its subclasses.
    console.log(p.gender); //male

    p.sayHello(); //I am yuyy, my ID is 123456, my phoneNumber is 15100120012

    class Student extends Person{
        school: string;

        constructor(name: string, ID: string, phoneNumber: string, school: string){
            super(name, ID, phoneNumber);
            this.school = school;
        }

        sayHello(): void {
            super.sayHello();
            console.log(`ID: ${this.ID}`); //private 只能在声明它的类被访问
            console.log(`phoneNumber: ${this.phoneNumber}`); //protected 可以在子类中被访问
        }
    }

    class Programmer extends Person{
        job: string;
        protected constructor(name: string, ID: string, phoneNumber: string, job: string){ //构造函数为protected，这个类不能在包含它的类外被实例化，但是能被继承
            super(name, ID, phoneNumber);
            this.job = job;
        }

        getInstance(): Programmer{
            return new Programmer('yuyy', '123456', '15100120012', 'FE') //构造函数为protected，可以在本类中被实例化
        }
    }

    let programmer = new Programmer('yuyy', '123456', '15100120012', 'FE'); // 构造函数为protected，不可以在类外被实例化

    /*
    * 参数属性：【修饰符】和【属性声明】结合
    */
    class NewPerson {
        constructor(public name: string, private ID: string, protected phoneNumber: string, readonly gender: string = 'male') {}

        sayHello(): void{
            console.log(`I am ${this.name}, my ID is ${this.ID}, my phoneNumber is ${this.phoneNumber}`);
        }
    }

}