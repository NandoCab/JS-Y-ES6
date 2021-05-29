const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.onclick = function() {
    const code = input.value;
    para.textContent = eval(code);
}

function Person(first, last, age, gender, interest) {
    this.name = {
        first,
        last
    };
this.age = age;
this.gender = gender;
this.interest = interest;
};

Person.prototype.bio = function() {
    let string = this.name.first + " " +this.name.last + " is " + this.age + " years old ";
    let pronoun;

    if(this.gender === "male" || this.gender === "Male" || this.gender === "m" || this.gender === "M") {
        pronoun = "He likes ";
    } else if(this.gender === "female" || this.gender === "Female" || this.gender === "f" || this.gender === "F") {
        pronoun = "She likes ";
    } else {
        pronoun = "They like ";
    }

    string = pronoun;

    if(this.interest.length === 1) {
        string += this.interest[0] + " . ";
    } else if(this.interest.length === 2) {
        string += this.interest[0] + " and " + this.interest[1] + " . ";
    } else {
        for(let i = 0; i < this.interest.length; i++) {
            if(i === this.interest.length - 1) {
                string += "and " + this.interest[i] + " . ";
            } else {
                string += this.interest[i] + " . ";
            }
        }
    }
    alert(string);
};

Person.prototype.greting = function() {
    alert("Hi I\m " + this.name.first + " . ");
}

Person.prototype.chucho = function() {
    alert(this.name.first + " has left the bulding. Bye for now");
}

let person1 = new Person("Tami", "Salazar", 42, "female", ["Escuchar musica", "Leer", "Hacer manualidades"]);

function Teacher(first, last, age, gender, interest, subject) {
    Person.call(this, first, last, age, gender, interest);

    this.subject = subject;
}