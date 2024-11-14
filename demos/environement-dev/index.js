let str = "Une chaine de caractères";

let i = 10;

let numbers = [1, 2, 3, 5, 7];

//Déclarer un objet JavaScript
//Un dictionnaire de clefs/valeur
let obj = {
    lastName : 'Doe',
    firstName : 'Jane'
}

//Acceder à une propriété d'un objet
console.log(obj.firstName, obj.lastName);


//Constructeur d'objets qui représentent une personne
//Nom, prénom

// let jane = {
//     firstName: 'Jane',
//     lastName: 'Doe',
// }

// let john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

//Fabrique des objets à la chaine avec les mêmes propriétés
//La fonction constructeur prend en arguments les données
//pour fabriquer et initialiser l'objet
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    //Enrichir notre modèle de "Personne"
    //avec une fonction. Une fonction appartenant
    //à un objet => une méthode
    this.greet = function(){
        //Dire bonjour sur la console
        console.log("Hi, I'm " + this.firstName + " " + this.lastName)
    }
}
//Créer un objet à partir de la fonction constructeur
let john = new Person('John', 'Doe');
let jane = new Person('Jane', 'Doe')
let lilou = new Person('Lilou', 'Doe');

//Tests

lilou.greet()
jane.greet();
john.greet();

console.log(lilou, jane, john)

//Prototype


// let someObject = new Object('foo', 'bar');
// console.log(someObject)


//Les classes (sucre syntaxique)

// function Rectangle(hauteur, largeur){
//     this.hauteur = hauteur;
//     this.largeur = largeur;
// }

// Rectangle.prototype.surface = function(){
//     return this.hauteur * this.largeur;
// }

// let rectangles = [new Rectangle(1,1), new Rectangle(2,2)]


// class Rectangle {
//     //Remplacement de la fonction Constructeur
//     constructor(hauteur, largeur) {
//       this.hauteur = hauteur;
//       this.largeur = largeur;
//     }

//     //Enregistrée sur le prototype (partage de code ok)
//     surface(){
//         return this.hauteur * this.largeur;
//     }
// }

//let rect = new Rectangle(2, 10);
//console.log(rect)
  

