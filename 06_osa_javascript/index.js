

let count = 25;
count = 26;

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const misc = [15, "word", true, "multiple words"];

console.log(fruits[1]); // tulostaa: banana

let person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  console.log(person.city); // Tulostaa: New York

  const person3 = {
    firstName: "Jane",
    LastName: "Doe",
    age: 30,
  };

  function Person1(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  const person1 = new Person1("Alice", "Johnson", 30);
  
  class Person2 {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }
  const person2 = new Person2("Bertta", "Jääskeläinen", 28);

    console.log(person.firstName); // Käyttö
    person.lastName = "Doe"; // Muokkaus

    const person4 = {
        name: "Alice",
        age: 30,
      };
      
      console.log(person4.name); // Tulostaa: Alice
      console.log(person4.age); // Tulostaa: 30

        const property = "name";
        console.log(person[property]); // Tulostaa: John

        const person5 = {
            "full name": "Alice Johnson",
        };

        console.log(person5["full name"]); // Tulostaa: Alice Johnson

        person.age = 31;
        console.log(person.age); // Tulostaa: 31

        person["age"] = 32;
        console.log(person.age); // Tulostaa: 32

        person.email = "alice@esimerkki.com";
        console.log(person.email); // Tulostaa: alice@esimerkki.com

        person["phoneNumber"] = "123-456-7890";
        console.log(person["phoneNumber"]); // Tulostaa: 123-456-7890

        delete person.age;
        console.log(person.age); // Tulostaa: undefined

        delete person["phoneNumber"];
        console.log(person.phoneNumber); // Tulostaa: undefined


        //Olio-metodit ja -prototyypit

        const person6 = {
            name: "Jane",
            tervehdi: function () {
              // tämä funktio on person-olion metodi
              console.log(`Hei, nimeni on ${this.name}.`);
            },
          };
          
          person6.tervehdi(); // olio-metodin kutsuminen

          // Määrittele prototyyppiolio
        const personPrototype = {
            greet: function () {
            console.log(`Hei, nimeni on ${this.name}`);
    },
  };
  
  // Luo uusi olio, joka perii prototyypistä
        const person7 = Object.create(personPrototype);
        person7.name = "Jussi";
        person7.greet(); // Tulostaa: Hei, nimeni on Jussi

        // Määrittele luokka
    class Person {
        constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
        greet() {
        console.log(`Hei, nimeni on ${this.name} ja olen ${this.age} vuotta.`);
    }
  }
  
  // Luo uusi olio käyttämällä luokkaa
        const johanna = new Person("Johanna", 46);
        johanna.greet(); // Tulostaa: Hei, nimeni on Johanna

        const jsonMerkkijono = JSON.stringify(person); // Olio JSON-muotoon
        const jsonOlio = JSON.parse(jsonMerkkijono); // JSON takaisin olioksi
        
        const henkilö = {
            nimi: "Matti Meikäläinen",
            ikä: 30,
          };
          
          const jsonMerkkijono1 = '{"name":"Matti Meikäläinen","age":30}';
            const henkilöOlio = JSON.parse(jsonMerkkijono);
          console.log(henkilöOlio); // Tuloste: { name: 'Matti Meikäläinen', age: 30 }


          // Tietojen tallentaminen
            localStorage.setItem("username", "JoniPoika");

            // Tietojen hakeminen
            const userName = localStorage.getItem("username");
            console.log(userName); // Tulostaa: JoniPoika

            // Tietojen poistaminen
            localStorage.removeItem("username");

            // Kaikkien tietojen tyhjentäminen
            localStorage.clear();


            //Eväste:
            document.cookie = "username=JoniPoika; expires=Fri, 31 Dec 2024 23:59:59 GMT";