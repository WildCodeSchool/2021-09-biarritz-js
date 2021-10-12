/*const julie = {
    age: 30,
    city: 'Berlin',
    languages : ['JavaScript', 'React'],
    graduated : true,
    sayHello(){
        let message = `Hello, my name is Julie, i'm ${this.age} y old, i live in ${this.city}. The languages i studied are `;
        for(let i = 0; i < this.languages.length; i++){
            message = message + ` ${this.languages[i]} `;
        }
        message += this.graduated ? '. I graduated' : '. I failed';
        console.log(message);
    }
};

julie.sayHello();

const marc = {
    age: 34,
    city: 'Lisbon',
    languages : ['Python'],
    graduated : true,
    sayHello(){
        let message = `Hello, my name is Marc, i'm ${this.age} y old, i live in ${this.city}. The languages i studied are `;
        for(let i = 0; i < this.languages.length; i++){
            message = message + ` ${this.languages[i]} `;
        }
        message += this.graduated ? '. I graduated' : '. I failed';
        console.log(message);
    }
}

marc.sayHello();*/

class Student {
    constructor(name, age, campus, languages, graduated){
        this.name = name;
        this.age = age;
        this.campus = campus;
        this.languages = languages;
        this.graduated = graduated;
    }
    sayHello(){
        let message = `Hello, my name is ${this.name}, i'm ${this.age} y old, i live in ${this.campus}. The languages i studied are `;
        for(let i = 0; i < this.languages.length; i++){
            message = message + ` ${this.languages[i]} `;
        }
        message += this.graduated ? '. I graduated' : '. I failed';
        console.log(message);
    }
}

/*
const julie = new Student('julie',30,'Berlin',['JavaScript', 'React'],true);
console.log(julie);
julie.sayHello();

const marc = new Student('marc', 34, 'lisbon', ['Python'], true);
marc.sayHello();

*/

class Animal{
    constructor(name,age,breed,color,food){
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.color = color;
        this.food= food;
    }
    sayHello(){
        console.log(`${this.name} is an animal`);
    }
}

class Cat extends Animal{
    constructor(name, age, breed, color, food, purr){
        super(name, age, breed, color, food);
        this.purr = purr;
    }
    sayMeow(){
        console.log(`${this.name}  says Meow`);
    }
}

class Dog extends Animal{
    constructor(name, age, breed, color, food, likeCats){
        super(name, age, breed, color, food);
        this.likeCats = likeCats;
    }
    sayWoof(){
        console.log(`${this.name}  says Woof`);
    }
}

const louya = new Cat('Louya', 3, 'européenne', 'gris++', 'croquettes', true);
louya.sayMeow();

const kaiko = new Dog('Kaiko', 7, 'Border Golden', 'noire', 'tout', true);
kaiko.sayWoof();
kaiko.sayHello();